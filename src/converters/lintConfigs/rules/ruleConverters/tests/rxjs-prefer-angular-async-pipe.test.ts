import { describe, expect, test } from "@jest/globals";

import { convertRxjsPreferAngularAsyncPipe } from "../rxjs-prefer-angular-async-pipe.js";

describe("convertRxjsPreferAngularAsyncPipe", () => {
    test("conversion without arguments", () => {
        const result = convertRxjsPreferAngularAsyncPipe({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "prefer-async-pipe",
                },
            ],
            plugins: ["rxjs-angular"],
        });
    });
});
