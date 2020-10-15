import { EOL } from "os";

import { childProcessExec } from "../adapters/childProcessExec";
import { fsFileSystem } from "../adapters/fsFileSystem";
import { globAsync } from "../adapters/globAsync";
import { nativeImporter } from "../adapters/nativeImporter";
import { processLogger } from "../adapters/processLogger";
import { bind } from "../binding";
import {
    collectCommentFileNames,
    CollectCommentFileNamesDependencies,
} from "../comments/collectCommentFileNames";
import {
    ReportCommentResultsDependencies,
    reportCommentResults,
} from "../converters/comments/reporting/reportCommentResults";
import { convertEditorConfig } from "../converters/editorConfigs/convertEditorConfig";
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
    convertEditorConfigs,
    ConvertEditorConfigsDependencies,
} from "../converters/editorConfigs/convertEditorConfigs";
import { convertAtomConfig } from "../converters/editorConfigs/converters/convertAtomConfig";
import { convertVSCodeConfig } from "../converters/editorConfigs/converters/convertVSCodeConfig";
import { reportEditorConfigConversionResults } from "../converters/editorConfigs/reporting/reportEditorConfigConversionResults";
import { EditorConfigDescriptor } from "../converters/editorConfigs/types";
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
import { addPrettierExtensions } from "../converters/lintConfigs/summarization/prettier/addPrettierExtensions";
import { removeExtendsDuplicatedRules } from "../converters/lintConfigs/pruning/removeExtendsDuplicatedRules";
import {
    ExtractGlobPathsDependencies,
    extractGlobPaths,
} from "../converters/comments/extractGlobPaths";
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

const extractGlobPathsDependencies: ExtractGlobPathsDependencies = {
    globAsync,
};

const convertCommentsDependencies: ConvertCommentsDependencies = {
    collectCommentFileNames: bind(collectCommentFileNames, collectCommentFileNamesDependencies),
    convertFileComments: bind(convertFileComments, convertFileCommentsDependencies),
    extractGlobPaths: bind(extractGlobPaths, extractGlobPathsDependencies),
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

const editorConfigDescriptors: EditorConfigDescriptor[] = [
    [".atom/config.cson", convertAtomConfig],
    [".vscode/settings.json", convertVSCodeConfig],
];

const convertEditorConfigDependencies = {
    editorConfigDescriptors,
    fileSystem: fsFileSystem,
};

const reportEditorConfigConversionResultsDependencies = {
    logger: processLogger,
};

const convertEditorConfigsDependencies: ConvertEditorConfigsDependencies = {
    convertEditorConfig: bind(convertEditorConfig, convertEditorConfigDependencies),
    editorConfigDescriptors,
    reportEditorConfigConversionResults: bind(
        reportEditorConfigConversionResults,
        reportEditorConfigConversionResultsDependencies,
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
        bind(convertEditorConfigs, convertEditorConfigsDependencies),
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
