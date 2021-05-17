import { ConversionError } from "../../../errors/conversionError";
import { ConversionResult } from "./ruleConverter";

export const OBSOLETE_RULE_NOTICE = (tslintRuleName: string, pluginName: string) =>
    `"${tslintRuleName}" rule is no longer supported by the plugin ${pluginName}.`;

export const convertObsoleteRule = (
    tslintRuleName: string,
    pluginName: string,
): ConversionError | ConversionResult => {
    return {
        rules: [
            {
                ruleName: "",
                notices: [OBSOLETE_RULE_NOTICE(tslintRuleName, pluginName)],
            },
        ],
    };
};
