import { convertNgrxNoDuplicateActionTypes } from "../ngrx-no-duplicate-action-types";

describe(convertNgrxNoDuplicateActionTypes, () => {
    test("conversion without arguments", () => {
        const result = convertNgrxNoDuplicateActionTypes({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [],
        });
    });
});
