import { EOL } from "os";

import { childProcessExec } from "../adapters/childProcessExec";
import { fsFileSystem } from "../adapters/fsFileSystem";
import { nativeImporter } from "../adapters/nativeImporter";
import { processLogger } from "../adapters/processLogger";
import { bind } from "../binding";
import { convertConfig, ConvertConfigDependencies } from "../conversion/convertConfig";
import {
    convertEditorConfig,
    ConvertEditorConfigDependencies,
} from "../conversion/convertEditorConfig";
import { removeExtendsDuplicatedRules } from "../creation/simplification/removeExtendsDuplicatedRules";
import {
    retrieveExtendsValues,
    RetrieveExtendsValuesDependencies,
} from "../creation/simplification/retrieveExtendsValues";
import {
    simplifyPackageRules,
    SimplifyPackageRulesDependencies,
} from "../creation/simplification/simplifyPackageRules";
import {
    writeConversionResults,
    WriteConversionResultsDependencies,
} from "../creation/writeConversionResults";
import { writeConversionResults as writeEditorConfigConversionResults } from "../creation/writeEditorConfigConversionResults";
import { findEditorConfiguration } from "../input/findEditorConfiguration";
import { findESLintConfiguration } from "../input/findESLintConfiguration";
import {
    findOriginalConfigurations,
    FindOriginalConfigurationsDependencies,
} from "../input/findOriginalConfigurations";
import { findPackagesConfiguration } from "../input/findPackagesConfiguration";
import { findTSLintConfiguration } from "../input/findTSLintConfiguration";
import { findTypeScriptConfiguration } from "../input/findTypeScriptConfiguration";
import { importer, ImporterDependencies } from "../input/importer";
import { mergeLintConfigurations } from "../input/mergeLintConfigurations";
import { ReportConversionResultsDependencies } from "../reporting/dependencies";
import { reportConversionResults } from "../reporting/reportConversionResults";
import { reportSettingConversionResults } from "../reporting/reportSettingConversionResults";
import { convertRules } from "../rules/convertRules";
import { mergers } from "../rules/mergers";
import { rulesConverters } from "../rules/rulesConverters";
import { convertSettings } from "../settings/convertSettings";
import { settingsConverters } from "../settings/settingsConverters";
import { runCli, RunCliDependencies } from "./runCli";

const convertRulesDependencies = {
    rulesConverters,
    mergers,
};

const convertSettingsDependencies = {
    settingsConverters,
};

const nativeImporterDependencies: ImporterDependencies = {
    fileSystem: fsFileSystem,
    getCwd: () => process.cwd(),
    nativeImporter: nativeImporter,
};

const boundImporter = bind(importer, nativeImporterDependencies);

const findConfigurationDependencies = {
    exec: childProcessExec,
    importer: boundImporter,
};

const findEditorConfigurationDependencies = {
    fileSystem: fsFileSystem,
};

const findOriginalConfigurationsDependencies: FindOriginalConfigurationsDependencies = {
    findESLintConfiguration: bind(findESLintConfiguration, findConfigurationDependencies),
    findPackagesConfiguration: bind(findPackagesConfiguration, findConfigurationDependencies),
    findTypeScriptConfiguration: bind(findTypeScriptConfiguration, findConfigurationDependencies),
    findTSLintConfiguration: bind(findTSLintConfiguration, findConfigurationDependencies),
    mergeLintConfigurations,
};

const reportConversionResultsDependencies: ReportConversionResultsDependencies = {
    logger: processLogger,
};

const retrieveExtendsValuesDependencies: RetrieveExtendsValuesDependencies = {
    importer: boundImporter,
};

const simplifyPackageRulesDependencies: SimplifyPackageRulesDependencies = {
    removeExtendsDuplicatedRules,
    retrieveExtendsValues: bind(retrieveExtendsValues, retrieveExtendsValuesDependencies),
};

const writeConversionResultsDependencies: WriteConversionResultsDependencies = {
    fileSystem: fsFileSystem,
};

const convertEditorConfigDependencies: ConvertEditorConfigDependencies = {
    convertSettings: bind(convertSettings, convertSettingsDependencies),
    findEditorConfiguration: bind(findEditorConfiguration, findEditorConfigurationDependencies),
    reportConversionResults: bind(
        reportSettingConversionResults,
        reportConversionResultsDependencies,
    ),
    writeConversionResults: bind(
        writeEditorConfigConversionResults,
        writeConversionResultsDependencies,
    ),
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
    convertConfigs: [
        bind(convertConfig, convertConfigDependencies),
        bind(convertEditorConfig, convertEditorConfigDependencies),
    ],
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
