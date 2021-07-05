import { childProcessExec } from "../adapters/childProcessExec";
import { fsFileSystem } from "../adapters/fsFileSystem";
import { globAsync } from "../adapters/globAsync";
import { nativeImporter } from "../adapters/nativeImporter";
import { processLogger } from "../adapters/processLogger";
import { bind } from "../binding";
import { RunCliDependencies } from "../cli/runCli";
import {
    collectCommentFileNames,
    CollectCommentFileNamesDependencies,
} from "../comments/collectCommentFileNames";
import {
    convertComments,
    ConvertCommentsDependencies,
} from "../converters/comments/convertComments";
import {
    convertFileComments,
    ConvertFileCommentsDependencies,
} from "../converters/comments/convertFileComments";
import {
    extractGlobPaths,
    ExtractGlobPathsDependencies,
} from "../converters/comments/extractGlobPaths";
import {
    reportCommentResults,
    ReportCommentResultsDependencies,
} from "../converters/comments/reporting/reportCommentResults";
import {
    convertEditorConfig,
    ConvertEditorConfigDependencies,
} from "../converters/editorConfigs/convertEditorConfig";
import {
    convertEditorConfigs,
    ConvertEditorConfigsDependencies,
} from "../converters/editorConfigs/convertEditorConfigs";
import { convertAtomConfig } from "../converters/editorConfigs/converters/convertAtomConfig";
import { convertVSCodeConfig } from "../converters/editorConfigs/converters/convertVSCodeConfig";
import { reportEditorConfigConversionResults } from "../converters/editorConfigs/reporting/reportEditorConfigConversionResults";
import { EditorConfigDescriptor } from "../converters/editorConfigs/types";
import {
    convertLintConfig,
    ConvertLintConfigDependencies,
} from "../converters/lintConfigs/convertLintConfig";
import {
    createESLintConfiguration,
    CreateESLintConfigurationDependencies,
} from "../converters/lintConfigs/createESLintConfiguration";
import { removeExtendsDuplicatedRules } from "../converters/lintConfigs/pruning/removeExtendsDuplicatedRules";
import {
    choosePackageManager,
    ChoosePackageManagerDependencies,
} from "../converters/lintConfigs/reporting/packages/choosePackageManager";
import {
    logMissingPackages,
    LogMissingPackagesDependencies,
} from "../converters/lintConfigs/reporting/packages/logMissingPackages";
import {
    reportConfigConversionResults,
    ReportConversionResultsDependencies,
} from "../converters/lintConfigs/reporting/reportConfigConversionResults";
import {
    convertRules,
    ConvertRulesDependencies,
} from "../converters/lintConfigs/rules/convertRules";
import { ruleConverters } from "../converters/lintConfigs/rules/ruleConverters";
import { ruleMergers } from "../converters/lintConfigs/rules/ruleMergers";
import { checkPrettierExtension } from "../converters/lintConfigs/summarization/prettier/checkPrettierExtension";
import {
    retrieveExtendsValues,
    RetrieveExtendsValuesDependencies,
} from "../converters/lintConfigs/summarization/retrieveExtendsValues";
import {
    summarizePackageRules,
    SummarizePackageRulesDependencies,
} from "../converters/lintConfigs/summarization/summarizePackageRules";
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
};

export const findPackagesConfigurationDependencies = {
    fileSystem: fsFileSystem,
};

export const findOriginalConfigurationsDependencies: FindOriginalConfigurationsDependencies = {
    findESLintConfiguration: bind(findESLintConfiguration, findConfigurationDependencies),
    findPackagesConfiguration: bind(
        findPackagesConfiguration,
        findPackagesConfigurationDependencies,
    ),
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
