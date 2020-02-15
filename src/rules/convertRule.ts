import { ConversionError } from "../errors/conversionError";
import { RuleConverter, ConversionResult } from "./converter";
import { TSLintRuleOptions } from "./types";

type ConvertRule = ConversionError | ConversionResult | undefined;

export const convertRule = (
    tslintRule: TSLintRuleOptions,
    converters: Map<string, RuleConverter>,
): ConvertRule => {
    const converter = converters.get(tslintRule.ruleName);
    if (converter === undefined) {
        return undefined;
    }

    try {
        return converter(tslintRule);
    } catch (error) {
        return ConversionError.forRuleError(error, tslintRule);
    }
};
