import { EOL } from "os";

import { nativeImporter } from "../adapters/importer";
import { processLogger } from "../adapters/processLogger";
import { childProcessExec } from "../adapters/childProcessExec";
import { fsFileSystem } from "../adapters/fsFileSystem";
import { bind } from "../binding";
import { ConvertConfigDependencies, convertConfig } from "../conversion/convertConfig";
import { removeExtendsDuplicatedRules } from "../creation/simplification/removeExtendsDuplicatedRules";
import {
    RetrieveExtendsValuesDependencies,
    retrieveExtendsValues,
} from "../creation/simplification/retrieveExtendsValues";
import {
    simplifyPackageRules,
    SimplifyPackageRulesDependencies,
} from "../creation/simplification/simplifyPackageRules";
import {
    writeConversionResults,
    WriteConversionResultsDependencies,
} from "../creation/writeConversionResults";
import {
    findOriginalConfigurations,
    FindOriginalConfigurationsDependencies,
} from "../input/findOriginalConfigurations";
import { findPackagesConfiguration } from "../input/findPackagesConfiguration";
import { findESLintConfiguration } from "../input/findESLintConfiguration";
import { findTSLintConfiguration } from "../input/findTSLintConfiguration";
import { findTypeScriptConfiguration } from "../input/findTypeScriptConfiguration";
import {
    reportConversionResults,
    ReportConversionResultsDependencies,
} from "../reporting/reportConversionResults";
import { converters } from "../rules/converters";
import { convertRules } from "../rules/convertRules";
import { mergers } from "../rules/mergers";
import { runCli, RunCliDependencies } from "./runCli";

const convertRulesDependencies = {
    converters,
    mergers,
};

const findConfigurationDependencies = {
    exec: childProcessExec,
};

const findOriginalConfigurationsDependencies: FindOriginalConfigurationsDependencies = {
    findESLintConfiguration: bind(findESLintConfiguration, findConfigurationDependencies),
    findPackagesConfiguration: bind(findPackagesConfiguration, findConfigurationDependencies),
    findTypeScriptConfiguration: bind(findTypeScriptConfiguration, findConfigurationDependencies),
    findTSLintConfiguration: bind(findTSLintConfiguration, findConfigurationDependencies),
};

const reportConversionResultsDependencies: ReportConversionResultsDependencies = {
    logger: processLogger,
};

const retrieveExtendsValuesDependencies: RetrieveExtendsValuesDependencies = {
    importer: nativeImporter,
};

const simplifyPackageRulesDependencies: SimplifyPackageRulesDependencies = {
    removeExtendsDuplicatedRules,
    retrieveExtendsValues: bind(retrieveExtendsValues, retrieveExtendsValuesDependencies),
};

const writeConversionResultsDependencies: WriteConversionResultsDependencies = {
    fileSystem: fsFileSystem,
};

const convertConfigDependencies: ConvertConfigDependencies = {
    convertRules: bind(convertRules, convertRulesDependencies),
    findOriginalConfigurations: bind(
        findOriginalConfigurations,
        findOriginalConfigurationsDependencies,
    ),
    reportConversionResults: bind(reportConversionResults, reportConversionResultsDependencies),
    simplifyPackageRules: bind(simplifyPackageRules, simplifyPackageRulesDependencies),
    writeConversionResults: bind(writeConversionResults, writeConversionResultsDependencies),
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
