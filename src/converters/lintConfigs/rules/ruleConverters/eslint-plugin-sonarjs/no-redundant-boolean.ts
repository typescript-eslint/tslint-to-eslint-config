import { RuleConverter } from "../../ruleConverter";

export const convertNoRedundantBoolean: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "sonarjs/no-redundant-boolean",
            },
        ],
        plugins: ["eslint-plugin-sonarjs"],
    };
};
