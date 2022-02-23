import { describe, expect, test } from "@jest/globals";

import { mergeIndent } from "../indent";

describe("mergeIndent", () => {
    test("neither options existing", () => {
        const result = mergeIndent(undefined, undefined);

        expect(result).toEqual([]);
    });

    test("original indent size existing", () => {
        const result = mergeIndent([2], undefined);

        expect(result).toEqual([2]);
    });

    test("new indent size existing", () => {
        const result = mergeIndent(undefined, [2]);

        expect(result).toEqual([2]);
    });

    test("both indent sizes existing", () => {
        const result = mergeIndent([1], [2]);

        expect(result).toEqual([2]);
    });

    test("default indent sizes existing", () => {
        const result = mergeIndent([4], [4]);

        expect(result).toEqual([]);
    });

    test("original object option existing", () => {
        const result = mergeIndent([4, { ArrayExpression: "first" }], [2]);

        expect(result).toEqual([2, { ArrayExpression: "first" }]);
    });

    test("new object option existing", () => {
        const result = mergeIndent([2], [4, { ArrayExpression: "first" }]);

        expect(result).toEqual([2, { ArrayExpression: "first" }]);
    });

    test("both object option existing", () => {
        const result = mergeIndent(
            [4, { ObjectExpression: "first" }],
            [4, { ArrayExpression: "first" }],
        );

        expect(result).toEqual([
            4,
            {
                ArrayExpression: "first",
                ObjectExpression: "first",
            },
        ]);
    });
});
