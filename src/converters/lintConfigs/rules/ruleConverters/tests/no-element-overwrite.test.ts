import { describe, expect, test } from "@jest/globals";

import { convertNoElementOverwrite } from "../no-element-overwrite.js";

describe("convertNoElementOverwrite", () => {
    test("conversion without arguments", () => {
        const result = convertNoElementOverwrite({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "sonarjs/no-element-overwrite",
                },
            ],
            plugins: ["sonarjs"],
        });
    });
});
