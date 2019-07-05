"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const util_1 = require("util");
const readFile = util_1.promisify(fs.readFile);
const writeFile = util_1.promisify(fs.writeFile);
const standardizeEndlines = text => text.replace(/\r/g, "");
exports.assertFileContents = async (filePath, actual, accept) => {
    await (accept ? acceptFileContents : expectFileContents)(filePath, actual.toString());
};
const acceptFileContents = async (filePath, actual) => {
    await writeFile(filePath, actual);
};
const expectFileContents = async (filePath, actual) => {
    const expected = (await readFile(filePath)).toString();
    expect(standardizeEndlines(actual)).toEqual(standardizeEndlines(expected));
};
//# sourceMappingURL=expectFileContains.js.map
