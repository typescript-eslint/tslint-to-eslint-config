import { findConfiguration, FindConfigurationDependencies } from "./findConfiguration";

export type TypeScriptConfiguration = {
    compilerOptions: {
        lib?: string[];
        target: string;
    };
};

const defaultTypeScriptConfiguration = {
    compilerOptions: {
        target: "es3",
    },
};

export const findTypeScriptConfiguration = async (
    dependencies: FindConfigurationDependencies,
    config: string | undefined,
): Promise<TypeScriptConfiguration | Error> => {
    const rawConfiguration = await findConfiguration<TypeScriptConfiguration>(
        dependencies.exec,
        "tsc --showConfig -p",
        config || "./tsconfig.json",
    );

    return rawConfiguration instanceof Error
        ? rawConfiguration
        : {
              compilerOptions: {
                  ...defaultTypeScriptConfiguration.compilerOptions,
                  ...rawConfiguration.compilerOptions,
              },
          };
};
