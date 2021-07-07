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
): Promise<PackagesConfiguration | Error> => {
    const rawConfiguration = await findReportedConfiguration<PackagesConfiguration>(
        dependencies.exec,
        "cat",
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
