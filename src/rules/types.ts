export type TSLintRuleSeverity = "warning" | "error" | "off";

export type TSLintRuleOptions = {
    ruleArguments: any[];
    ruleName: string;
    ruleSeverity: TSLintRuleSeverity;
};

export type ESLintRuleSeverity = "warn" | "error" | "off";

export type ESLintRuleOptions = {
    notices?: any[];
    ruleArguments?: any[];
    ruleName: string;
    ruleSeverity: ESLintRuleSeverity;
};
