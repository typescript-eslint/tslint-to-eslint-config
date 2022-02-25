import { describe, expect, test } from "@jest/globals";

import { convertNoIdenticalConditions } from "../no-identical-conditions.js";

describe("convertNoIdenticalConditions", () => {
    test("conversion without arguments", () => {
        const result = convertNoIdenticalConditions({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "sonarjs/no-identical-conditions",
                },
            ],
            plugins: ["sonarjs"],
        });
    });
});
