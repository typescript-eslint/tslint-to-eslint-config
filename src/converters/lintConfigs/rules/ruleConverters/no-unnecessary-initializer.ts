import { RuleConverter } from "../ruleConverter.js";

export const convertNoUnnecessaryInitializer: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-undef-init",
            },
        ],
    };
};
