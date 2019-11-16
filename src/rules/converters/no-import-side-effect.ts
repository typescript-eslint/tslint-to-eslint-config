import { RuleConverter } from "../converter";

export const convertNoImportSideEffect: RuleConverter = tsLintRule => {
    return {
        rules: [
            {
                plugins: ["eslint-plugin-import"],
                ruleName: "import/no-unassigned-import",
                ...(tsLintRule.ruleArguments.length !== 0 && {
                    notices: [
                        "ESLint's import/no-unassigned-import now accepts a glob pattern for ignores; you'll need to manually convert your ignore-module settings.",
                    ],
                }),
            },
        ],
    };
};
