import { RuleConverter } from "../ruleConverter.js";

export const convertNoUnconditionalJump: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "sonarjs/no-one-iteration-loop",
            },
        ],
        plugins: ["sonarjs"],
    };
};
