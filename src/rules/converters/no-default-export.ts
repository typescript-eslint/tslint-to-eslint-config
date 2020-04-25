import { RuleConverter } from "../converter";

export const convertNoDefaultExport: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "import/no-default-export",
            },
        ],
        plugins: ["eslint-plugin-import"],
    };
};
