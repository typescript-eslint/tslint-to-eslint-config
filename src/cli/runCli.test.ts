import { EOL } from "os";

import { version } from "../../package.json";
import { createStubLogger, expectEqualWrites } from "../adapters/logger.stubs";
import { ResultStatus, TSLintToESLintResult } from "../types";
import { runCli, RunCliDependencies } from "./runCli";

const createStubArgv = (argv: string[] = []) => ["node", "some/path/bin/file", ...argv];

const createStubRunCliDependencies = (
    overrides: Partial<Pick<RunCliDependencies, "convertConfigs">> = {},
) => ({
    convertConfigs: [
        async (): Promise<TSLintToESLintResult> => ({ status: ResultStatus.Succeeded }),
    ],
    logger: createStubLogger(),
    ...overrides,
});

describe("runCli", () => {
    it("prints the package version when --version is provided", async () => {
        // Arrange
        const rawArgv = createStubArgv(["--version"]);
        const dependencies = createStubRunCliDependencies();

        // Act
        await runCli(dependencies, rawArgv);

        // Assert
        expect(dependencies.logger.stdout.write).toHaveBeenLastCalledWith(`${version}${EOL}`);
    });

    it("logs an error to stderr when convertConfig throws an error", async () => {
        // Arrange
        const message = "Oh no";
        const dependencies = createStubRunCliDependencies({
            convertConfigs: [() => Promise.reject(new Error(message))],
        });

        // Act
        const status = await runCli(dependencies, createStubArgv());

        // Assert
        expect(dependencies.logger.stderr.write).toHaveBeenLastCalledWith(
            jasmine.stringMatching(message),
        );
        expect(status).toBe(ResultStatus.Failed);
    });

    it("returns a configuration complaint when convertConfig fails", async () => {
        // Arrange
        const complaint = "too much unit testing coverage";
        const dependencies = createStubRunCliDependencies({
            convertConfigs: [
                () =>
                    Promise.resolve({
                        complaints: [complaint],
                        status: ResultStatus.ConfigurationError,
                    }),
            ],
        });

        // Act
        const status = await runCli(dependencies, createStubArgv());

        // Assert
        expect(status).toBe(ResultStatus.ConfigurationError);
        expectEqualWrites(
            dependencies.logger.stderr.write,
            "❌ Could not start tslint-to-eslint: ❌",
            `  ${complaint}`,
        );
    });

    it("returns a singular failed status when convertConfig fails with one error", async () => {
        // Arrange
        const error = new Error("too much unit testing coverage");
        const dependencies = createStubRunCliDependencies({
            convertConfigs: [
                () =>
                    Promise.resolve({
                        errors: [error],
                        status: ResultStatus.Failed,
                    }),
            ],
        });

        // Act
        const status = await runCli(dependencies, createStubArgv());

        // Assert
        expect(status).toBe(ResultStatus.Failed);
        expectEqualWrites(
            dependencies.logger.stderr.write,
            "❌ 1 error running tslint-to-eslint: ❌",
            `  ${error.stack}`,
        );
    });

    it("returns a plural failed status when convertConfig fails with two errors", async () => {
        // Arrange
        const errors = [
            new Error("too much unit testing coverage"),
            new Error("too much branch coverage"),
        ];
        const dependencies = createStubRunCliDependencies({
            convertConfigs: [
                () =>
                    Promise.resolve({
                        errors,
                        status: ResultStatus.Failed,
                    }),
            ],
        });

        // Act
        const status = await runCli(dependencies, createStubArgv());

        // Assert
        expect(status).toBe(ResultStatus.Failed);
        expectEqualWrites(
            dependencies.logger.stderr.write,
            "❌ 2 errors running tslint-to-eslint: ❌",
            `  ${errors[0].stack}`,
            `  ${errors[1].stack}`,
        );
    });

    it("returns a successful status when convertConfig succeeds", async () => {
        // Arrange
        const dependencies = createStubRunCliDependencies();

        // Act
        const status = await runCli(dependencies, createStubArgv());

        // Assert
        expect(status).toBe(ResultStatus.Succeeded);
        expectEqualWrites(dependencies.logger.stdout.write, "✅ All is well! ✅");
    });

    it("default output should be .eslintrc.js", async () => {
        let defaultConfig;
        const dependencies = createStubRunCliDependencies({
            convertConfigs: [
                (parsedArgs) => {
                    defaultConfig = parsedArgs.config;
                    return Promise.resolve({
                        status: ResultStatus.Succeeded,
                    });
                },
            ],
        });

        const status = await runCli(dependencies, createStubArgv());

        expect(status).toBe(ResultStatus.Succeeded);
        expect(defaultConfig).toEqual("./.eslintrc.js");
    });
});
