/**
 * Severity level for an individual TSLint rule in a TSLint configuration file.
 *
 * @see https://palantir.github.io/tslint/usage/configuration
 */
export type TSLintRuleSeverity = "error" | "off" | "warning";

/**
 * Rich descriptor and options for an individual TSLint rule.
 */
export type TSLintRuleOptions = {
    ruleArguments: any[];
    ruleName: string;
    ruleSeverity: TSLintRuleSeverity;
};

/**
 * Possible reported severities for an ESLint rule's configuration.
 *
 * @see https://eslint.org/docs/user-guide/configuring#configuring-rules
 */
export type ESLintRuleSeverity = "error" | "off" | "warn";

/**
 * Permitted severities for an ESLint rule's configuration.
 *
 * @see https://eslint.org/docs/user-guide/configuring#configuring-rules
 */
export type RawESLintRuleSeverity = ESLintRuleSeverity | 0 | 1 | 2;

/**
 * Output descriptor and options for a converted ESLint rule.
 */
export type ESLintRuleOptions = {
    notices?: any[];
    ruleArguments?: any[];
    ruleName: string;
    ruleSeverity: ESLintRuleSeverity;
};

/**
 * Output descriptor and options for a converted ESLint rule, including arguments.
 */
export type ESLintRuleOptionsWithArguments = ESLintRuleOptions & {
    ruleArguments: any[];
};
