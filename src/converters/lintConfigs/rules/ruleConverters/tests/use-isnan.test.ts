import { describe, expect, test } from "@jest/globals";

import { convertUseIsnan } from "../use-isnan";

describe("convertUseIsnan", () => {
    test("conversion without arguments", () => {
        const result = convertUseIsnan({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "use-isnan",
                },
            ],
        });
    });
});
