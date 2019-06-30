import { Exec } from "../adapters/exec";
import { findLintConfiguration } from "./findLintConfiguration";

// Soon, this will be filled out with real information...
export type ESLintConfiguration = unknown;

const defaultESLintConfiguration = {};

export type FindESLintConfigurationDependencies = {
    exec: Exec;
};

export const findESLintConfiguration = (
    dependencies: FindESLintConfigurationDependencies,
    config: string | undefined,
) =>
    findLintConfiguration<ESLintConfiguration>(
        dependencies.exec,
        "eslint --print-config",
        config || "./eslintrc.js",
        defaultESLintConfiguration,
    );
