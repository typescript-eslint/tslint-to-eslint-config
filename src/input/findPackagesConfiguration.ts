import {
    findReportedConfiguration,
    FindReportedConfigurationDependencies,
} from "./findReportedConfiguration";

export type PackagesConfiguration = {
    dependencies: {
        [i: string]: string;
    };
    devDependencies: {
        [i: string]: string;
    };
};

const defaultPackagesConfiguration = {
    dependencies: {},
    devDependencies: {},
};

export const findPackagesConfiguration = async (
    dependencies: FindReportedConfigurationDependencies,
    config: string | undefined,
): Promise<PackagesConfiguration | Error> => {
    const rawConfiguration = await findReportedConfiguration<PackagesConfiguration>(
        dependencies.exec,
        "cat",
        config || "./package.json",
    );

    return rawConfiguration instanceof Error
        ? rawConfiguration
        : {
              dependencies: {
                  ...rawConfiguration.dependencies,
                  ...defaultPackagesConfiguration.dependencies,
              },
              devDependencies: {
                  ...rawConfiguration.devDependencies,
                  ...defaultPackagesConfiguration.devDependencies,
              },
          };
};
