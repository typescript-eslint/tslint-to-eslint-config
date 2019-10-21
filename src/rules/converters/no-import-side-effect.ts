import { RuleConverter } from "../converter";

export const convertNoImportSideEffect: RuleConverter = tsLintRule => {
    const notices = [];

    if (tsLintRule.ruleArguments.length > 0) {
        notices.push(
            "ESLint's no-import-side-effect now accepts a glob pattern for ignores; you'll need to manually convert your ignore-module settings.",
        );
    }

    return {
        rules: [
            {
                ruleArguments: [],
                ruleName: "no-import-side-effect",
                notices: notices,
            },
        ],
    };
};
