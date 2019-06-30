import { Exec } from "../adapters/exec";
import { findLintConfiguration } from "./findLintConfiguration";

// Soon, this will be filled out with real information...
export type TypeScriptConfiguration = unknown;

const defaultTypeScriptConfiguration = {};

export type FindTypeScriptConfigurationDependencies = {
    exec: Exec;
};

export const findTypeScriptConfiguration = (
    dependencies: FindTypeScriptConfigurationDependencies,
    config: string | undefined,
) =>
    findLintConfiguration<TypeScriptConfiguration>(
        dependencies.exec,
        "cat",
        config || "./tsconfig.json",
        defaultTypeScriptConfiguration,
    );
