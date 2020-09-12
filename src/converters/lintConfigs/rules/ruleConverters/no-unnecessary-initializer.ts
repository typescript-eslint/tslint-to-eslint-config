import { RuleConverter } from "../ruleConverter";

export const convertNoUnnecessaryInitializer: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-undef-init",
            },
        ],
    };
};
