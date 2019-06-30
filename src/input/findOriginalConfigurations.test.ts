import { findOriginalConfigurations } from "./findOriginalConfigurations";
import { ResultStatus } from "../types";

const createRawSettings = () => ({
    eslintConfig: "",
    tslintConfig: "",
    typescriptConfig: "",
});

describe("findOriginalConfigurations", () => {
    it("returns an errors when the tslint finder returns an error", async () => {
        // Arrange
        const complaint = "Complaint from TSLint";
        const dependencies = {
            findESLintConfiguration: async () => ({}),
            findTSLintConfiguration: async () => new Error(complaint),
            findTypeScriptConfiguration: async () => ({}),
        };

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
        const complaints = ["Complaint from ESLint", "Complaint from TypeScript"];
        const dependencies = {
            findESLintConfiguration: async () => new Error(complaints[0]),
            findTSLintConfiguration: async () => ({
                ruleDirectories: [],
                rules: {},
            }),
            findTypeScriptConfiguration: async () => new Error(complaints[1]),
        };

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
        const dependencies = {
            findESLintConfiguration: async () => ({}),
            findTSLintConfiguration: async () => ({
                ruleDirectories: [],
                rules: {},
            }),
            findTypeScriptConfiguration: async () => ({}),
        };

        // Act
        const result = await findOriginalConfigurations(dependencies, createRawSettings());

        // Assert
        expect(result).toEqual({
            data: {
                eslint: {},
                tslint: {
                    ruleDirectories: [],
                    rules: {},
                },
                typescript: {},
            },
            status: ResultStatus.Succeeded,
        });
    });
});
