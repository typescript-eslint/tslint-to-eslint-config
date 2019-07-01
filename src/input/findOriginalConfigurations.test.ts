import {
    findOriginalConfigurations,
    FindOriginalConfigurationsDependencies,
} from "./findOriginalConfigurations";
import { ResultStatus } from "../types";

const createRawSettings = () => ({
    eslint: "",
    tslint: "",
    typescript: "",
});

const createDependencies = (overrides: Partial<FindOriginalConfigurationsDependencies> = {}) => ({
    findESLintConfiguration: async () => ({
        env: {},
        rules: {},
    }),
    findPackagesConfiguration: async () => ({
        dependencies: {},
        devDependencies: {},
    }),
    findTSLintConfiguration: async () => ({
        ruleDirectories: [],
        rules: {},
    }),
    findTypeScriptConfiguration: async () => ({
        compilerOptions: {
            target: "es3",
        },
    }),
    ...overrides,
});

describe("findOriginalConfigurations", () => {
    it("returns an errors when the tslint finder returns an error", async () => {
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
                    ruleDirectories: [],
                    rules: {},
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
                    rules: {},
                },
                packages: {
                    dependencies: {},
                    devDependencies: {},
                },
                tslint: {
                    ruleDirectories: [],
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
