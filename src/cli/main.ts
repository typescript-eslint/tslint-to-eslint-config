import { EOL } from "os";

import { bind } from "../binding";
import {
    createNewConfiguration,
    CreateNewConfigurationDependencies,
} from "../creation/createNewConfiguration";
import { fsFileSystem } from "../adapters/fsFileSystem";
import {
    findTslintConfiguration,
    FindTSlintConfigurationDependencies,
} from "../input/findTslintConfiguration";
import { runCli, RunCliDependencies } from "./runCli";
import { processLogger } from "../adapters/processLogger";
import { ConvertConfigDependencies, convertConfig } from "../conversion/convertConfig";
import {
    reportConversionResults,
    ReportConversionResultsDependencies,
} from "../reporting/reportConversionResults";
import { childProcessExec } from "../adapters/childProcessExec";

const createNewConfigurationDependencies: CreateNewConfigurationDependencies = {
    fileSystem: fsFileSystem,
};

const findTslintConfigurationDependencies: FindTSlintConfigurationDependencies = {
    exec: childProcessExec,
};

const reportConversionResultsDependencies: ReportConversionResultsDependencies = {
    logger: processLogger,
};

const convertConfigDependencies: ConvertConfigDependencies = {
    createNewConfiguration: bind(createNewConfiguration, createNewConfigurationDependencies),
    fileSystem: fsFileSystem,
    findTslintConfiguration: bind(findTslintConfiguration, findTslintConfigurationDependencies),
    logger: processLogger,
    reportConversionResults: bind(reportConversionResults, reportConversionResultsDependencies),
};

const runCliDependencies: RunCliDependencies = {
    convertConfig: bind(convertConfig, convertConfigDependencies),
    logger: processLogger,
};

export const main = async (argv: string[]) => {
    try {
        const resultStatus = await runCli(runCliDependencies, argv);
        processLogger.info.close();

        if (resultStatus !== 0) {
            process.exitCode = 1;
        }
    } catch (error) {
        processLogger.info.close();
        processLogger.stdout.write(`Error in tslint-to-eslint-config: ${error.stack}${EOL}`);
        process.exitCode = 1;
    }
};
