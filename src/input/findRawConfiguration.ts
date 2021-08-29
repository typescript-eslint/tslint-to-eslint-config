import { SansDependencies } from "../binding";
import { asError } from "../utils";
import { importer } from "./importer";

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
