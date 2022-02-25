import { Exec } from "../adapters/exec.js";
import { SansDependencies } from "../binding.js";
import { RawESLintRuleSeverity } from "../converters/lintConfigs/rules/types.js";
import { ConfigurationLocations } from "../types.js";
import { uniqueFromSources } from "../utils.js";
import { OriginalConfigurations } from "./findOriginalConfigurations.js";
import { findRawConfiguration } from "./findRawConfiguration.js";
import { findReportedConfiguration } from "./findReportedConfiguration.js";
import { importer } from "./importer.js";

export type ESLintConfiguration = {
    env?: Record<string, boolean | undefined>;
    extends?: string | string[];
    globals?: Record<string, boolean | undefined>;
    rules?: ESLintConfigurationRules;
};

export type ESLintConfigurationRules = Record<string, ESLintConfigurationRuleValue>;

export type ESLintConfigurationRuleValue =
    | RawESLintRuleSeverity
    | [RawESLintRuleSeverity, ...any[]];

const defaultESLintConfiguration = {
    env: {},
    extends: [],
    rules: {},
};

export type FindESLintConfigurationDependencies = {
    exec: Exec;
    importer: SansDependencies<typeof importer>;
};

export const findESLintConfiguration = async (
    dependencies: FindESLintConfigurationDependencies,
    config: Pick<ConfigurationLocations, "config" | "eslint">,
): Promise<OriginalConfigurations<ESLintConfiguration> | Error> => {
    const filePath = config.eslint ?? config.config;
    const [rawConfiguration, reportedConfiguration] = await Promise.all([
        findRawConfiguration<ESLintConfiguration>(dependencies.importer, filePath, {
            extends: [],
        }),
        findReportedConfiguration<ESLintConfiguration>(
            dependencies.exec,
            "eslint --print-config",
            filePath,
        ),
    ]);

    if (rawConfiguration instanceof Error) {
        return rawConfiguration;
    }

    if (reportedConfiguration instanceof Error) {
        return reportedConfiguration;
    }

    const extensions = uniqueFromSources(rawConfiguration.extends, reportedConfiguration.extends);

    return {
        full: {
            ...defaultESLintConfiguration,
            ...reportedConfiguration,
            extends: extensions,
        },
        raw: rawConfiguration,
    };
};
