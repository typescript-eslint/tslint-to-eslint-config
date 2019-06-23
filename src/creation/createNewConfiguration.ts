import * as fs from "fs";

import { ConfigConversionResults } from "../rules/convertRules";
import { formatConvertedRules } from "./formatConvertedRules";

export const createNewConfiguration = async (conversionResults: ConfigConversionResults) => {
    const output = {
        ...(conversionResults.missing.length && {
            plugins: ["@typescript-eslint/tslint"],
            parserOptions: {
                project: "tsconfig.json",
            },
        }),
        rules: formatConvertedRules(conversionResults),
    };

    await fs.promises.writeFile(".eslintrc.json", JSON.stringify(output, undefined, 4));
};
