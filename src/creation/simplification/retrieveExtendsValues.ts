import { SansDependencies } from "../../binding";
import { ConfigurationError } from "../../errors/configurationError";
import { ESLintConfiguration } from "../../input/findESLintConfiguration";
import { importer } from "../../input/importer";
import { resolveExtensionNames } from "./resolveExtensionNames";

export type RetrieveExtendsValuesDependencies = {
    importer: SansDependencies<typeof importer>;
};

export type RetrievedExtensionValues = {
    configurationErrors: ConfigurationError[];
    importedExtensions: Partial<ESLintConfiguration>[];
};

export const retrieveExtendsValues = async (
    dependencies: RetrieveExtendsValuesDependencies,
    rawExtensionNames: string | string[],
): Promise<RetrievedExtensionValues> => {
    const importedExtensions: Partial<ESLintConfiguration>[] = [];
    const configurationErrors: ConfigurationError[] = [];
    const extensionNames = resolveExtensionNames(rawExtensionNames);

    const builtInExtensionGetters = new Map<string, () => Promise<ESLintConfiguration>>([
        [
            "eslint:all",
            async () =>
                (await dependencies.importer("eslint/conf/eslint-all")) as ESLintConfiguration,
        ],
        [
            "eslint:recommended",
            async () =>
                (await dependencies.importer(
                    "eslint/conf/eslint-recommended",
                )) as ESLintConfiguration,
        ],
    ]);

    await Promise.all(
        extensionNames.map(async extensionName => {
            const getBuiltInExtension = builtInExtensionGetters.get(extensionName);
            if (getBuiltInExtension !== undefined) {
                importedExtensions.push(await getBuiltInExtension());
                return;
            }

            const imported = await dependencies.importer(extensionName);

            if (imported instanceof Error) {
                configurationErrors.push(
                    new ConfigurationError(
                        imported,
                        `Could not resolve ESLint extension '${extensionName}'.`,
                    ),
                );
            } else {
                importedExtensions.push(imported as Partial<ESLintConfiguration>);
            }
        }),
    );

    return { configurationErrors, importedExtensions };
};
