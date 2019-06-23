import { TSLintRuleOptions } from "./types";
import { ConversionError } from "./conversionError";
import { RuleConverter } from "./converter";

export const convertRule = (
    tslintRule: TSLintRuleOptions,
    converters: Map<string, RuleConverter>,
) => {
    const converter = converters.get(tslintRule.ruleName);
    if (converter === undefined) {
        return undefined;
    }

    try {
        return converter(tslintRule);
    } catch (error) {
        return new ConversionError(error, tslintRule);
    }
};
