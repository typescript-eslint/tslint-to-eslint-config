import { describe, expect, test } from "@jest/globals";

import { convertRxjsJust } from "../rxjs-just";

describe("convertRxjsJust", () => {
    test("conversion without arguments", () => {
        const result = convertRxjsJust({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/just",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
