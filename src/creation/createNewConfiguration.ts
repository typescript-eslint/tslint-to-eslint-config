import { ConfigConversionResults } from "../rules/convertRules";
import { formatConvertedRules } from "./formatConvertedRules";

export type WriteFile = (filePath: string, contents: string) => Promise<void>;

export const createNewConfiguration = async (
    conversionResults: ConfigConversionResults,
    writeFile: WriteFile,
) => {
    const output = {
        parser: "@typescript-eslint/parser",
        parserOptions: {
            project: "tsconfig.json",
        },
        ...(conversionResults.missing.length && {
            plugins: ["@typescript-eslint/tslint"],
        }),
        rules: formatConvertedRules(conversionResults),
    };

    await writeFile(".eslintrc.json", JSON.stringify(output, undefined, 4));
};
