import { EOL } from "os";

import { childProcessExec } from "../adapters/childProcessExec";
import { fsFileSystem } from "../adapters/fsFileSystem";
import { globAsync } from "../adapters/globAsync";
import { nativeImporter } from "../adapters/nativeImporter";
import { processLogger } from "../adapters/processLogger";
import { bind } from "../binding";
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
    ReportCommentResultsDependencies,
    reportCommentResults,
} from "../converters/comments/reporting/reportCommentResults";
import {
    ConvertEditorConfigDependencies,
    convertEditorConfig,
} from "../converters/editorConfigs/convertEditorConfig";
import {
    ConvertEditorSettingsDependencies,
    convertEditorSettings,
} from "../converters/editorConfigs/convertEditorSettings";
import { editorSettingsConverters } from "../converters/editorConfigs/editorSettingsConverters";
import { reportEditorSettingConversionResults } from "../converters/editorConfigs/reporting/reportEditorSettingConversionResults";
import {
    ConvertLintConfigDependencies,
    convertLintConfig,
} from "../converters/lintConfigs/convertLintConfig";
import {
    ReportConversionResultsDependencies,
    reportConfigConversionResults,
} from "../converters/lintConfigs/reporting/reportConfigConversionResults";
import {
    WriteConversionResultsDependencies,
    writeConfigConversionResults,
} from "../converters/lintConfigs/writeConfigConversionResults";
import {
    ConvertCommentsDependencies,
    convertComments,
} from "../converters/comments/convertComments";
import {
    ConvertFileCommentsDependencies,
    convertFileComments,
} from "../converters/comments/convertFileComments";
import {
    ConvertRulesDependencies,
    convertRules,
} from "../converters/lintConfigs/rules/convertRules";
import { ruleConverters } from "../converters/lintConfigs/rules/ruleConverters";
import {
    RetrieveExtendsValuesDependencies,
    retrieveExtendsValues,
} from "../converters/lintConfigs/summarization/retrieveExtendsValues";
import {
    SummarizePackageRulesDependencies,
    summarizePackageRules,
} from "../converters/lintConfigs/summarization/summarizePackageRules";
import {
    ChoosePackageManagerDependencies,
    choosePackageManager,
} from "../converters/lintConfigs/reporting/packages/choosePackageManager";
import {
    LogMissingPackagesDependencies,
    logMissingPackages,
} from "../converters/lintConfigs/reporting/packages/logMissingPackages";
import { runCli, RunCliDependencies } from "./runCli";
import { ruleMergers } from "../converters/lintConfigs/rules/ruleMergers";
import { writeEditorConfigConversionResults } from "../converters/lintConfigs/writeEditorConfigConversionResults";
import { addPrettierExtensions } from "../converters/lintConfigs/summarization/prettier/addPrettierExtensions";
import { removeExtendsDuplicatedRules } from "../converters/lintConfigs/pruning/removeExtendsDuplicatedRules";
import {
    collectCommentFileNames,
    CollectCommentFileNamesDependencies,
} from "../comments/collectCommentFileNames";

const convertFileCommentsDependencies: ConvertFileCommentsDependencies = {
    converters: ruleConverters,
    fileSystem: fsFileSystem,
};

const reportCommentResultsDependencies: ReportCommentResultsDependencies = {
    logger: processLogger,
};

const convertRulesDependencies: ConvertRulesDependencies = {
    ruleConverters,
    ruleMergers,
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

const collectCommentFileNamesDependencies: CollectCommentFileNamesDependencies = {
    findTypeScriptConfiguration: bind(findTypeScriptConfiguration, findConfigurationDependencies),
};

const convertCommentsDependencies: ConvertCommentsDependencies = {
    collectCommentFileNames: bind(collectCommentFileNames, collectCommentFileNamesDependencies),
    convertFileComments: bind(convertFileComments, convertFileCommentsDependencies),
    globAsync,
    reportCommentResults: bind(reportCommentResults, reportCommentResultsDependencies),
};

const choosePackageManagerDependencies: ChoosePackageManagerDependencies = {
    fileSystem: fsFileSystem,
};

const logMissingPackagesDependencies: LogMissingPackagesDependencies = {
    choosePackageManager: bind(choosePackageManager, choosePackageManagerDependencies),
    logger: processLogger,
};

const reportConversionResultsDependencies: ReportConversionResultsDependencies = {
    logger: processLogger,
};

const retrieveExtendsValuesDependencies: RetrieveExtendsValuesDependencies = {
    importer: boundImporter,
};

const summarizePackageRulesDependencies: SummarizePackageRulesDependencies = {
    addPrettierExtensions,
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
    reportEditorSettingConversionResults: bind(
        reportEditorSettingConversionResults,
        reportEditorSettingConversionResultsDependencies,
    ),
    writeEditorConfigConversionResults: bind(
        writeEditorConfigConversionResults,
        writeConversionResultsDependencies,
    ),
};

const convertLintConfigDependencies: ConvertLintConfigDependencies = {
    convertRules: bind(convertRules, convertRulesDependencies),
    logMissingPackages: bind(logMissingPackages, logMissingPackagesDependencies),
    reportConfigConversionResults: bind(
        reportConfigConversionResults,
        reportConversionResultsDependencies,
    ),
    summarizePackageRules: bind(summarizePackageRules, summarizePackageRulesDependencies),
    writeConfigConversionResults: bind(
        writeConfigConversionResults,
        writeConversionResultsDependencies,
    ),
};

const runCliDependencies: RunCliDependencies = {
    converters: [
        bind(convertLintConfig, convertLintConfigDependencies),
        bind(convertEditorConfig, convertEditorConfigDependencies),
        bind(convertComments, convertCommentsDependencies),
    ],
    findOriginalConfigurations: bind(
        findOriginalConfigurations,
        findOriginalConfigurationsDependencies,
    ),
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
