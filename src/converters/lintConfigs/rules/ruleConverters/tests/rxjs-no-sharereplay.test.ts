import { describe, expect, test } from "@jest/globals";

import { convertRxjsNoShareReplay } from "../rxjs-no-sharereplay";

describe("convertRxjsNoShareReplay", () => {
    test("conversion without arguments", () => {
        const result = convertRxjsNoShareReplay({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-sharereplay",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });

    test("conversion without arguments", () => {
        const result = convertRxjsNoShareReplay({
            ruleArguments: [
                {
                    allowConfig: true,
                },
            ],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-sharereplay",
                    ruleArguments: [
                        {
                            allowConfig: true,
                        },
                    ],
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
