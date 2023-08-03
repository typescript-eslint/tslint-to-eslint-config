import { TSLintConfiguration } from "../../input/findTSLintConfiguration";
import { formatMissingRules } from "./formatMissingRules";
import { RuleConversionResults } from "./rules/convertRules";
import { ESLintRuleOptions } from "./rules/types";

export const formatConvertedRules = (
    conversionResults: RuleConversionResults,
    tslintConfiguration: TSLintConfiguration,
) => {
    const output: Record<string, any[] | string> = {};
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
