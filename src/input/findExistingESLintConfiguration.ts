import { fsFileSystem } from "../adapters/fsFileSystem";
import { GlobAsync } from "../adapters/globAsync";
import { ResultStatus, ResultWithDataStatus } from "../types";
import { ESLintConfiguration } from "./findESLintConfiguration";

export type FindExistingESLintConfigurationDependencies = {
    globAsync: GlobAsync;
};

export const findExistingESLintConfiguration = async (
    dependencies: FindExistingESLintConfigurationDependencies,
): Promise<ResultWithDataStatus<ESLintConfiguration | string[]>> => {
    const globResult = await dependencies.globAsync(".eslintrc.{js,json,yaml}");
    const packageContent = await fsFileSystem.readFile("package.json");
    if (!(globResult instanceof Error)) {
        return {
            data: globResult,
            status: ResultStatus.Succeeded,
        };
    }
    if (globResult instanceof Error && packageContent instanceof Error) {
        return {
            errors: [globResult, packageContent],
            status: ResultStatus.Failed,
        };
    }
    if (globResult instanceof Error && typeof packageContent === "string") {
        const parsedPackage: Record<string, unknown> = JSON.parse(packageContent);
        if (parsedPackage.hasOwnProperty("eslintConfig")) {
            return {
                data: parsedPackage.eslintConfig as ESLintConfiguration,
                status: ResultStatus.Succeeded,
            };
        }
    }
    return {
        errors: [new Error("Could not find an existing ESLint Config")],
        status: ResultStatus.Failed,
    };
};
