import { RuleConverter, ConvertedRuleChanges } from "../converter";

export const convertJSDocFormat: RuleConverter = () => {
    const ruleNames: string[] = [
        "jsdoc/check-alignment",
        "jsdoc/require-jsdoc",
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
