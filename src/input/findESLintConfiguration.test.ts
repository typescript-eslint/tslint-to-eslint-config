import { describe, expect, it } from "@jest/globals";

import { createStubExec, createStubThrowingExec } from "../adapters/exec.stubs.js";
import { TSLintToESLintSettings } from "../types.js";
import {
    findESLintConfiguration,
    FindESLintConfigurationDependencies,
} from "./findESLintConfiguration.js";

const createStubDependencies = (overrides: Partial<FindESLintConfigurationDependencies> = {}) => ({
    exec: createStubExec({ stdout: "{}" }),
    importer: async () => ({}),
    ...overrides,
});

const createStubRawSettings = (overrides: Partial<TSLintToESLintSettings> = {}) => ({
    config: "./eslintrc.js",
    eslint: undefined,
    ...overrides,
});

describe("findESLintConfiguration", () => {
    it("returns an error when exec returns one", async () => {
        // Arrange
        const message = "error";
        const dependencies = createStubDependencies({
            exec: createStubThrowingExec({ stderr: message }),
        });

        // Act
        const result = await findESLintConfiguration(dependencies, createStubRawSettings());

        // Assert
        expect(result).toEqual(
            expect.objectContaining({
                message,
            }),
        );
    });

    it("returns an error when importer returns one", async () => {
        // Arrange
        const message = "error";
        const dependencies = createStubDependencies({
            importer: async () => {
                throw new Error(message);
            },
        });

        // Act
        const result = await findESLintConfiguration(dependencies, createStubRawSettings());

        // Assert
        expect(result).toEqual(
            expect.objectContaining({
                message,
            }),
        );
    });

    it("defaults the configuration file when one isn't provided", async () => {
        // Arrange
        const dependencies = createStubDependencies({ exec: createStubExec() });

        // Act
        await findESLintConfiguration(dependencies, createStubRawSettings());

        // Assert
        expect(dependencies.exec).toHaveBeenLastCalledWith(`eslint --print-config "./eslintrc.js"`);
    });

    it("includes a configuration file in the ESLint command when one is provided", async () => {
        // Arrange
        const dependencies = createStubDependencies({ exec: createStubExec() });
        const config = createStubRawSettings({
            eslint: "./custom/eslintrc.js",
        });

        // Act
        await findESLintConfiguration(dependencies, config);

        // Assert
        expect(dependencies.exec).toHaveBeenLastCalledWith(
            `eslint --print-config "./custom/eslintrc.js"`,
        );
    });

    it("applies ESLint defaults when none are provided", async () => {
        // Arrange
        const dependencies = createStubDependencies({ exec: createStubExec({ stdout: "{}" }) });
        const config = createStubRawSettings({
            eslint: "./custom/eslintrc.js",
        });

        // Act
        const result = await findESLintConfiguration(dependencies, config);

        // Assert
        expect(result).toEqual({
            full: {
                env: {},
                extends: [],
                rules: {},
            },
            raw: {
                extends: [],
            },
        });
    });

    it("doesn't apply raw extends on top of reported when they don't exist", async () => {
        // Arrange
        const reportedExtends = ["reported"];
        const dependencies = createStubDependencies({
            exec: createStubExec({
                stdout: JSON.stringify({
                    extends: reportedExtends,
                }),
            }),
            importer: async () => ({}),
        });
        const config = createStubRawSettings({
            eslint: "./custom/eslintrc.js",
        });

        // Act
        const result = await findESLintConfiguration(dependencies, config);

        // Assert
        expect(result).toEqual({
            full: {
                env: {},
                extends: ["reported"],
                rules: {},
            },
            raw: {
                extends: [],
            },
        });
    });

    it("applies raw extends on top of reported when they exist", async () => {
        // Arrange
        const raw = {
            extends: ["raw", "duplicated"],
        };
        const reportedExtends = ["reported", "duplicated"];
        const dependencies = createStubDependencies({
            exec: createStubExec({
                stdout: JSON.stringify({
                    extends: reportedExtends,
                }),
            }),
            importer: async () => raw,
        });
        const config = createStubRawSettings({
            eslint: "./custom/eslintrc.js",
        });

        // Act
        const result = await findESLintConfiguration(dependencies, config);

        // Assert
        expect(result).toEqual({
            full: {
                env: {},
                extends: ["raw", "duplicated", "reported"],
                rules: {},
            },
            raw,
        });
    });
});
