import { RuleConverter } from "../ruleConverter.js";

export const convertNoRedundantJsdoc: RuleConverter = () => ({
    rules: [
        {
            ruleName: "jsdoc/no-types",
        },
    ],
    plugins: ["eslint-plugin-jsdoc"],
});
