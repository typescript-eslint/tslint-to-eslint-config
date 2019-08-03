import * as cp from "child_process";
import * as fs from "fs";
import * as path from "path";
import { promisify } from "util";

import { createTestArgs } from "./createTestArgs";
import { assertFileContents } from "./expectFileContains";

const exec = promisify(cp.exec);
const readFile = promisify(fs.readFile);

export type TestSettings = {
    /**
     * Expected location of the output ESLint configuration file.
     */
    eslint?: string;

    /**
     * Any extra commands to pass to the CLI.
     */
    extraArgs?: string[];
};

jest.setTimeout(10000);

const binFile = path.join(__dirname, "../bin/tslint-to-eslint-config");

export const createTests = (
    cwd: string,
    { eslint = "./.eslintrc.json", extraArgs = [] }: TestSettings = {},
) => {
    const testName = path.basename(cwd);
    const accept = "acceptTestChanges" in globalThis;
    const cwdPath = (fileName: string) => path.join(cwd, fileName);
    const readTestFile = async (fileName: string) => (await readFile(cwdPath(fileName))).toString();

    const act = async (testArgs: string[]) => {
        try {
            return await exec(`ts-node ${binFile} ${testArgs.join(" ")}`, {
                cwd,
            });
        } catch (error) {
            return error;
        }
    };

    describe(testName, () => {
        test("configuration output", async () => {
            // Arrange
            const testArgs = await createTestArgs(cwd, extraArgs);

            // Act
            await act(testArgs);

            await assertFileContents(cwdPath("expected.json"), await readTestFile(eslint), accept);
        });

        test("stderr", async () => {
            // Arrange
            const testArgs = await createTestArgs(cwd, extraArgs);

            // Act
            const result = await act(testArgs);

            await assertFileContents(cwdPath("stderr.txt"), result.stderr, accept);
        });

        test("stdout", async () => {
            // Arrange
            const testArgs = await createTestArgs(cwd, extraArgs);

            // Act
            const result = await act(testArgs);

            await assertFileContents(cwdPath("stdout.txt"), result.stdout, accept);
        });
    });
};
