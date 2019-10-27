import { RuleConverter } from "../converter";

export const convertNoImportSideEffect: RuleConverter = tsLintRule => {
    return {
        rules: [
            {
                ruleName: "no-import-side-effect",
                ...(tsLintRule.ruleArguments.length !== 0 && {
                    notices: [
                        "ESLint's no-import-side-effect now accepts a glob pattern for ignores; you'll need to manually convert your ignore-module settings.",
                    ],
                }),
            },
        ],
    };
};
