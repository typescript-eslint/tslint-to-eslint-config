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
    const noAllowNewNotice = `The TSLint optional config "allow-new" is the default ESLint behavior and  will no longer be ignored.`;

    if (tsLintRuleArguments.length === 0) {
        return {
            notices: [noAllowNewNotice],
        };
    }

    const notices = [];
    const ruleArguments: any[] = [];

    if (tsLintRuleArguments.includes("allow-tagged-template")) {
        ruleArguments.push({ allowTaggedTemplates: true });
    }

    if (tsLintRuleArguments.includes("allow-fast-null-checks")) {
        ruleArguments.push({ allowShortCircuit: true });
    }

    if (!tsLintRuleArguments.includes("allow-new")) {
        notices.push(noAllowNewNotice);
    }

    return {
        ...(notices.length > 0 && { notices }),
        ...(ruleArguments.length > 0 && {
            ruleArguments: [
                ruleArguments.reduce((value, current) => Object.assign(value, current), {}),
            ],
        }),
    };
};
