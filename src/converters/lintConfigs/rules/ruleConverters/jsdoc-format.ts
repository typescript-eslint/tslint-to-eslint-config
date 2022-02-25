import { ConvertedRuleChanges, RuleConverter } from "../ruleConverter.js";

export const JSDocNoticeMsg =
    "ESLint does not support enforcing the first line of multiline JSDoc comments be empty.";

export const convertJSDocFormat: RuleConverter = () => {
    const ruleNames = [
        "jsdoc/check-alignment",
        "jsdoc/check-indentation",
        "jsdoc/newline-after-description",
    ];

    const mappedRuleNames: ConvertedRuleChanges[] = ruleNames.map((ruleName) => {
        return { ruleName };
    });

    return {
        rules: [...mappedRuleNames],
        notices: [JSDocNoticeMsg],
        plugins: ["eslint-plugin-jsdoc"],
    };
};
