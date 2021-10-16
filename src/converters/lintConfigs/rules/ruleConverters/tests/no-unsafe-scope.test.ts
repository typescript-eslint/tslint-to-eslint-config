import { convertNoUnsafeScope } from "../no-unsafe-scope";

describe(convertNoUnsafeScope, () => {
    test("conversion without arguments", () => {
        const result = convertNoUnsafeScope({
            ruleArguments: [],
        });

        expect(result).toEqual({});
    });
});
