import { EOL } from "os";

import { TSLintRuleOptions } from "../rules/types";
import { ErrorSummary } from "./errorSummary";
import { EditorSettingOptions } from "../settings/types";

export class ConversionError implements ErrorSummary {
    private constructor(private readonly summary: string) {}

    public static forMerger(eslintRule: string) {
        return new ConversionError(
            [
                `Error: multiple output ${eslintRule} ESLint rule options were generated, but tslint-to-eslint-config doesn't have "merger" logic to deal with this.`,
                `Please file an issue at https://github.com/typescript-eslint/tslint-to-eslint-config/issues/new?template=missing_merger.md 🙏`,
            ].join(EOL),
        );
    }

    public static forRuleError(error: Error, tslintRule: TSLintRuleOptions) {
        return new ConversionError(
            `${tslintRule.ruleName} threw an error during conversion: ${error.stack}${EOL}`,
        );
    }

    public static forSettingError(error: Error, editorSetting: EditorSettingOptions) {
        return new ConversionError(
            `${editorSetting.settingName} threw an error during conversion: ${error.stack}${EOL}`,
        );
    }

    public getSummary(): string {
        return this.summary;
    }
}
