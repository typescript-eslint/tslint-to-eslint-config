import { TSLintConfiguration } from "../../input/findTSLintConfiguration.js";
import { formatMissingRules } from "./formatMissingRules.js";
import { RuleConversionResults } from "./rules/convertRules.js";
import { ESLintRuleOptions } from "./rules/types.js";

export const formatConvertedRules = (
    conversionResults: RuleConversionResults,
    tslintConfiguration: TSLintConfiguration,
) => {
    const output: Record<string, string | any[]> = {};
    const sortedRuleEntries = Array.from(conversionResults.converted).sort(
        ([ruleNameA], [ruleNameB]) => ruleNameA.localeCompare(ruleNameB),
    );

    for (const [ruleName, rule] of sortedRuleEntries) {
        output[ruleName] = formatConvertedRule(rule);
    }

    if (conversionResults.missing.length !== 0) {
        output["@typescript-eslint/tslint/config"] = formatMissingRules(
            conversionResults.missing,
            tslintConfiguration.rulesDirectory,
        );
    }

    return output;
};

const formatConvertedRule = (rule: ESLintRuleOptions) => {
    return rule.ruleArguments === undefined || rule.ruleArguments.length === 0
        ? rule.ruleSeverity
        : [rule.ruleSeverity, ...rule.ruleArguments];
};
