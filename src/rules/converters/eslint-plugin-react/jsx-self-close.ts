import { RuleConverter } from "../../converter";

export const convertJsxSelfClose: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "react/jsx-self-close",
            },
        ],
        plugins: ["eslint-plugin-react"],
    };
};
