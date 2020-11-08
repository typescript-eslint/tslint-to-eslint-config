import { FileSystem } from "../../../../adapters/fileSystem";
import { fsFileSystem } from "../../../../adapters/fsFileSystem";
import { preferredLockfiles, PackageManager } from "./packageManagers";

export type ChoosePackageManagerDependencies = {
    fileSystem: Pick<FileSystem, "fileExists">;
};

export const choosePackageManagerDependencies: ChoosePackageManagerDependencies = {
    fileSystem: fsFileSystem,
};

export const choosePackageManager = async (dependencies: ChoosePackageManagerDependencies) => {
    for (const [packageManager, lockFile] of preferredLockfiles) {
        if (await dependencies.fileSystem.fileExists(lockFile)) {
            return packageManager;
        }
    }

    return PackageManager.npm;
};
