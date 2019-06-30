import * as fs from "fs";

const debugFileName = "./tslint-to-eslint-config.log";

export const processLogger = {
    debugFileName,
    info: fs.createWriteStream(debugFileName),
    stderr: process.stderr,
    stdout: process.stdout,
};
