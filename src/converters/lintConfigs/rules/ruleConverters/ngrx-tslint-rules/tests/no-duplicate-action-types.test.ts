import { convertNoDuplicateActionTypes } from "../no-duplicate-action-types";

describe(convertNoDuplicateActionTypes, () => {
    test("conversion without arguments", () => {
        const result = convertNoDuplicateActionTypes({
            ruleArguments: [],
        });

        expect(result).toEqual({});
    });
});
