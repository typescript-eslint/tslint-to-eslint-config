import { RuleConverter } from "../../converter";

export const convertJsxWrapMultiline: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "react/jsx-wrap-multilines",
            },
        ],
        plugins: ["eslint-plugin-react"],
    };
};
