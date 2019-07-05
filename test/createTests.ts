import * as cp from "child_process";
import * as fs from "fs";
import * as path from "path";
import { promisify } from "util";

import { createTestArgs } from "./createTestArgs";
import { PromiseValue } from "../src/utils";
import { assertFileContents } from "./expectFileContains";

const exec = promisify(cp.exec);
const readFile = promisify(fs.readFile);

export const createTests = (testName: string, accept: boolean) => {
    const cwd = path.join(__dirname, "tests", testName);
    const cwdPath = (fileName: string) => path.join(cwd, fileName);
    const readTestFile = async (fileName: string) => (await readFile(cwdPath(fileName))).toString();

    return () => {
        let result: PromiseValue<ReturnType<typeof exec>>;
        beforeAll(async () => {
            // Arrange
            const args = await createTestArgs(cwd);

            // Act
            result = await exec(`ts-node bin/tslint-to-eslint-config ${args}`);
        });

        test("configuration output", async () => {
            await assertFileContents(
                cwdPath("expected.json"),
                await readTestFile(".eslintrc.json"),
                accept,
            );
        });

        // test("info log output", () => {});

        test("stderr", async () => {
            await assertFileContents(cwdPath("stderr.txt"), result.stderr, accept);
        });

        test("stdout", async () => {
            await assertFileContents(cwdPath("stdout.txt"), result.stdout, accept);
        });
    };
};
