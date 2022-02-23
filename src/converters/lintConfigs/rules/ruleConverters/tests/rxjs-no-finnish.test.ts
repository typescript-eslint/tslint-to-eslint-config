import { describe, expect, test } from "@jest/globals";

import { convertRxjsNoFinnish } from "../rxjs-no-finnish";

describe("convertRxjsNoFinnish", () => {
    test("conversion without arguments", () => {
        const result = convertRxjsNoFinnish({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-finnish",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
