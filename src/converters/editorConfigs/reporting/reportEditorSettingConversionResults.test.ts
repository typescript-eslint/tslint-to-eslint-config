import { EOL } from "os";

import { createStubLogger, expectEqualWrites } from "../../../adapters/logger.stubs";
import { createEmptyEditorSettingConversionResults } from "../editorConversionResults.stubs";
import { EditorSetting } from "../types";

import { reportEditorSettingConversionResults } from "./reportEditorSettingConversionResults";

describe("reportEditorSettingConversionResults", () => {
    it("logs a successful conversion when there is one converted editor setting", () => {
        // Arrange
        const conversionResults = createEmptyEditorSettingConversionResults({
            converted: new Map<string, EditorSetting>([
                [
                    "tslint-editor-setting-one",
                    {
                        editorSettingName: "tslint-editor-setting-one",
                        value: 42,
                    },
                ],
            ]),
        });

        const logger = createStubLogger();

        // Act
        reportEditorSettingConversionResults({ logger }, conversionResults);

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            `${EOL}✨ 1 editor setting replaced with its ESLint equivalent. ✨${EOL}`,
        );
    });

    it("logs successful conversions when there are multiple converted settings", () => {
        // Arrange
        const conversionResults = createEmptyEditorSettingConversionResults({
            converted: new Map<string, EditorSetting>([
                [
                    "tslint-editor-setting-one",
                    {
                        editorSettingName: "tslint-editor-setting-one",
                        value: 42,
                    },
                ],
                [
                    "tslint-editor-setting-two",
                    {
                        editorSettingName: "tslint-editor-setting-two",
                        value: 4711,
                    },
                ],
            ]),
        });

        const logger = createStubLogger();

        // Act
        reportEditorSettingConversionResults({ logger }, conversionResults);

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            `${EOL}✨ 2 editor settings replaced with their ESLint equivalents. ✨${EOL}`,
        );
    });

    it("logs a failed conversion when there is one failed conversion", () => {
        // Arrange
        const conversionResults = createEmptyEditorSettingConversionResults({
            failed: [{ getSummary: () => "It broke." }],
        });

        const logger = createStubLogger();

        // Act
        reportEditorSettingConversionResults({ logger }, conversionResults);

        // Assert
        expectEqualWrites(
            logger.stderr.write,
            `❌ 1 error thrown. ❌`,
            `  Check ${logger.debugFileName} for details.`,
        );
    });

    it("logs failed conversions when there are multiple failed conversions", () => {
        // Arrange
        const conversionResults = createEmptyEditorSettingConversionResults({
            failed: [{ getSummary: () => "It broke." }, { getSummary: () => "It really broke." }],
        });

        const logger = createStubLogger();

        // Act
        reportEditorSettingConversionResults({ logger }, conversionResults);

        // Assert
        expectEqualWrites(
            logger.stderr.write,
            `❌ 2 errors thrown. ❌`,
            `  Check ${logger.debugFileName} for details.`,
        );
    });

    it("logs a missing editor setting when there is a missing setting", () => {
        // Arrange
        const conversionResults = createEmptyEditorSettingConversionResults({
            missing: [
                {
                    editorSettingName: "tslint-editor-setting-one",
                },
            ],
        });

        const logger = createStubLogger();

        // Act
        reportEditorSettingConversionResults({ logger }, conversionResults);

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            `❓ 1 editor setting is not known by tslint-to-eslint-config to have an ESLint equivalent. ❓`,
            `  Check ${logger.debugFileName} for details.`,
        );
        expectEqualWrites(
            logger.info.write,
            `1 editor setting is not known by tslint-to-eslint-config to have an ESLint equivalent:`,
            '  * tslint-to-eslint-config does not know the ESLint equivalent for TSLint\'s "tslint-editor-setting-one".',
        );
    });

    it("logs missing settings when there are missing settings", () => {
        // Arrange
        const conversionResults = createEmptyEditorSettingConversionResults({
            missing: [
                {
                    editorSettingName: "tslint-editor-setting-one",
                },
                {
                    editorSettingName: "tslint-editor-setting-two",
                },
            ],
        });

        const logger = createStubLogger();

        // Act
        reportEditorSettingConversionResults({ logger }, conversionResults);

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            `❓ 2 editor settings are not known by tslint-to-eslint-config to have ESLint equivalents. ❓`,
            `  Check ${logger.debugFileName} for details.`,
        );
        expectEqualWrites(
            logger.info.write,
            `2 editor settings are not known by tslint-to-eslint-config to have ESLint equivalents:`,
            '  * tslint-to-eslint-config does not know the ESLint equivalent for TSLint\'s "tslint-editor-setting-one".',
            '  * tslint-to-eslint-config does not know the ESLint equivalent for TSLint\'s "tslint-editor-setting-two".',
        );
    });
});
