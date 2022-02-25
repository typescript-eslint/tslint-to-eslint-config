import { RuleConverter } from "../ruleConverter.js";

const unsupportedTSLintOptions = [
    "import-sources-order",
    "module-source-path",
    "named-imports-order",
];

export const convertOrderedImports: RuleConverter = (tslintRule) => {
    const notices = unsupportedTSLintOptions
        .filter((option) => tslintRule.ruleArguments.includes(option))
        .map((option) => `Option "${option}" is not supported by ESLint.`);

    return {
        plugins: ["eslint-plugin-import"],
        rules: [
            {
                ...(notices.length !== 0 && { notices }),
                ruleName: "import/order",
            },
        ],
    };
};
