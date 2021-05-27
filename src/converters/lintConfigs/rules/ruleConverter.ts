import { ConversionError } from "../../../errors/conversionError";
import { ESLintRuleSeverity, TSLintRuleOptions } from "./types";

/**
 * Section of a TSLint rule's options used for conversion.
 */
export type RuleConverterOptions = Pick<TSLintRuleOptions, "ruleArguments">;

/**
 * Attempts to convert the options for a TSLint rule into the ESLint equivalents.
 */
export type RuleConverter = (
    tslintRule: RuleConverterOptions,
) => ConversionError | ConversionResult;

/**
 * Successful result from converting a TSLint rule to its ESLint equivalents.
 */
export type ConversionResult = {
    /**
     * Any extra info that should be printed after conversion.
     */
    notices?: string[];

    /**
     * Any plugins that should now be installed if not already.
     */
    plugins?: string[];

    /**
     * At least one equivalent ESLint rule and options.
     */
    rules: ConvertedRuleChanges[];
};

/**
 * An ESLint rule equivalent to a previously enabled TSLint rule.
 */
export type ConvertedRuleChanges = {
    /**
     * Any notices associated with that ESLint rule.
     */
    notices?: string[];

    /**
     * Any arguments for that ESLint rule.
     */
    ruleArguments?: any[];

    /**
     * Equivalent ESLint rule name that should be enabled.
     */
    ruleName: string;

    /**
     * Custom severity for the output rule.
     */
    ruleSeverity?: ESLintRuleSeverity;
};
