import { FileSystem } from "../adapters/fileSystem";

export type PackagesConfiguration = {
    dependencies: Record<string, string | undefined>;
    devDependencies: Record<string, string | undefined>;
};

export type FindPackagesConfigurationDependencies = {
    fileSystem: Pick<FileSystem, "readFile">;
}

export const findPackagesConfiguration = async (
    dependencies: FindPackagesConfigurationDependencies,
    config = "./package.json",
): Promise<PackagesConfiguration | Error> => {
    const rawConfiguration = await dependencies.fileSystem.readFile(config);
    if (rawConfiguration instanceof Error) {
        return rawConfiguration;
    }

    const configuration = (JSON.parse(rawConfiguration)) as PackagesConfiguration;

    return {
        dependencies: {
            ...configuration.dependencies,
        },
        devDependencies: {
            ...configuration.devDependencies,
        },
    };
};
