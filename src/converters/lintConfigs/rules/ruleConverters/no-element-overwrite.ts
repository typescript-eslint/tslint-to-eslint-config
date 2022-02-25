import { RuleConverter } from "../ruleConverter.js";

export const convertNoElementOverwrite: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "sonarjs/no-element-overwrite",
            },
        ],
        plugins: ["sonarjs"],
    };
};
