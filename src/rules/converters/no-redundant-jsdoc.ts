import { RuleConverter } from "../converter";

export const convertNoRedundantJsdoc: RuleConverter = () => ({
    rules: [
        {
            ruleName: "jsdoc/no-types",
        },
    ],
    plugins: ["eslint-plugin-jsdoc"],
});
