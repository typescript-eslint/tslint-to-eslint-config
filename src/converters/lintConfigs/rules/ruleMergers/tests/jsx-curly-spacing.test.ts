import { describe, expect, test } from "@jest/globals";

import { mergeJsxCurlySpacing } from "../jsx-curly-spacing";

describe("mergeJsxCurlySpacing", () => {
    test("neither options existing", () => {
        const result = mergeJsxCurlySpacing(undefined, undefined);

        expect(result).toEqual([]);
    });

    test("original when existing", () => {
        const result = mergeJsxCurlySpacing([{ when: "always" }], undefined);

        expect(result).toEqual([{ when: "always" }]);
    });

    test("new when existing", () => {
        const result = mergeJsxCurlySpacing(undefined, [{ when: "never" }]);

        expect(result).toEqual([{ when: "never" }]);
    });

    test("both when existing", () => {
        const result = mergeJsxCurlySpacing([{ when: "always" }], [{ when: "never" }]);

        expect(result).toEqual([{ when: "never" }]);
    });

    test("both when and additional options existing", () => {
        const result = mergeJsxCurlySpacing([{ when: "never" }], [{ allowMultiline: true }]);

        expect(result).toEqual([{ allowMultiline: true, when: "never" }]);
    });
});
