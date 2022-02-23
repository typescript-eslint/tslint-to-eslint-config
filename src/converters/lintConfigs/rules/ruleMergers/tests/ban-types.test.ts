import { describe, expect, test } from "@jest/globals";

import { mergeBanTypes } from "../ban-types";

describe("mergeBanTypes", () => {
    test("neither types existing", () => {
        const result = mergeBanTypes(undefined, undefined);

        expect(result).toEqual([]);
    });

    test("original type existing", () => {
        const result = mergeBanTypes([{ types: { a: "original" } }], undefined);

        expect(result).toEqual([{ types: { a: "original" } }]);
    });

    test("new type existing", () => {
        const result = mergeBanTypes(undefined, [{ types: { b: "new" } }]);

        expect(result).toEqual([{ types: { b: "new" } }]);
    });

    test("both types existing", () => {
        const result = mergeBanTypes([{ types: { a: "original" } }], [{ types: { b: "new" } }]);

        expect(result).toEqual([{ types: { a: "original", b: "new" } }]);
    });
});
