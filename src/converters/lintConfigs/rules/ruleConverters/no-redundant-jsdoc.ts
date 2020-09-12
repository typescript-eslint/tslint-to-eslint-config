import { RuleConverter } from "../ruleConverter";

export const convertNoRedundantJsdoc: RuleConverter = () => ({
    rules: [
        {
            ruleName: "jsdoc/no-types",
        },
    ],
    plugins: ["eslint-plugin-jsdoc"],
});
