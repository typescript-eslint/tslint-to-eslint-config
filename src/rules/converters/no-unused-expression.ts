import { RuleConverter } from "../converter";

export const convertNoUnusedExpression: RuleConverter = tslintRule => {
    return {
        rules: [
            {
                ruleName: "no-unused-expressions",
                ...collectNoticesAndArguments(tslintRule.ruleArguments),
            },
        ],
    };
};

const collectNoticesAndArguments = (tsLintRuleArguments: any[]) => {
    if (tsLintRuleArguments.length === 0) {
        return undefined;
    }

    const notices = [];
    const ruleArguments: any[] = [];

    if (tsLintRuleArguments.includes("allow-tagged-template")) {
        ruleArguments.push({ allowTaggedTemplates: true });
    } else {
        notices.push(`ESLint does not support optional config ${tsLintRuleArguments[0]}.`);
    }

    return {
        ...(notices.length > 0 && { notices }),
        ...(ruleArguments.length > 0 && { ruleArguments }),
    };
};
