import { ConversionError } from "./conversionError";
import { convertRule } from "./convertRule";
import { convertRuleSeverity } from "./convertRuleSeverity";
import { TSLintRuleOptions, ESLintRuleOptions } from "./types";
import { RuleConverter } from "./converter";

export type ConfigConversionResults = {
    converted: Map<string, ESLintRuleOptions>;
    failed: ConversionError[];
    missing: TSLintRuleOptions[];
    packages: Set<string>;
};

export const convertRules = (
    tslintRules: TSLintRuleOptions[],
    converters: Map<string, RuleConverter>,
): ConfigConversionResults => {
    const converted = new Map<string, ESLintRuleOptions>();
    const failed: ConversionError[] = [];
    const missing: TSLintRuleOptions[] = [];
    const packages = new Set<string>();

    for (const tslintRule of tslintRules) {
        const conversion = convertRule(tslintRule, converters);
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
            converted.set(changes.ruleName, {
                ...changes,
                ruleSeverity: convertRuleSeverity(tslintRule.ruleSeverity),
            });
        }

        if (conversion.packages !== undefined) {
            for (const newPackage of conversion.packages) {
                packages.add(newPackage);
            }
        }
    }

    return { converted, failed, missing, packages };
};
