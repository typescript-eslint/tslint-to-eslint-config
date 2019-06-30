import { Exec } from "../adapters/exec";
import { findLintConfiguration } from "./findLintConfiguration";

export type TSLintConfiguration = {
    ruleDirectories: string[];
    rules: TSLintConfigurationRules;
};

export type TSLintConfigurationRules = {
    [i: string]: any;
};

const defaultTSLintConfiguration = {
    ruleDirectories: [],
    rules: {},
};

export type FindTSLintConfigurationDependencies = {
    exec: Exec;
};

export const findTSLintConfiguration = (
    dependencies: FindTSLintConfigurationDependencies,
    config: string | undefined,
) =>
    findLintConfiguration<TSLintConfiguration>(
        dependencies.exec,
        "tslint --print-config",
        config || "./tslint.json",
        defaultTSLintConfiguration,
    );
