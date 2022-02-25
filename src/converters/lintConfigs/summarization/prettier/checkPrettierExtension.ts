import prettierRuleSettings from "eslint-config-prettier";

import { RuleConversionResults } from "../../rules/convertRules.js";

export const checkPrettierExtension = (
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
