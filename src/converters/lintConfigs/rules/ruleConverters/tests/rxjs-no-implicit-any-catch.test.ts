import { describe, expect, test } from "@jest/globals";

import { convertRxjsNoImplicitAnyCatch } from "../rxjs-no-implicit-any-catch.js";

describe("convertRxjsNoImplicitAnyCatch", () => {
    test("conversion without arguments", () => {
        const result = convertRxjsNoImplicitAnyCatch({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-implicit-any-catch",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });

    test("conversion with allowExplicitAny argument", () => {
        const result = convertRxjsNoImplicitAnyCatch({
            ruleArguments: [{ allowExplicitAny: true }],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-implicit-any-catch",
                    ruleArguments: [{ allowExplicitAny: true }],
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
