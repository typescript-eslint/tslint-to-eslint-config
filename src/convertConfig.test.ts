import { createStubLogger } from "./stubs";
import { convertConfig } from "./convertConfig";
import { ResultStatus } from "./types";

describe("convertConfig", () => {
    it("complains when the provided config file does not exist", async () => {
        // Arrange
        const settings = {
            config: "./stub/tslint.json",
        };
        const logger = createStubLogger();
        const ruleFinder = jest.fn().mockReturnValue(Promise.resolve(new Error()));
        const fileExists = jest.fn().mockReturnValue(Promise.resolve(false));

        // Act
        const result = await convertConfig(settings, logger, ruleFinder, fileExists);

        // Assert
        expect(result).toEqual({
            complaint: `${settings.config} does not seem to exist.`,
            status: ResultStatus.ConfigurationError,
        });
    });

    it("searches for settings.config when settings.config is provided", async () => {
        // Arrange
        const settings = {
            config: "./stub/tslint.json",
        };
        const logger = createStubLogger();
        const ruleFinder = jest.fn().mockReturnValue(Promise.resolve(new Error()));
        const fileExists = jest.fn().mockReturnValue(Promise.resolve(true));

        // Act
        await convertConfig(settings, logger, ruleFinder, fileExists);

        // Assert
        expect(ruleFinder).toHaveBeenLastCalledWith(settings.config);
    });

    it("searches for ./tslint.json by default when no settings.config is provided", async () => {
        // Arrange
        const settings = {};
        const logger = createStubLogger();
        const ruleFinder = jest.fn().mockReturnValue(Promise.resolve(new Error()));
        const fileExists = jest.fn().mockReturnValue(Promise.resolve(true));

        // Act
        await convertConfig(settings, logger, ruleFinder, fileExists);

        // Assert
        expect(ruleFinder).toHaveBeenLastCalledWith("./tslint.json");
    });

    it("returns a failure result when ruleFinder returns an error", async () => {
        // Arrange
        const settings = {};
        const logger = createStubLogger();
        const error = new Error("oh no");
        const ruleFinder = jest.fn().mockReturnValue(Promise.resolve(error));
        const fileExists = jest.fn().mockReturnValue(Promise.resolve(true));

        // Act
        const result = await convertConfig(settings, logger, ruleFinder, fileExists);

        // Assert
        expect(result).toEqual({
            error,
            status: ResultStatus.Failed,
        });
    });

    it("creates a new configuration when ruleFinder returns rules", async () => {
        // Arrange
        const settings = {};
        const logger = createStubLogger();
        const ruleFinder = jest.fn().mockReturnValue({
            rules: {
                "sample-rule": {
                    ruleArguments: ["one", "two"],
                    ruleName: "sample-rule",
                },
            },
        });
        const fileExists = jest.fn().mockReturnValue(Promise.resolve(true));

        // Act
        const result = await convertConfig(settings, logger, ruleFinder, fileExists);

        // Assert
        expect(result).toEqual({
            status: ResultStatus.Succeeded,
        });
    });
});
