import {
    findReportedConfiguration,
    FindReportedConfigurationDependencies,
} from "./findReportedConfiguration";

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
    dependencies: FindReportedConfigurationDependencies,
    config: string | undefined,
): Promise<TypeScriptConfiguration | Error> => {
    const rawConfiguration = await findReportedConfiguration<TypeScriptConfiguration>(
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
