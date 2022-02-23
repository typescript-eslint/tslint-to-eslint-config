import { describe, expect, test } from "@jest/globals";

import { convertNoDefaultExport } from "../no-default-export";

describe("convertNoDefaultExport", () => {
    test("conversion without arguments", () => {
        const result = convertNoDefaultExport({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "import/no-default-export",
                },
            ],
            plugins: ["eslint-plugin-import"],
        });
    });
});
