import { findRawConfiguration } from "./findRawConfiguration";
import { findReportedConfiguration } from "./findReportedConfiguration";
import { Exec } from "../adapters/exec";
import { OriginalConfigurations } from "./findOriginalConfigurations";
import { SansDependencies } from "../binding";
import { importer } from "./importer";

export type TSLintConfiguration = {
    extends?: string[];
    rulesDirectory: string[];
    rules: TSLintConfigurationRules;
};

export type TSLintConfigurationRules = Record<string, any>;

const defaultTSLintConfiguration = {
    extends: [],
    rulesDirectory: [],
    rules: {},
};

export type FindTSLintConfigurationDependencies = {
    exec: Exec;
    importer: SansDependencies<typeof importer>;
};

export const findTSLintConfiguration = async (
    dependencies: FindTSLintConfigurationDependencies,
    config: string | undefined,
): Promise<OriginalConfigurations<TSLintConfiguration> | Error> => {
    const filePath = config || "./tslint.json";
    const [rawConfiguration, reportedConfiguration] = await Promise.all([
        findRawConfiguration<Partial<TSLintConfiguration>>(dependencies.importer, filePath, {
            extends: [],
        }),
        findReportedConfiguration<TSLintConfiguration>(
            dependencies.exec,
            "tslint --print-config",
            config || "./tslint.json",
        ),
    ]);

    if (reportedConfiguration instanceof Error) {
        if (reportedConfiguration.message.includes("unknown option `--print-config")) {
            return new Error("TSLint v5.18 required. Please update your version.");
        }

        return reportedConfiguration;
    }

    if (rawConfiguration instanceof Error) {
        return rawConfiguration;
    }

    return {
        full: {
            ...defaultTSLintConfiguration,
            ...rawConfiguration,
            extends: Array.from(
                new Set(
                    [[rawConfiguration.extends], [reportedConfiguration.extends]].flat(Infinity),
                ),
            ),
        },
        raw: rawConfiguration,
    };
};
