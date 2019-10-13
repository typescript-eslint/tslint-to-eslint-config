import { RuleConverter } from "../converter";

export const convertNoImportSideEffect: RuleConverter = tsLintRule => {
    const rules = [];
    const notices = [];

    if (tsLintRule.ruleArguments.length > 0) {
        rules.push({ allow: tsLintRule.ruleArguments[1]["ignore-module"] });
        notices.push("This now accepts a glob pattern, so your regex may need converted");
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
