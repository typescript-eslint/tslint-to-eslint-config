import * as cp from "child_process";
import * as fs from "fs";
import * as path from "path";
import { promisify } from "util";

import { createTestArgs } from "./createTestArgs";
import { PromiseValue } from "../src/utils";
import { assertFileContents } from "./expectFileContains";

const exec = promisify(cp.exec);
const readFile = promisify(fs.readFile);

export const createTests = (cwd: string) => {
    const testName = path.basename(cwd);
    const accept = "acceptTestChanges" in globalThis;
    const cwdPath = (fileName: string) => path.join(cwd, fileName);
    const readTestFile = async (fileName: string) => (await readFile(cwdPath(fileName))).toString();

    describe(testName, () => {
        let result: PromiseValue<ReturnType<typeof exec>>;
        beforeAll(async () => {
            // Arrange
            const args = await createTestArgs(cwd);

            // Act
            try {
                result = await exec(`ts-node bin/tslint-to-eslint-config ${args}`);
            } catch (error) {
                result = error;
            }
        });

        test("configuration output", async () => {
            await assertFileContents(
                cwdPath("expected.json"),
                await readTestFile(".eslintrc.json"),
                accept,
            );
        });

        test("stderr", async () => {
            await assertFileContents(cwdPath("stderr.txt"), result.stderr, accept);
        });

        test("stdout", async () => {
            await assertFileContents(cwdPath("stdout.txt"), result.stdout, accept);
        });
    });
};
