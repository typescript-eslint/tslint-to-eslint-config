import {
    findOriginalConfigurations,
    FindOriginalConfigurationsDependencies,
} from "./findOriginalConfigurations";
import { ResultStatus, TSLintToESLintSettings } from "../types";
import { TSLintConfiguration } from "./findTSLintConfiguration";
import { ESLintConfiguration } from "./findESLintConfiguration";

const createRawSettings = (overrides: Partial<TSLintToESLintSettings> = {}) => ({
    config: "./eslintrc.js",
    ...overrides,
});

const createDependencies = (overrides: Partial<FindOriginalConfigurationsDependencies> = {}) => ({
    findESLintConfiguration: async () => ({
        env: {},
        extends: [],
        rules: {},
    }),
    findPackagesConfiguration: async () => ({
        dependencies: {},
        devDependencies: {},
    }),
    findTSLintConfiguration: async () => ({
        rulesDirectory: [],
        rules: {},
    }),
    findTypeScriptConfiguration: async () => ({
        compilerOptions: {
            target: "es3",
        },
    }),
    mergeLintConfigurations: (_: ESLintConfiguration | Error, tslint: TSLintConfiguration) =>
        tslint,
    ...overrides,
});

describe("findOriginalConfigurations", () => {
    it("returns errors when the tslint finder returns an error", async () => {
        // Arrange
        const complaint = "Complaint from TSLint";
        const dependencies = createDependencies({
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

    it("returns only tslint results when the other finders return errors", async () => {
        // Arrange
        const dependencies = createDependencies({
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
                    rulesDirectory: [],
                    rules: {},
                },
            },
            status: ResultStatus.Succeeded,
        });
    });

    it("returns an error when an optional configuration returns an error and the user asked for it", async () => {
        // Arrange
        const eslint = new Error("one");
        const dependencies = createDependencies({
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
        const dependencies = createDependencies({
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
                    rulesDirectory: [],
                    rules: {},
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
        const dependencies = createDependencies();

        // Act
        const result = await findOriginalConfigurations(dependencies, createRawSettings());

        // Assert
        expect(result).toEqual({
            data: {
                eslint: {
                    env: {},
                    extends: [],
                    rules: {},
                },
                packages: {
                    dependencies: {},
                    devDependencies: {},
                },
                tslint: {
                    rulesDirectory: [],
                    rules: {},
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
