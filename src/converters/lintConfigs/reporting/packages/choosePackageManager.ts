import { FileSystem } from "../../../../adapters/fileSystem.js";
import { PackageManager, preferredLockfiles } from "./packageManagers.js";

export type ChoosePackageManagerDependencies = {
    fileSystem: Pick<FileSystem, "fileExists">;
};

export const choosePackageManager = async (dependencies: ChoosePackageManagerDependencies) => {
    for (const [packageManager, lockFile] of preferredLockfiles) {
        if (await dependencies.fileSystem.fileExists(lockFile)) {
            return packageManager;
        }
    }

    return PackageManager.npm;
};
