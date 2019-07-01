import { findConfiguration, FindConfigurationDependencies } from "./findConfiguration";

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
    dependencies: FindConfigurationDependencies,
    config: string | undefined,
): Promise<PackagesConfiguration | Error> => {
    const rawConfiguration = await findConfiguration<PackagesConfiguration>(
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
