import { RuleConverter } from "../../ruleConverter";

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
