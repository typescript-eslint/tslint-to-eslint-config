import { ConversionError } from "./conversionError";
import { TSLintRuleOptions } from "./types";

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
     * Any packages that should now be installed if not already.
     */
    packages?: string[];

    /**
     * At least one equivalent ESLint rule and options.
     */
    rules: ConvertedRuleChanges[];
};

/**
 * An ESLint rule equivalent to a previously enabled TSLint rule.
 */
export type ConvertedRuleChanges = {
    notices?: string[];
    ruleArguments?: any[];
    ruleName: string;
};
