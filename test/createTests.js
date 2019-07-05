"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cp = require("child_process");
const fs = require("fs");
const path = require("path");
const util_1 = require("util");
const createTestArgs_1 = require("./createTestArgs");
const expectFileContains_1 = require("./expectFileContains");
const exec = util_1.promisify(cp.exec);
const readFile = util_1.promisify(fs.readFile);
exports.createTests = (testName, accept) => {
    const cwd = path.join(__dirname, "tests", testName);
    const cwdPath = fileName => path.join(cwd, fileName);
    const readTestFile = async fileName => (await readFile(cwdPath(fileName))).toString();
    return () => {
        let result;
        beforeAll(async () => {
            // Arrange
            const args = await createTestArgs_1.createTestArgs(cwd);
            // Act
            result = await exec(`ts-node bin/tslint-to-eslint-config ${args}`);
        });
        test("configuration output", async () => {
            await expectFileContains_1.assertFileContents(
                cwdPath("expected.json"),
                await readTestFile(".eslintrc.json"),
                accept,
            );
        });
        // test("info log output", () => {});
        test("stderr", async () => {
            await expectFileContains_1.assertFileContents(
                cwdPath("stderr.txt"),
                result.stderr,
                accept,
            );
        });
        test("stdout", async () => {
            await expectFileContains_1.assertFileContents(
                cwdPath("stdout.txt"),
                result.stdout,
                accept,
            );
        });
    };
};
//# sourceMappingURL=createTests.js.map
