import { createStubLogger } from "./stubs";
import { convertConfig } from "./convertConfig";
import { ResultStatus } from "./types";

const defaultRequest = {
    settings: {},
    logger: createStubLogger(),
    findTslintConfiguration: jest.fn().mockReturnValue(Promise.resolve(new Error())),
    fileExists: jest.fn().mockReturnValue(Promise.resolve(true)),
    createNewConfiguration: jest.fn().mockReturnValue(Promise.resolve()),
};

describe("convertConfig", () => {
    it("complains when the provided config file does not exist", async () => {
        // Arrange
        const request = {
            ...defaultRequest,
            fileExists: jest.fn().mockReturnValue(Promise.resolve(false)),
        };

        // Act
        const result = await convertConfig(request);

        // Assert
        expect(result).toEqual({
            complaint: `./tslint.json does not seem to exist.`,
            status: ResultStatus.ConfigurationError,
        });
    });

    it("searches for settings.config when settings.config is provided", async () => {
        // Arrange
        const request = {
            ...defaultRequest,
            settings: {
                config: "./stub/tslint.json",
            },
        };

        // Act
        await convertConfig(request);

        // Assert
        expect(request.findTslintConfiguration).toHaveBeenLastCalledWith(request.settings.config);
    });

    it("searches for ./tslint.json by default when no settings.config is provided", async () => {
        // Arrange
        const request = {
            ...defaultRequest,
            settings: {},
        };

        // Act
        await convertConfig(request);

        // Assert
        expect(request.findTslintConfiguration).toHaveBeenLastCalledWith("./tslint.json");
    });

    it("returns a failure result when findTslintConfiguration returns an error", async () => {
        // Arrange
        const error = new Error("oh no");
        const request = {
            ...defaultRequest,
            findTslintConfiguration: jest.fn().mockReturnValue(Promise.resolve(error)),
        };

        // Act
        const result = await convertConfig(request);

        // Assert
        expect(result).toEqual({
            error,
            status: ResultStatus.Failed,
        });
    });

    it("creates a new configuration when findTslintConfiguration returns rules", async () => {
        // Arrange
        const request = {
            ...defaultRequest,
            findTslintConfiguration: jest.fn().mockReturnValue({
                rules: {
                    "sample-rule": {
                        ruleArguments: ["one", "two"],
                        ruleName: "sample-rule",
                    },
                },
            }),
        };

        // Act
        const result = await convertConfig(request);

        // Assert
        expect(result).toEqual({
            status: ResultStatus.Succeeded,
        });
    });
});
