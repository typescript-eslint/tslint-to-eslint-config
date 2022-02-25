import { SansDependencies } from "../binding.js";
import { asError } from "../utils.js";
import { importer } from "./importer.js";

export const findRawConfiguration = async <Configuration>(
    fileImporter: SansDependencies<typeof importer>,
    filePath: string,
    defaults: Partial<Configuration> = {},
): Promise<Configuration | Error> => {
    let results: Configuration;

    try {
        results = (await fileImporter(filePath)) as Configuration;
    } catch (error) {
        return asError(error);
    }

    return {
        ...defaults,
        ...results,
    };
};
