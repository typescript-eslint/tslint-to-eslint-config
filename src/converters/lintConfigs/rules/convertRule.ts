import { ConversionError } from "../../../errors/conversionError.js";
import { RuleConverter } from "./ruleConverter.js";
import { TSLintRuleOptions } from "./types.js";

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
        return ConversionError.forRuleError(error as Error, tslintRule);
    }
};
