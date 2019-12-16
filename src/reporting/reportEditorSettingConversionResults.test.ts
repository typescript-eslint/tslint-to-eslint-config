import { EOL } from "os";

import { createStubLogger, expectEqualWrites } from "../adapters/logger.stubs";
import { createEmptySettingConversionResults } from "../conversion/conversionResults.stubs";
import { EditorSetting } from "../editorSettings/types";
import { reportEditorSettingConversionResults } from "./reportEditorSettingConversionResults";

describe("reportEditorSettingConversionResults", () => {
    it("logs a successful conversion when there is one converted editor setting", () => {
        // Arrange
        const conversionResults = createEmptySettingConversionResults({
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
            `✨ 1 editor setting replaced with its ESLint equivalent. ✨${EOL}`,
        );
    });

    it("logs successful conversions when there are multiple converted settings", () => {
        // Arrange
        const conversionResults = createEmptySettingConversionResults({
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
            `✨ 2 editor settings replaced with their ESLint equivalents. ✨${EOL}`,
        );
    });

    it("logs a failed conversion when there is one failed conversion", () => {
        // Arrange
        const conversionResults = createEmptySettingConversionResults({
            failed: [{ getSummary: () => "It broke." }],
        });

        const logger = createStubLogger();

        // Act
        reportEditorSettingConversionResults({ logger }, conversionResults);

        // Assert
        expectEqualWrites(
            logger.stderr.write,
            "💀 1 error thrown. 💀",
            `Check ${logger.debugFileName} for details.`,
        );
    });

    it("logs failed conversions when there are multiple failed conversions", () => {
        // Arrange
        const conversionResults = createEmptySettingConversionResults({
            failed: [{ getSummary: () => "It broke." }, { getSummary: () => "It really broke." }],
        });

        const logger = createStubLogger();

        // Act
        reportEditorSettingConversionResults({ logger }, conversionResults);

        // Assert
        expectEqualWrites(
            logger.stderr.write,
            "💀 2 errors thrown. 💀",
            `Check ${logger.debugFileName} for details.`,
        );
    });

    it("logs a missing editor setting when there is a missing setting", () => {
        // Arrange
        const conversionResults = createEmptySettingConversionResults({
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
            "👀 1 editor setting does not yet have an ESLint equivalent (see generated log file). 👀",
        );
        expectEqualWrites(
            logger.info.write,
            "tslint-editor-setting-one does not yet have an ESLint equivalent.",
        );
    });

    it("logs missing settings when there are missing settings", () => {
        // Arrange
        const conversionResults = createEmptySettingConversionResults({
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
            "👀 2 editor settings do not yet have ESLint equivalents (see generated log file). 👀",
        );
        expectEqualWrites(
            logger.info.write,
            "tslint-editor-setting-one does not yet have an ESLint equivalent.",
            "tslint-editor-setting-two does not yet have an ESLint equivalent.",
        );
    });
});
