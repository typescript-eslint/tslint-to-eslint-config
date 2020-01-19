import { RuleConverter, ConvertedRuleChanges } from "../converter";

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
        plugins: ["eslint-plugin-jsdoc"],
    };
};
