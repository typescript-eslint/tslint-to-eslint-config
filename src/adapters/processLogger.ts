import * as fs from "fs";

const debugFileName = "./tslint-to-eslint-config.log";

let writeStream: fs.WriteStream | undefined;

export const processLogger = {
    debugFileName,
    get info() {
        return (writeStream ??= fs.createWriteStream(debugFileName));
    },
    stderr: process.stderr,
    stdout: process.stdout,
};
