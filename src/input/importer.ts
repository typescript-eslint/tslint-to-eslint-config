import * as path from "path";
import * as stripJsonComments from "strip-json-comments";

import { FileSystem } from "../adapters/fileSystem";
import { NativeImporter } from "../adapters/nativeImporter";

export type ImporterDependencies = {
    fileSystem: Pick<FileSystem, "fileExists" | "readFile">;
    nativeImporter: NativeImporter;
};

export const importer = async (dependencies: ImporterDependencies, moduleName: string) => {
    const pathAttempts = [path.join(process.cwd(), moduleName), moduleName];

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
            return JSON.parse(stripJsonComments(rawJsonContents));
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
            .map(attempt => `'${attempt}'`)
            .join(", ")}`,
    );
};
