import { Importer } from "../../adapters/importer";
import { ConfigurationError } from "../../errors/configurationError";
import { ESLintConfiguration } from "../../input/findESLintConfiguration";
import { resolveExtensionNames } from "./resolveExtensionNames";

export type RetrieveExtendsValuesDependencies = {
    importer: Importer;
};

export type RetrievedExtensionValues = {
    configurationErrors: ConfigurationError[];
    importedExtensions: Partial<ESLintConfiguration>[];
};

const builtInExtensionGetters = new Map<
    string,
    (importer: Importer) => Promise<ESLintConfiguration>
>([
    [
        "eslint:all",
        async importer => (await importer("eslint/conf/eslint-all")) as ESLintConfiguration,
    ],
    [
        "eslint:recommended",
        async importer => (await importer("eslint/conf/eslint-recommended")) as ESLintConfiguration,
    ],
]);

export const retrieveExtendsValues = async (
    dependencies: RetrieveExtendsValuesDependencies,
    rawExtensionNames: string | string[],
): Promise<RetrievedExtensionValues> => {
    const importedExtensions: Partial<ESLintConfiguration>[] = [];
    const configurationErrors: ConfigurationError[] = [];
    const extensionNames = resolveExtensionNames(rawExtensionNames);

    await Promise.all(
        extensionNames.map(async extensionName => {
            const getBuiltInExtension = builtInExtensionGetters.get(extensionName);
            if (getBuiltInExtension !== undefined) {
                importedExtensions.push(await getBuiltInExtension(dependencies.importer));
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
