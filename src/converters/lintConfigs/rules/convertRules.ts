import { ruleConverters } from "../../../converters/lintConfigs/rules/ruleConverters";
import { ruleMergers } from "../../../converters/lintConfigs/rules/ruleMergers";
import { ConversionError } from "../../../errors/conversionError";
import { ErrorSummary } from "../../../errors/errorSummary";
import { TSLintConfigurationRules } from "../../../input/findTSLintConfiguration";
import { convertRule } from "./convertRule";
import { convertTSLintRuleSeverity } from "./formats/convertTSLintRuleSeverity";
import { formatRawTslintRule } from "./formats/formatRawTslintRule";
import { RuleMerger } from "./ruleMerger";
import { RuleConverter } from "./ruleConverter";
import { TSLintRuleOptions, ESLintRuleOptions } from "./types";

export type ConvertRulesDependencies = {
    ruleConverters: Map<string, RuleConverter>;
    ruleMergers: Map<string, RuleMerger>;
};

export const convertRulesDependencies: ConvertRulesDependencies = {
    ruleConverters,
    ruleMergers,
};

export type RuleConversionResults = {
    converted: Map<string, ESLintRuleOptions>;
    failed: ErrorSummary[];
    missing: TSLintRuleOptions[];
    plugins: Set<string>;
    ruleEquivalents: Map<string, string[]>;
};

/**
 * Converts raw TSLint rules to their ESLint equivalents.
 * @see `/docs/Architecture/Linting.md` for documentation.
 */
export const convertRules = (
    dependencies: ConvertRulesDependencies,
    rawTslintRules: TSLintConfigurationRules | undefined,
    ruleEquivalents: Map<string, string[]>,
): RuleConversionResults => {
    const converted = new Map<string, ESLintRuleOptions>();
    const failed: ConversionError[] = [];
    const missing: TSLintRuleOptions[] = [];
    const plugins = new Set<string>();

    if (rawTslintRules !== undefined) {
        for (const [ruleName, value] of Object.entries(rawTslintRules)) {
            // 1. The raw TSLint rule is converted to a standardized format.
            const tslintRule = formatRawTslintRule(ruleName, value);

            // 2. The appropriate converter is run for the rule.
            const conversion = convertRule(tslintRule, dependencies.ruleConverters);

            // 3. If the rule is missing or the conversion failed, this is marked.
            if (conversion === undefined) {
                if (tslintRule.ruleSeverity !== "off") {
                    missing.push(tslintRule);
                }

                continue;
            }

            if (conversion instanceof ConversionError) {
                failed.push(conversion);
                continue;
            }

            const equivalents = new Set<string>();

            // 4. For each output rule equivalent given by the conversion:
            for (const changes of conversion.rules) {
                // 4a. The output rule name is added to the TSLint rule's equivalency set.
                equivalents.add(changes.ruleName);

                // 4b. The TSLint rule's config severity is mapped to its ESLint equivalent.
                const existingConversion = converted.get(changes.ruleName);
                const newConversion = {
                    ...changes,
                    ruleSeverity: convertTSLintRuleSeverity(tslintRule.ruleSeverity),
                };

                // 4c. If this is the first time the output ESLint rule is seen, it's directly marked as converted.
                if (existingConversion === undefined) {
                    converted.set(changes.ruleName, newConversion);
                    continue;
                }

                // 4d. If not, a rule merger is run to combine it with its existing output settings.
                const merger = dependencies.ruleMergers.get(changes.ruleName);
                if (merger === undefined) {
                    failed.push(ConversionError.forMerger(changes.ruleName));
                } else {
                    const existingNotices = existingConversion.notices ?? [];
                    const newNotices = newConversion.notices ?? [];

                    converted.set(changes.ruleName, {
                        ...existingConversion,
                        ruleArguments: merger(
                            existingConversion.ruleArguments,
                            newConversion.ruleArguments,
                        ),
                        notices: Array.from(new Set([...existingNotices, ...newNotices])),
                    });
                }
            }

            if (conversion.plugins !== undefined) {
                for (const newPlugin of conversion.plugins) {
                    plugins.add(newPlugin);
                }
            }

            ruleEquivalents.set(tslintRule.ruleName, Array.from(equivalents));
        }
    }

    return { converted, failed, missing, plugins, ruleEquivalents };
};
