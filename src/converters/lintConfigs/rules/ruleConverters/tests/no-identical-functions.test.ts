import { describe, expect, test } from "@jest/globals";

import { convertNoIdenticalFunctions } from "../no-identical-functions";

describe("convertNoIdenticalFunctions", () => {
    test("conversion without arguments", () => {
        const result = convertNoIdenticalFunctions({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "sonarjs/no-identical-functions",
                },
            ],
            plugins: ["sonarjs"],
        });
    });
});
