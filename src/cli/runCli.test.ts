import { EOL } from "os";

import { version } from "../../package.json";
import { createStubLogger, expectEqualWrites } from "../adapters/logger.stubs";
import { ResultStatus, TSLintToESLintResult } from "../types";
import { runCli } from "./runCli";

const createStubArgv = (argv: string[] = []) => ["node", "some/path/bin/file", ...argv];

const createStubDependencies = (
    convertConfig = async (): Promise<TSLintToESLintResult> => ({ status: ResultStatus.Succeeded }),
) => ({
    convertConfig,
    fileSystem: {
        fileExists: jest.fn(),
        readFile: jest.fn(),
        writeFile: jest.fn(),
    },
    logger: createStubLogger(),
});

describe("runCli", () => {
    it("prints the package version when --version is provided", async () => {
        // Arrange
        const rawArgv = createStubArgv(["--version"]);
        const dependencies = createStubDependencies();

        // Act
        await runCli(dependencies, rawArgv);

        // Assert
        expect(dependencies.logger.stdout.write).toHaveBeenLastCalledWith(`${version}${EOL}`);
    });

    it("logs an error to stderr when convertConfig throws an error", async () => {
        // Arrange
        const message = "Oh no";
        const dependencies = createStubDependencies(() => Promise.reject(new Error(message)));

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
        const dependencies = createStubDependencies(() =>
            Promise.resolve({
                complaint,
                status: ResultStatus.ConfigurationError,
            }),
        );

        // Act
        const status = await runCli(dependencies, createStubArgv());

        // Assert
        expect(status).toBe(ResultStatus.ConfigurationError);
        expectEqualWrites(
            dependencies.logger.stderr.write,
            `❌ Could not start tslint-to-eslint: ${complaint} ❌`,
        );
    });

    it("returns a failed status when convertConfig fails", async () => {
        // Arrange
        const error = new Error("too much unit testing coverage");
        const dependencies = createStubDependencies(() =>
            Promise.resolve({
                error,
                status: ResultStatus.Failed,
            }),
        );

        // Act
        const status = await runCli(dependencies, createStubArgv());

        // Assert
        expect(status).toBe(ResultStatus.Failed);
        expectEqualWrites(
            dependencies.logger.stderr.write,
            "❌ Error running tslint-to-eslint: ❌",
            `${error.stack}`,
        );
    });

    it("returns a successful status when convertConfig succeeds", async () => {
        // Arrange
        const dependencies = createStubDependencies();

        // Act
        const status = await runCli(dependencies, createStubArgv());

        // Assert
        expect(status).toBe(ResultStatus.Succeeded);
        expectEqualWrites(dependencies.logger.stdout.write, "✅ All is well! ✅");
    });
});
