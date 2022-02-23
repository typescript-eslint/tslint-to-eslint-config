import { describe, expect, test } from "@jest/globals";

import { BAN_TS_IGNORE_NOTICE, convertBanTsIgnore } from "../ban-ts-ignore";

describe("convertBanTsIgnore", () => {
    test("conversion without arguments", () => {
        const result = convertBanTsIgnore({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/ban-ts-comment",
                    notices: [BAN_TS_IGNORE_NOTICE],
                },
            ],
        });
    });
});
