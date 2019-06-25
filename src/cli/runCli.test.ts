import { createStubLogger, stubOutChalk, expectEqualWrites } from "../stubs";
stubOutChalk();

import { EOL } from "os";

import { version } from "../../package.json";
import { ResultStatus, TSLintToESLintResult } from "../types";
import { runCli } from "./runCli";

const createStubArgv = (argv: string[] = []) => ["node", "some/path/bin/file", ...argv];

const createStubRuntime = (
    convertConfig = async (): Promise<TSLintToESLintResult> => ({ status: ResultStatus.Succeeded }),
) => ({
    convertConfig,
    logger: createStubLogger(),
});

describe("runCli", () => {
    it("prints the package version when --version is provided", async () => {
        // Arrange
        const rawArgv = createStubArgv(["--version"]);
        const runtime = createStubRuntime();

        // Act
        await runCli(rawArgv, runtime);

        // Assert
        expect(runtime.logger.stdout.write).toHaveBeenLastCalledWith(`${version}${EOL}`);
    });

    it("logs an error to stderr when convertConfig throws an error", async () => {
        // Arrange
        const message = "Oh no";
        const runtime = createStubRuntime(() => Promise.reject(new Error(message)));

        // Act
        const status = await runCli(createStubArgv(), runtime);

        // Assert
        expect(runtime.logger.stderr.write).toHaveBeenLastCalledWith(
            jasmine.stringMatching(message),
        );
        expect(status).toBe(ResultStatus.Failed);
    });

    it("returns a configuration complaint when convertConfig fails", async () => {
        // Arrange
        const complaint = "too much unit testing coverage";
        const runtime = createStubRuntime(() =>
            Promise.resolve({
                complaint,
                status: ResultStatus.ConfigurationError,
            }),
        );

        // Act
        const status = await runCli(createStubArgv(), runtime);

        // Assert
        expect(status).toBe(ResultStatus.ConfigurationError);
        expectEqualWrites(
            runtime.logger.stderr.write,
            `❌ Could not start tslint-to-eslint: ${complaint} ❌`,
        );
    });

    it("returns a failed status when convertConfig fails", async () => {
        // Arrange
        const error = new Error("too much unit testing coverage");
        const runtime = createStubRuntime(() =>
            Promise.resolve({
                error,
                status: ResultStatus.Failed,
            }),
        );

        // Act
        const status = await runCli(createStubArgv(), runtime);

        // Assert
        expect(status).toBe(ResultStatus.Failed);
        expectEqualWrites(
            runtime.logger.stderr.write,
            "❌ Error running tslint-to-eslint: ❌",
            `${error.stack}`,
        );
    });

    it("returns a successful status when convertConfig succeeds", async () => {
        // Arrange
        const runtime = createStubRuntime();

        // Act
        const status = await runCli(createStubArgv(), runtime);

        // Assert
        expect(status).toBe(ResultStatus.Succeeded);
        expectEqualWrites(runtime.logger.stdout.write, "✅ All is well! ✅");
    });
});
