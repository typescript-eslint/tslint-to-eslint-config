import { ConversionError } from "../../errors/conversionError";
import { TSLintToESLintSettings } from "../../types";
import { EditorSetting } from "./types";

/**
 * Attempts to convert a TSLint editor setting into the ESLint equivalents.
 */
export type EditorSettingConverter = (
    tslintEditorSetting: EditorSetting,
    settings: TSLintToESLintSettings,
) => ConversionError | EditorSettingConversionResult | undefined;

/**
 * Successful result from converting a TSLint editor setting to its ESLint equivalents.
 */
export type EditorSettingConversionResult = {
    /**
     * At least one equivalent ESLint setting.
     */
    settings: ConvertedEditorSettingChanges[];
};

/**
 * An ESLint editor setting equivalent to a previously enabled TSLint editor setting.
 */
export type ConvertedEditorSettingChanges = {
    /**
     * Any values for that ESLint editor setting.
     */
    value: any;

    /**
     * Equivalent ESLint editor setting name that should be enabled.
     */
    editorSettingName: string;
};
