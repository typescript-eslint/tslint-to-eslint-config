import {
    findReportedConfiguration,
    FindReportedConfigurationDependencies,
} from "./findReportedConfiguration";

export type TypeScriptConfiguration = {
    compilerOptions?: {
        lib?: string[];
        target?: string;
    };
    exclude?: string[];
    files?: string[];
    include?: string[];
};

const defaultTypeScriptConfiguration = {
    compilerOptions: {
        target: "es3",
    },
};

export const findTypeScriptConfiguration = async (
    dependencies: FindReportedConfigurationDependencies,
    config: string | undefined,
): Promise<Error | TypeScriptConfiguration> => {
    const rawConfiguration = await findReportedConfiguration<TypeScriptConfiguration>(
        dependencies.exec,
        "tsc --showConfig -p",
        config ?? "./tsconfig.json",
    );

    return rawConfiguration instanceof Error
        ? rawConfiguration
        : {
              ...rawConfiguration,
              compilerOptions: {
                  ...defaultTypeScriptConfiguration.compilerOptions,
                  ...rawConfiguration.compilerOptions,
              },
          };
};
