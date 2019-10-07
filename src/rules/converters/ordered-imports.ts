import { RuleConverter } from "../converter";

export const convertOrderedImports: RuleConverter = tslintRule => {
    const notices: string[] = [];
    const unsupportedtslintOptions = [
        "import-sources-order",
        "named-imports-order",
        "module-source-path",
    ];

    unsupportedtslintOptions.forEach(option => {
        if (tslintRule.ruleArguments.includes(option)) {
            notices.push(`Option "${option}" is not supported by ESLint.`);
        }
    });

    return {
        rules: [
            {
                ...(notices.length > 0 && { notices }),
                ruleName: "import/order",
            },
        ],
        plugins: ["import"],
    };
};
