import prettierRuleSettings from "eslint-config-prettier";

import { RuleConversionResults } from "../../rules/convertRules";

export const addPrettierExtensions = async (
    ruleConversionResults: Pick<RuleConversionResults, "converted">,
    prettierRequested?: boolean,
) => {
    if (prettierRequested) {
        return true;
    }

    for (const rule in prettierRuleSettings.rules) {
        const convertedRule = ruleConversionResults.converted.get(rule);
        if (convertedRule !== undefined && convertedRule.ruleSeverity !== "off") {
            return false;
        }
    }

    return true;
};
