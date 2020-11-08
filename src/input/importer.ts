import * as path from "path";

import { FileSystem } from "../adapters/fileSystem";
import { fsFileSystem } from "../adapters/fsFileSystem";
import { nativeImporter, NativeImporter } from "../adapters/nativeImporter";
import { parseJson } from "../utils";

export type ImporterDependencies = {
    fileSystem: Pick<FileSystem, "fileExists" | "readFile">;
    getCwd: () => string;
    nativeImporter: NativeImporter;
};

export const importerDependencies: ImporterDependencies = {
    fileSystem: fsFileSystem,
    getCwd: process.cwd.bind(process),
    nativeImporter,
};

export const importer = async (
    dependencies: ImporterDependencies,
    moduleName: string,
): Promise<any | Error> => {
    const pathAttempts = [path.join(dependencies.getCwd(), moduleName), moduleName];

    const importFile = async (filePath: string) => {
        if (!filePath.endsWith(".json")) {
            return await dependencies.nativeImporter(filePath);
        }

        if (!(await dependencies.fileSystem.fileExists(filePath))) {
            return undefined;
        }

        const rawJsonContents = await dependencies.fileSystem.readFile(filePath);
        if (rawJsonContents instanceof Error) {
            return rawJsonContents;
        }

        try {
            return parseJson(rawJsonContents);
        } catch (error) {
            return error;
        }
    };

    for (const pathAttempt of pathAttempts) {
        try {
            const result = await importFile(pathAttempt);
            if (result) {
                return result;
            }
        } catch {}
    }

    return new Error(
        `Could not find '${moduleName}' after trying: ${pathAttempts
            .map((attempt) => `'${attempt}'`)
            .join(", ")}`,
    );
};
