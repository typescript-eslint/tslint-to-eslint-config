import { ConversionError } from "../errors/conversionError";
import { ErrorSummary } from "../errors/errorSummary";
import { TSLintConfigurationRules } from "../input/findTSLintConfiguration";
import { RuleConverter } from "./converter";
import { convertRule } from "./convertRule";
import { convertTSLintRuleSeverity } from "./convertRuleSeverity";
import { formatRawTslintRule } from "./formatRawTslintRule";
import { RuleMerger } from "./merger";
import { TSLintRuleOptions, ESLintRuleOptions } from "./types";

export type ConvertRulesDependencies = {
    converters: Map<string, RuleConverter>;
    mergers: Map<string, RuleMerger>;
};

export type RuleConversionResults = {
    converted: Map<string, ESLintRuleOptions>;
    failed: ErrorSummary[];
    missing: TSLintRuleOptions[];
    plugins: Set<string>;
};

export const convertRules = (
    dependencies: ConvertRulesDependencies,
    rawTslintRules: TSLintConfigurationRules,
): RuleConversionResults => {
    const converted = new Map<string, ESLintRuleOptions>();
    const failed: ConversionError[] = [];
    const missing: TSLintRuleOptions[] = [];
    const plugins = new Set<string>();

    for (const [ruleName, value] of Object.entries(rawTslintRules)) {
        const tslintRule = formatRawTslintRule(ruleName, value);
        const conversion = convertRule(tslintRule, dependencies.converters);

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

        for (const changes of conversion.rules) {
            const existingConversion = converted.get(changes.ruleName);
            const newConversion = {
                ...changes,
                ruleSeverity: convertTSLintRuleSeverity(tslintRule.ruleSeverity),
            };

            if (existingConversion === undefined) {
                converted.set(changes.ruleName, newConversion);
                continue;
            }

            const merger = dependencies.mergers.get(changes.ruleName);
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
    }

    return { converted, failed, missing, plugins };
};
