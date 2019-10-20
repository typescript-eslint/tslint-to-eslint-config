import { RuleConverter } from "../converter";

export const convertNoImportSideEffect: RuleConverter = tsLintRule => {
    const rules = [];
    const notices = [];

    if (tsLintRule.ruleArguments.length > 0) {
        rules.push({ allow: tsLintRule.ruleArguments[1]["ignore-module"] });
        notices.push(
            "ESLint's no-import-side-effect now accepts a glob pattern for ignores; you'll need to manually convert your ignore-module settings.",
        );
    }

    return {
        rules: [
            {
                ruleArguments: rules,
                ruleName: "no-import-side-effect",
                notices: notices,
            },
        ],
    };
};
