import { RuleConverter } from "../ruleConverter";

export const convertJsxSelfClose: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "react/self-closing-comp",
            },
        ],
        plugins: ["eslint-plugin-react"],
    };
};
