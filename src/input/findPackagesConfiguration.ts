import {
    findReportedConfiguration,
    FindReportedConfigurationDependencies,
} from "./findReportedConfiguration";

export type PackagesConfiguration = {
    dependencies: Record<string, string | undefined>;
    devDependencies: Record<string, string | undefined>;
};

export const findPackagesConfiguration = async (
    dependencies: FindReportedConfigurationDependencies,
    config: string | undefined,
): Promise<Error | PackagesConfiguration> => {
    const rawConfiguration = await findReportedConfiguration<PackagesConfiguration>(
        dependencies.exec,
        dependencies.platform === "win32" ? "type" : "cat",
        config ?? "./package.json",
    );

    return rawConfiguration instanceof Error
        ? rawConfiguration
        : {
              dependencies: {
                  ...rawConfiguration.dependencies,
              },
              devDependencies: {
                  ...rawConfiguration.devDependencies,
              },
          };
};
