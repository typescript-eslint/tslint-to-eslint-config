import { TSLintConfiguration } from "../input/findTslintConfiguration";
import { ConfigConversionResults } from "../rules/convertRules";
import { formatConvertedRules } from "./formatConvertedRules";

export type WriteFile = (filePath: string, contents: string) => Promise<void>;

export const createNewConfiguration = async (
    conversionResults: ConfigConversionResults,
    originalConfiguration: TSLintConfiguration,
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
        rules: formatConvertedRules(conversionResults, originalConfiguration),
    };

    await writeFile(".eslintrc.json", JSON.stringify(output, undefined, 4));
};
