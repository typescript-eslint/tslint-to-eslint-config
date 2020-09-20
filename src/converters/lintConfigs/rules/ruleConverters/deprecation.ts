import { RuleConverter } from "../ruleConverter";

export const convertDeprecation: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "import/no-deprecated",
            },
        ],
        plugins: ["eslint-plugin-import"],
    };
};
