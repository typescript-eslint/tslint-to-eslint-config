import { ConfigConversionResults } from "../rules/convertRules";
import { formatConvertedRules } from "./formatConvertedRules";

export type WriteFile = (filePath: string, contents: string) => Promise<void>;

export const createNewConfiguration = async (
    conversionResults: ConfigConversionResults,
    writeFile: WriteFile,
) => {
    const output = {
        ...(conversionResults.missing.length && {
            plugins: ["@typescript-eslint/tslint"],
            parser: "@typescript-eslint/parser",
            parserOptions: {
                project: "tsconfig.json",
            },
        }),
        rules: formatConvertedRules(conversionResults),
    };

    await writeFile(".eslintrc.json", JSON.stringify(output, undefined, 4));
};
