import { RuleConverter } from "../../converter";

export const convertJsxKey: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "react/jsx-key",
                ruleArguments: ["<enabled>"],
            },
        ],
        plugins: ["eslint-plugin-react"],
    };
};
