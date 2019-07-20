import { Exec } from "../adapters/exec";
import { findConfiguration } from "./findConfiguration";

export type TSLintConfiguration = {
    rulesDirectory: string[];
    rules: TSLintConfigurationRules;
};

export type TSLintConfigurationRules = {
    [i: string]: any;
};

const defaultTSLintConfiguration = {
    rulesDirectory: [],
    rules: {},
};

export type FindTSLintConfigurationDependencies = {
    exec: Exec;
};

export const findTSLintConfiguration = async (
    dependencies: FindTSLintConfigurationDependencies,
    config: string | undefined,
): Promise<TSLintConfiguration | Error> => {
    const rawConfiguration = await findConfiguration<TSLintConfiguration>(
        dependencies.exec,
        "tslint --print-config",
        config || "./tslint.json",
    );

    if (rawConfiguration instanceof Error) {
        if (rawConfiguration.message.includes("unknown option `--print-config")) {
            return new Error("TSLint v5.18 required. Please update your version.");
        }

        return rawConfiguration;
    }

    return {
        ...defaultTSLintConfiguration,
        ...rawConfiguration,
    };
};
