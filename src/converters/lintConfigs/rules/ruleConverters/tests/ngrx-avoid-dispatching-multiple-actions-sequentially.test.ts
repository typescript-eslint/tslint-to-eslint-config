import { describe, expect, test } from "@jest/globals";

import { convertNgrxAvoidDispatchingMultipleActionsSequentially } from "../ngrx-avoid-dispatching-multiple-actions-sequentially";

describe("convertNgrxAvoidDispatchingMultipleActionsSequentially", () => {
    test("conversion without arguments", () => {
        const result = convertNgrxAvoidDispatchingMultipleActionsSequentially({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "ngrx/avoid-dispatching-multiple-actions-sequentially",
                },
            ],
            plugins: ["eslint-plugin-ngrx"],
        });
    });
});
