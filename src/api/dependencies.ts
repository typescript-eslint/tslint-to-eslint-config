import { childProcessExec } from "../adapters/childProcessExec.js";
import { fsFileSystem } from "../adapters/fsFileSystem.js";
import { globAsync } from "../adapters/globAsync.js";
import { nativeImporter } from "../adapters/nativeImporter.js";
import { processLogger } from "../adapters/processLogger.js";
import { bind } from "../binding.js";
import { RunCliDependencies } from "../cli/runCli.js";
import {
    collectCommentFileNames,
    CollectCommentFileNamesDependencies,
} from "../comments/collectCommentFileNames.js";
import {
    convertComments,
    ConvertCommentsDependencies,
} from "../converters/comments/convertComments.js";
import {
    convertFileComments,
    ConvertFileCommentsDependencies,
} from "../converters/comments/convertFileComments.js";
import {
    extractGlobPaths,
    ExtractGlobPathsDependencies,
} from "../converters/comments/extractGlobPaths.js";
import {
    reportCommentResults,
    ReportCommentResultsDependencies,
} from "../converters/comments/reporting/reportCommentResults.js";
import {
    convertEditorConfig,
    ConvertEditorConfigDependencies,
} from "../converters/editorConfigs/convertEditorConfig.js";
import {
    convertEditorConfigs,
    ConvertEditorConfigsDependencies,
} from "../converters/editorConfigs/convertEditorConfigs.js";
import { convertAtomConfig } from "../converters/editorConfigs/converters/convertAtomConfig.js";
import { convertVSCodeConfig } from "../converters/editorConfigs/converters/convertVSCodeConfig.js";
import { reportEditorConfigConversionResults } from "../converters/editorConfigs/reporting/reportEditorConfigConversionResults.js";
import { EditorConfigDescriptor } from "../converters/editorConfigs/types.js";
import {
    convertLintConfig,
    ConvertLintConfigDependencies,
} from "../converters/lintConfigs/convertLintConfig.js";
import {
    createESLintConfiguration,
    CreateESLintConfigurationDependencies,
} from "../converters/lintConfigs/createESLintConfiguration.js";
import { removeExtendsDuplicatedRules } from "../converters/lintConfigs/pruning/removeExtendsDuplicatedRules.js";
import {
    choosePackageManager,
    ChoosePackageManagerDependencies,
} from "../converters/lintConfigs/reporting/packages/choosePackageManager.js";
import {
    logMissingPackages,
    LogMissingPackagesDependencies,
} from "../converters/lintConfigs/reporting/packages/logMissingPackages.js";
import {
    reportConfigConversionResults,
    ReportConversionResultsDependencies,
} from "../converters/lintConfigs/reporting/reportConfigConversionResults.js";
import {
    convertRules,
    ConvertRulesDependencies,
} from "../converters/lintConfigs/rules/convertRules.js";
import { ruleConverters } from "../converters/lintConfigs/rules/ruleConverters.js";
import { ruleMergers } from "../converters/lintConfigs/rules/ruleMergers.js";
import { checkPrettierExtension } from "../converters/lintConfigs/summarization/prettier/checkPrettierExtension.js";
import {
    retrieveExtendsValues,
    RetrieveExtendsValuesDependencies,
} from "../converters/lintConfigs/summarization/retrieveExtendsValues.js";
import {
    summarizePackageRules,
    SummarizePackageRulesDependencies,
} from "../converters/lintConfigs/summarization/summarizePackageRules.js";
import { findESLintConfiguration } from "../input/findESLintConfiguration.js";
import {
    findOriginalConfigurations,
    FindOriginalConfigurationsDependencies,
} from "../input/findOriginalConfigurations.js";
import { findPackagesConfiguration } from "../input/findPackagesConfiguration.js";
import { findTSLintConfiguration } from "../input/findTSLintConfiguration.js";
import { findTypeScriptConfiguration } from "../input/findTypeScriptConfiguration.js";
import { importer, ImporterDependencies } from "../input/importer.js";
import { mergeLintConfigurations } from "../input/mergeLintConfigurations.js";
export const convertFileCommentsDependencies: ConvertFileCommentsDependencies = {
    converters: ruleConverters,
    fileSystem: fsFileSystem,
};

export const reportCommentResultsDependencies: ReportCommentResultsDependencies = {
    logger: processLogger,
};

export const convertRulesDependencies: ConvertRulesDependencies = {
    ruleConverters,
    ruleMergers,
};

export const nativeImporterDependencies: ImporterDependencies = {
    fileSystem: fsFileSystem,
    getCwd: () => process.cwd(),
    nativeImporter: nativeImporter,
};

export const boundImporter = bind(importer, nativeImporterDependencies);

export const findConfigurationDependencies = {
    exec: childProcessExec,
    importer: boundImporter,
    platform: process.platform,
};

export const findOriginalConfigurationsDependencies: FindOriginalConfigurationsDependencies = {
    findESLintConfiguration: bind(findESLintConfiguration, findConfigurationDependencies),
    findPackagesConfiguration: bind(findPackagesConfiguration, findConfigurationDependencies),
    findTypeScriptConfiguration: bind(findTypeScriptConfiguration, findConfigurationDependencies),
    findTSLintConfiguration: bind(findTSLintConfiguration, findConfigurationDependencies),
    mergeLintConfigurations,
};

export const collectCommentFileNamesDependencies: CollectCommentFileNamesDependencies = {
    findTypeScriptConfiguration: bind(findTypeScriptConfiguration, findConfigurationDependencies),
};

export const extractGlobPathsDependencies: ExtractGlobPathsDependencies = {
    globAsync,
};

export const convertCommentsDependencies: ConvertCommentsDependencies = {
    collectCommentFileNames: bind(collectCommentFileNames, collectCommentFileNamesDependencies),
    convertFileComments: bind(convertFileComments, convertFileCommentsDependencies),
    extractGlobPaths: bind(extractGlobPaths, extractGlobPathsDependencies),
    reportCommentResults: bind(reportCommentResults, reportCommentResultsDependencies),
};

export const retrieveExtendsValuesDependencies: RetrieveExtendsValuesDependencies = {
    importer: boundImporter,
};

export const summarizePackageRulesDependencies: SummarizePackageRulesDependencies = {
    checkPrettierExtension,
    removeExtendsDuplicatedRules,
    retrieveExtendsValues: bind(retrieveExtendsValues, retrieveExtendsValuesDependencies),
};

export const choosePackageManagerDependencies: ChoosePackageManagerDependencies = {
    fileSystem: fsFileSystem,
};

export const createESLintConfigurationDependencies: CreateESLintConfigurationDependencies = {
    convertRules: bind(convertRules, convertRulesDependencies),
    summarizePackageRules: bind(summarizePackageRules, summarizePackageRulesDependencies),
};

export const logMissingPackagesDependencies: LogMissingPackagesDependencies = {
    choosePackageManager: bind(choosePackageManager, choosePackageManagerDependencies),
    logger: processLogger,
};

export const reportConversionResultsDependencies: ReportConversionResultsDependencies = {
    logger: processLogger,
};

export const reportEditorSettingConversionResultsDependencies = {
    logger: processLogger,
};

export const writeConversionResultsDependencies = {
    fileSystem: fsFileSystem,
};

export const convertEditorConfigDependencies: ConvertEditorConfigDependencies = {
    fileSystem: fsFileSystem,
};

export const editorConfigDescriptors: EditorConfigDescriptor[] = [
    [".atom/config.cson", convertAtomConfig],
    [".vscode/settings.json", convertVSCodeConfig],
];

export const reportEditorConfigConversionResultsDependencies = {
    logger: processLogger,
};

export const convertEditorConfigsDependencies: ConvertEditorConfigsDependencies = {
    convertEditorConfig: bind(convertEditorConfig, convertEditorConfigDependencies),
    editorConfigDescriptors,
    reportEditorConfigConversionResults: bind(
        reportEditorConfigConversionResults,
        reportEditorConfigConversionResultsDependencies,
    ),
};

export const convertLintConfigDependencies: ConvertLintConfigDependencies = {
    createESLintConfiguration: bind(
        createESLintConfiguration,
        createESLintConfigurationDependencies,
    ),
    fileSystem: fsFileSystem,
    logMissingPackages: bind(logMissingPackages, logMissingPackagesDependencies),
    reportConfigConversionResults: bind(
        reportConfigConversionResults,
        reportConversionResultsDependencies,
    ),
};

export const runCliDependencies: RunCliDependencies = {
    converters: [
        bind(convertLintConfig, convertLintConfigDependencies),
        bind(convertEditorConfigs, convertEditorConfigsDependencies),
        bind(convertComments, convertCommentsDependencies),
    ],
    findOriginalConfigurations: bind(
        findOriginalConfigurations,
        findOriginalConfigurationsDependencies,
    ),
    logger: processLogger,
};
