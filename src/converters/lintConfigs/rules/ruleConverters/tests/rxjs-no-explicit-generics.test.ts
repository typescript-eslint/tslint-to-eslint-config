import { describe, expect, test } from "@jest/globals";

import { convertRxjsNoExplicitGenerics } from "../rxjs-no-explicit-generics";

describe("convertRxjsNoExplicitGenerics", () => {
    test("conversion without arguments", () => {
        const result = convertRxjsNoExplicitGenerics({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-explicit-generics",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
