import { ConfigConversionResults } from "../rules/convertRules";
import { ESLintRuleOptions } from "../rules/types";
import { formatMissingRules } from "./formatMissingRules";
import { TSLintConfiguration } from "../input/findTslintConfiguration";

export const formatConvertedRules = (
    conversionResults: ConfigConversionResults,
    originalConfiguration: TSLintConfiguration,
) => {
    const output: { [i: string]: string | any[] } = {};
    const sortedRuleEntries = Array.from(conversionResults.converted).sort(
        ([ruleNameA], [ruleNameB]) => ruleNameA.localeCompare(ruleNameB),
    );

    for (const [ruleName, rule] of sortedRuleEntries) {
        output[ruleName] = formatConvertedRule(rule);
    }

    if (conversionResults.missing.length !== 0) {
        output["@typescript-eslint/tslint/config"] = formatMissingRules(
            conversionResults.missing,
            originalConfiguration.ruleDirectories,
        );
    }

    return output;
};

const formatConvertedRule = (rule: ESLintRuleOptions) => {
    return rule.ruleArguments === undefined || rule.ruleArguments.length === 0
        ? rule.ruleSeverity
        : [rule.ruleSeverity, ...rule.ruleArguments];
};
