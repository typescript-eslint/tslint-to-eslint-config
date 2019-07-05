import * as fs from "fs";
import { promisify } from "util";

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const standardizeEndlines = (text: string) => text.replace(/\r/g, "");

export const assertFileContents = async (
    filePath: string,
    actual: string | Buffer,
    accept: boolean,
) => {
    await (accept ? acceptFileContents : expectFileContents)(filePath, actual.toString());
};

const acceptFileContents = async (filePath: string, actual: string) => {
    await writeFile(filePath, actual);
};

const expectFileContents = async (filePath: string, actual: string) => {
    const expected = (await readFile(filePath)).toString();

    expect(standardizeEndlines(actual)).toEqual(standardizeEndlines(expected));
};
