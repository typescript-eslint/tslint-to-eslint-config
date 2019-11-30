import { EOL } from "os";

import { createStubLogger, expectEqualWrites } from "../adapters/logger.stubs";
import { createEmptySettingConversionResults } from "../conversion/conversionResults.stubs";
import { EditorSetting } from "../settings/types";
import { reportSettingConversionResults } from "./reportSettingConversionResults";

describe("reportSettingConversionResults", () => {
    it("logs a successful conversion when there is one converted setting", () => {
        // Arrange
        const conversionResults = createEmptySettingConversionResults({
            converted: new Map<string, EditorSetting>([
                [
                    "tslint-setting-one",
                    {
                        settingName: "tslint-setting-one",
                        value: 42,
                    },
                ],
            ]),
        });

        const logger = createStubLogger();

        // Act
        reportSettingConversionResults({ logger }, conversionResults);

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            `✨ 1 setting replaced with its ESLint equivalent. ✨${EOL}`,
        );
    });

    it("logs successful conversions when there are multiple converted settings", () => {
        // Arrange
        const conversionResults = createEmptySettingConversionResults({
            converted: new Map<string, EditorSetting>([
                [
                    "tslint-setting-one",
                    {
                        settingName: "tslint-setting-one",
                        value: 42,
                    },
                ],
                [
                    "tslint-setting-two",
                    {
                        settingName: "tslint-setting-two",
                        value: 4711,
                    },
                ],
            ]),
        });

        const logger = createStubLogger();

        // Act
        reportSettingConversionResults({ logger }, conversionResults);

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            `✨ 2 settings replaced with their ESLint equivalents. ✨${EOL}`,
        );
    });

    it("logs a failed conversion when there is one failed conversion", () => {
        // Arrange
        const conversionResults = createEmptySettingConversionResults({
            failed: [{ getSummary: () => "It broke." }],
        });

        const logger = createStubLogger();

        // Act
        reportSettingConversionResults({ logger }, conversionResults);

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
        reportSettingConversionResults({ logger }, conversionResults);

        // Assert
        expectEqualWrites(
            logger.stderr.write,
            "💀 2 errors thrown. 💀",
            `Check ${logger.debugFileName} for details.`,
        );
    });

    it("logs a missing setting when there is a missing setting", () => {
        // Arrange
        const conversionResults = createEmptySettingConversionResults({
            missing: [
                {
                    settingName: "tslint-setting-one",
                    value: "nothing-to-convert-to",
                },
            ],
        });

        const logger = createStubLogger();

        // Act
        reportSettingConversionResults({ logger }, conversionResults);

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            "👀 1 setting does not yet have an ESLint equivalent (see generated log file). 👀",
        );
        expectEqualWrites(
            logger.info.write,
            "tslint-setting-one does not yet have an ESLint equivalent.",
        );
    });

    it("logs missing settings when there are missing settings", () => {
        // Arrange
        const conversionResults = createEmptySettingConversionResults({
            missing: [
                {
                    settingName: "tslint-setting-one",
                    value: "nothing-to-convert-to",
                },
                {
                    settingName: "tslint-setting-two",
                    value: 123,
                },
            ],
        });

        const logger = createStubLogger();

        // Act
        reportSettingConversionResults({ logger }, conversionResults);

        // Assert
        expectEqualWrites(
            logger.stdout.write,
            "👀 2 settings do not yet have ESLint equivalents (see generated log file). 👀",
        );
        expectEqualWrites(
            logger.info.write,
            "tslint-setting-one does not yet have an ESLint equivalent.",
            "tslint-setting-two does not yet have an ESLint equivalent.",
        );
    });
});
