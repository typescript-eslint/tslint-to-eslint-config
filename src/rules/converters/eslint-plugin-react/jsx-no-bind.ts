import { RuleConverter } from "../../converter";

export const convertJsxNoBind: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "react/jsx-no-bind",
            },
        ],
        plugins: ["eslint-plugin-react"],
    };
};
