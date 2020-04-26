import { EOL } from "os";

import { childProcessExec } from "../adapters/childProcessExec";
import { fsFileSystem } from "../adapters/fsFileSystem";
import { globAsync } from "../adapters/globAsync";
import { nativeImporter } from "../adapters/nativeImporter";
import { processLogger } from "../adapters/processLogger";
import { bind } from "../binding";
import { convertComments, ConvertCommentsDependencies } from "../comments/convertComments";
import {
    ConvertFileCommentsDependencies,
    convertFileComments,
} from "../comments/convertFileComments";
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
import {
    convertEditorSettings,
    ConvertEditorSettingsDependencies,
} from "../editorSettings/convertEditorSettings";
import { editorSettingsConverters } from "../editorSettings/editorSettingsConverters";
import {
    findEditorConfiguration,
    FindEditorConfigurationDependencies,
} from "../input/findEditorConfiguration";
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
import {
    choosePackageManager,
    ChoosePackageManagerDependencies,
} from "../reporting/packages/choosePackageManager";
import {
    reportCommentResults,
    ReportCommentResultsDependencies,
} from "../reporting/reportCommentResults";
import {
    reportConversionResults,
    ReportConversionResultsDependencies,
} from "../reporting/reportConversionResults";
import { reportEditorSettingConversionResults } from "../reporting/reportEditorSettingConversionResults";
import { convertRules, ConvertRulesDependencies } from "../rules/convertRules";
import { mergers } from "../rules/mergers";
import { rulesConverters } from "../rules/rulesConverters";
import { runCli, RunCliDependencies } from "./runCli";

const convertFileCommentsDependencies: ConvertFileCommentsDependencies = {
    converters: rulesConverters,
    fileSystem: fsFileSystem,
};

const convertCommentsDependencies: ConvertCommentsDependencies = {
    convertFileComments: bind(convertFileComments, convertFileCommentsDependencies),
    globAsync,
};

const convertRulesDependencies: ConvertRulesDependencies = {
    converters: rulesConverters,
    mergers,
};

const convertEditorSettingsDependencies: ConvertEditorSettingsDependencies = {
    converters: editorSettingsConverters,
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

const findEditorConfigurationDependencies: FindEditorConfigurationDependencies = {
    fileSystem: fsFileSystem,
    importer: boundImporter,
};

const findOriginalConfigurationsDependencies: FindOriginalConfigurationsDependencies = {
    findESLintConfiguration: bind(findESLintConfiguration, findConfigurationDependencies),
    findPackagesConfiguration: bind(findPackagesConfiguration, findConfigurationDependencies),
    findTypeScriptConfiguration: bind(findTypeScriptConfiguration, findConfigurationDependencies),
    findTSLintConfiguration: bind(findTSLintConfiguration, findConfigurationDependencies),
    mergeLintConfigurations,
};

const reportCommentResultsDependencies: ReportCommentResultsDependencies = {
    logger: processLogger,
};

const choosePackageManagerDependencies: ChoosePackageManagerDependencies = {
    fileSystem: fsFileSystem,
};

const reportConversionResultsDependencies: ReportConversionResultsDependencies = {
    choosePackageManager: bind(choosePackageManager, choosePackageManagerDependencies),
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

const reportEditorSettingConversionResultsDependencies = {
    logger: processLogger,
};

const convertEditorConfigDependencies: ConvertEditorConfigDependencies = {
    findEditorConfiguration: bind(findEditorConfiguration, findEditorConfigurationDependencies),
    convertEditorSettings: bind(convertEditorSettings, convertEditorSettingsDependencies),
    reportConversionResults: bind(
        reportEditorSettingConversionResults,
        reportEditorSettingConversionResultsDependencies,
    ),
    writeConversionResults: bind(
        writeEditorConfigConversionResults,
        writeConversionResultsDependencies,
    ),
};

const convertConfigDependencies: ConvertConfigDependencies = {
    convertComments: bind(convertComments, convertCommentsDependencies),
    convertRules: bind(convertRules, convertRulesDependencies),
    findOriginalConfigurations: bind(
        findOriginalConfigurations,
        findOriginalConfigurationsDependencies,
    ),
    reportCommentResults: bind(reportCommentResults, reportCommentResultsDependencies),
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
