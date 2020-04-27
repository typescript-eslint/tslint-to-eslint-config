import {
    findOriginalConfigurations,
    FindOriginalConfigurationsDependencies,
    OriginalConfigurations,
} from "./findOriginalConfigurations";
import { ResultStatus, TSLintToESLintSettings } from "../types";
import { TSLintConfiguration } from "./findTSLintConfiguration";
import { ESLintConfiguration } from "./findESLintConfiguration";

const createRawSettings = (overrides: Partial<TSLintToESLintSettings> = {}) => ({
    config: "./eslintrc.js",
    ...overrides,
});

const createStubDependencies = (
    overrides: Partial<FindOriginalConfigurationsDependencies> = {},
) => ({
    findESLintConfiguration: async () => ({
        full: {
            env: {},
            extends: [],
            rules: {},
        },
        raw: {},
    }),
    findPackagesConfiguration: async () => ({
        dependencies: {},
        devDependencies: {},
    }),
    findTSLintConfiguration: async () => ({
        full: {
            rulesDirectory: [],
            rules: {},
        },
        raw: {},
    }),
    findTypeScriptConfiguration: async () => ({
        compilerOptions: {
            target: "es3",
        },
    }),
    mergeLintConfigurations: (
        _: OriginalConfigurations<ESLintConfiguration> | Error,
        tslint: OriginalConfigurations<TSLintConfiguration>,
    ) => tslint,
    ...overrides,
});

describe("findOriginalConfigurations", () => {
    it("returns the error when the tslint finder returns an error", async () => {
        // Arrange
        const complaint = "Complaint from TSLint";
        const dependencies = createStubDependencies({
            findTSLintConfiguration: async () => new Error(complaint),
        });

        // Act
        const result = await findOriginalConfigurations(dependencies, createRawSettings());

        // Assert
        expect(result).toEqual({
            complaints: [complaint],
            status: ResultStatus.ConfigurationError,
        });
    });

    it("returns a package install error when the tslint finder returns a package install error", async () => {
        // Arrange
        const complaint = "could not require 'tslint'";
        const dependencies = createStubDependencies({
            findTSLintConfiguration: async () => new Error(complaint),
        });

        // Act
        const result = await findOriginalConfigurations(dependencies, createRawSettings());

        // Assert
        expect(result).toEqual({
            complaints: ["Could not import the 'tslint' module. Do you need to install packages?"],
            status: ResultStatus.ConfigurationError,
        });
    });

    it("returns only tslint results when the other finders return errors", async () => {
        // Arrange
        const dependencies = createStubDependencies({
            findESLintConfiguration: async () => new Error("one"),
            findPackagesConfiguration: async () => new Error("two"),
            findTypeScriptConfiguration: async () => new Error("three"),
        });

        // Act
        const result = await findOriginalConfigurations(dependencies, createRawSettings());

        // Assert
        expect(result).toEqual({
            data: {
                tslint: {
                    full: {
                        rulesDirectory: [],
                        rules: {},
                    },
                    raw: {},
                },
            },
            status: ResultStatus.Succeeded,
        });
    });

    it.each(["Cannot find module", "could not require", "couldn't find the plugin"])(
        "returns an error when an optional configuration returns a '%s' error",
        async (message) => {
            // Arrange
            const eslint = new Error(`${message} "example"`);
            const dependencies = createStubDependencies({
                findESLintConfiguration: async () => eslint,
            });

            // Act
            const result = await findOriginalConfigurations(
                dependencies,
                createRawSettings({
                    eslint: "./eslintrc.js",
                }),
            );

            // Assert
            expect(result).toEqual({
                complaints: [
                    `Could not import the "example" module. Do you need to install packages?`,
                ],
                status: ResultStatus.ConfigurationError,
            });
        },
    );

    it("returns an error when an optional configuration returns an error and the user asked for it", async () => {
        // Arrange
        const eslint = new Error("one");
        const dependencies = createStubDependencies({
            findESLintConfiguration: async () => eslint,
        });

        // Act
        const result = await findOriginalConfigurations(
            dependencies,
            createRawSettings({
                eslint: "./eslintrc.js",
            }),
        );

        // Assert
        expect(result).toEqual({
            complaints: [eslint.message],
            status: ResultStatus.ConfigurationError,
        });
    });

    it("returns successful results when an optional configuration returns an error and the user didn't ask for it", async () => {
        // Arrange
        const dependencies = createStubDependencies({
            findESLintConfiguration: async () => new Error("one"),
        });

        // Act
        const result = await findOriginalConfigurations(dependencies, createRawSettings());

        // Assert
        expect(result).toEqual({
            data: {
                packages: {
                    dependencies: {},
                    devDependencies: {},
                },
                tslint: {
                    full: {
                        rulesDirectory: [],
                        rules: {},
                    },
                    raw: {},
                },
                typescript: {
                    compilerOptions: {
                        target: "es3",
                    },
                },
            },
            status: ResultStatus.Succeeded,
        });
    });

    it("returns successful results when all finders succeed", async () => {
        // Arrange
        const dependencies = createStubDependencies();

        // Act
        const result = await findOriginalConfigurations(dependencies, createRawSettings());

        // Assert
        expect(result).toEqual({
            data: {
                eslint: {
                    full: {
                        env: {},
                        extends: [],
                        rules: {},
                    },
                    raw: {},
                },
                packages: {
                    dependencies: {},
                    devDependencies: {},
                },
                tslint: {
                    full: {
                        rulesDirectory: [],
                        rules: {},
                    },
                    raw: {},
                },
                typescript: {
                    compilerOptions: {
                        target: "es3",
                    },
                },
            },
            status: ResultStatus.Succeeded,
        });
    });
});
