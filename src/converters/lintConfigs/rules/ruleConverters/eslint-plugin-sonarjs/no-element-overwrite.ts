import { RuleConverter } from "../../ruleConverter";

export const convertNoElementOverwrite: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "sonarjs/no-element-overwrite",
            },
        ],
        plugins: ["eslint-plugin-sonarjs"],
    };
};
