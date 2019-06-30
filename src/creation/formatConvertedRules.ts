import { TSLintConfiguration } from "../input/findTSLintConfiguration";
import { ConfigConversionResults } from "../rules/convertRules";
import { ESLintRuleOptions } from "../rules/types";
import { formatMissingRules } from "./formatMissingRules";

export const formatConvertedRules = (
    conversionResults: ConfigConversionResults,
    tslintConfiguration: TSLintConfiguration,
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
            tslintConfiguration.ruleDirectories,
        );
    }

    return output;
};

const formatConvertedRule = (rule: ESLintRuleOptions) => {
    return rule.ruleArguments === undefined || rule.ruleArguments.length === 0
        ? rule.ruleSeverity
        : [rule.ruleSeverity, ...rule.ruleArguments];
};
