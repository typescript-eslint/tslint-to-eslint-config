import { Exec } from "../adapters/exec";
import { SansDependencies } from "../binding";
import { TSLintRuleOptions } from "../converters/lintConfigs/rules/types";
import { uniqueFromSources } from "../utils";
import { findRawConfiguration } from "./findRawConfiguration";
import { findReportedConfiguration } from "./findReportedConfiguration";
import { importer } from "./importer";

export type TSLintConfiguration = {
    extends?: string[];
    rulesDirectory?: string[];
    rules?: TSLintConfigurationRules;
};

export type TSLintConfigurationRules = Record<string, Partial<TSLintRuleOptions>>;

export type FindTSLintConfigurationDependencies = {
    exec: Exec;
    importer: SansDependencies<typeof importer>;
};

const knownErrors = [
    [
        "command not found",
        () =>
            new Error(
                "The 'tslint' command was not found. Either install it globally or add it as a devDependency of this repository.",
            ),
    ],
    [
        "unknown option `--print-config",
        () => new Error("TSLint v5.18 required. Please update your version."),
    ],
    [
        "Could not find configuration path.",
        (filePath: string) =>
            new Error(
                `Could not find your TSLint configuration file at '${filePath}'. Try providing a different --tslint path.`,
            ),
    ],
] as const;

export const findTSLintConfiguration = async (
    dependencies: FindTSLintConfigurationDependencies,
    config: string | undefined,
) => {
    const filePath = config ?? "./tslint.json";
    const [rawConfiguration, reportedConfiguration] = await Promise.all([
        findRawConfiguration<Partial<TSLintConfiguration>>(dependencies.importer, filePath),
        findReportedConfiguration<TSLintConfiguration>(
            dependencies.exec,
            "tslint --print-config",
            filePath,
        ),
    ]);

    if (reportedConfiguration instanceof Error) {
        return (
            knownErrors.find(([knownError]) =>
                reportedConfiguration.message.includes(knownError),
            )?.[1](filePath) ?? reportedConfiguration
        );
    }

    if (rawConfiguration instanceof Error) {
        return rawConfiguration;
    }

    const extensions = uniqueFromSources(rawConfiguration.extends, reportedConfiguration.extends);

    const rules = {
        ...rawConfiguration.rules,
        ...reportedConfiguration.rules,
    };

    return {
        full: {
            ...(extensions.length !== 0 && { extends: extensions }),
            rules,
        },
        raw: rawConfiguration,
    };
};
