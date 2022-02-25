import { RuleConverter } from "../ruleConverter.js";

export const convertNoUselessCatch: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "sonarjs/no-useless-catch",
            },
        ],
        plugins: ["sonarjs"],
    };
};
