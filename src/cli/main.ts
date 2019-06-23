import { exec } from "child_process";
import * as fs from "fs";
import { EOL } from "os";
import { promisify } from "util";

import { convertConfig } from "../convertConfig";
import { findTslintRules } from "../input/findTslintRules";
import { TSLintToESLintSettings } from "../types";
import { runCli } from "./runCli";

const debugFileName = "./tslint-to-eslint-config.log";

const logger = {
    debugFileName,
    info: fs.createWriteStream(debugFileName),
    stderr: process.stderr,
    stdout: process.stdout,
};

const ruleFinder = (config: string) => findTslintRules(config, promisify(exec));

const fileExists = (filePath: string) => Promise.resolve(fs.existsSync(filePath));

const runtime = {
    convertConfig: (settings: TSLintToESLintSettings) =>
        convertConfig(settings, logger, ruleFinder, fileExists),
    logger,
    ruleFinder,
};

export const main = async (argv: string[]) => {
    try {
        const resultStatus = await runCli(argv, runtime);
        logger.info.close();

        if (resultStatus !== 0) {
            process.exitCode = 1;
        }
    } catch (error) {
        logger.info.close();
        logger.stdout.write(`Error in tslint-to-eslint-config: ${error.stack}${EOL}`);
        process.exitCode = 1;
    }
};
