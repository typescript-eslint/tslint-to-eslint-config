import { findRawConfiguration } from "./findRawConfiguration";
import { findReportedConfiguration } from "./findReportedConfiguration";
import { Exec } from "../adapters/exec";
import { SansDependencies } from "../binding";
import { uniqueFromSources } from "../utils";
import { importer } from "./importer";

export type TSLintConfiguration = {
    extends?: string[];
    rulesDirectory?: string[];
    rules?: TSLintConfigurationRules;
};

export type TSLintConfigurationRules = Record<string, any>;

export type FindTSLintConfigurationDependencies = {
    exec: Exec;
    importer: SansDependencies<typeof importer>;
};

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
        if (reportedConfiguration.message.includes("unknown option `--print-config")) {
            return new Error("TSLint v5.18 required. Please update your version.");
        }

        return reportedConfiguration;
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
