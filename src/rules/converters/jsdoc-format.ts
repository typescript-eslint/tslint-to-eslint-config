import { RuleConverter, ConvertedRuleChanges } from "../converter";

export const JSDocNoticeMsg =
    "ESLint does not support enabling check for multiline comments in the first line";

export const convertJSDocFormat: RuleConverter = () => {
    const ruleNames = [
        "jsdoc/check-alignment",
        "jsdoc/check-indentation",
        "jsdoc/newline-after-description",
    ];

    const mappedRuleNames: ConvertedRuleChanges[] = ruleNames.map(ruleName => {
        return { ruleName };
    });

    return {
        rules: [...mappedRuleNames],
        notices: [JSDocNoticeMsg],
        plugins: ["eslint-plugin-jsdoc"],
    };
};
