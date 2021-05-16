import { ConversionError } from "../../../errors/conversionError";
import { RuleConverter } from "./ruleConverter";
import { TSLintRuleOptions } from "./types";

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
    } catch (error: unknown) {
        // TODO: Maybe we can provide a different error message for generic errors.
        return error instanceof ConversionError
            ? ConversionError.forRuleError(error, tslintRule)
            : ConversionError.forRuleError(error as ConversionError, tslintRule);
    }
};
