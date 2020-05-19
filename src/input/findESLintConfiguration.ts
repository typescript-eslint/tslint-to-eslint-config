import { Exec } from "../adapters/exec";
import { SansDependencies } from "../binding";
import { RawESLintRuleSeverity } from "../rules/types";
import { TSLintToESLintSettings } from "../types";
import { uniqueFromSources } from "../utils";
import { findRawConfiguration } from "./findRawConfiguration";
import { findReportedConfiguration } from "./findReportedConfiguration";
import { OriginalConfigurations } from "./findOriginalConfigurations";
import { importer } from "./importer";

export type ESLintConfiguration = {
    env: Record<string, boolean>;
    extends: string | string[];
    globals?: Record<string, boolean>;
    rules: ESLintConfigurationRules;
};

export type ESLintConfigurationRules = {
    [i: string]: ESLintConfigurationRuleValue;
};

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
    config: Pick<TSLintToESLintSettings, "config" | "eslint">,
): Promise<OriginalConfigurations<ESLintConfiguration> | Error> => {
    const filePath = config.eslint ?? config.config;
    const [rawConfiguration, reportedConfiguration] = await Promise.all([
        findRawConfiguration<ESLintConfiguration>(dependencies.importer, filePath, {
            extends: [],
        }),
        findReportedConfiguration<Partial<ESLintConfiguration>>(
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
