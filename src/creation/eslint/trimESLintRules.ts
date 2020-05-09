import { ESLintConfigurationRules } from "../../input/findESLintConfiguration";
import { ESLintRuleOptions } from "../../rules/types";
import { removeExtendsDuplicatedRules } from "../pruning/removeExtendsDuplicatedRules";
import { convertRawESLintRuleSeverity } from "../../rules/formats/convertRuleSeverity";

export const trimESLintRules = (
    rules: ESLintConfigurationRules | undefined,
    extensionRules: Map<string, ESLintRuleOptions>,
) => {
    if (rules === undefined) {
        return undefined;
    }

    const parsedRules = Object.entries(rules).map(([ruleName, configuration]): [
        string,
        ESLintRuleOptions,
    ] => {
        const [rawRuleSeverity, ruleArguments] =
            configuration instanceof Array ? configuration : [configuration, {}];
        const ruleSeverity = convertRawESLintRuleSeverity(rawRuleSeverity);

        return [ruleName, { ruleArguments, ruleName, ruleSeverity }];
    });

    return removeExtendsDuplicatedRules(new Map(parsedRules), extensionRules);
};
