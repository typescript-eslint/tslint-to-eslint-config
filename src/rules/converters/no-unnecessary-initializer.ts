import { RuleConverter } from "../converter";

export const convertNoUnnecessaryInitializer: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-undef-init",
            },
        ],
    };
};
