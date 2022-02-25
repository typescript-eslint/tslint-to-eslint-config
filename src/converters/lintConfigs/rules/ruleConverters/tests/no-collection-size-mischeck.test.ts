import { describe, expect, test } from "@jest/globals";

import { convertNoCollectionSizeMischeck } from "../no-collection-size-mischeck.js";

describe("convertNoCollectionSizeMischeck", () => {
    test("conversion without arguments", () => {
        const result = convertNoCollectionSizeMischeck({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "sonarjs/no-collection-size-mischeck",
                },
            ],
            plugins: ["sonarjs"],
        });
    });
});
