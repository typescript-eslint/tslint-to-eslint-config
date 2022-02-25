import { describe, expect, test } from "@jest/globals";

import { convertRxjsNoCreate } from "../rxjs-no-create.js";

describe("convertRxjsNoCreate", () => {
    test("conversion without arguments", () => {
        const result = convertRxjsNoCreate({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-create",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
