import { RuleConverter } from "../ruleConverter.js";

export const BAN_TS_IGNORE_NOTICE =
    "The typescript-eslint now bans @ts-<directive> comments from being used";

export const convertBanTsIgnore: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/ban-ts-comment",
                notices: [BAN_TS_IGNORE_NOTICE],
            },
        ],
    };
};
