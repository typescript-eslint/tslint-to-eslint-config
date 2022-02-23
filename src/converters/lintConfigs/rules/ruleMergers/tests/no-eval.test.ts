import { describe, expect, test } from "@jest/globals";

import { mergeNoEval } from "../no-eval";

describe("mergeNoEval", () => {
    test("neither options existing", () => {
        const result = mergeNoEval(undefined, undefined);

        expect(result).toEqual([]);
    });

    test("neither allowIndirect existing", () => {
        const result = mergeNoEval([{}], [{}]);

        expect(result).toEqual([{}]);
    });

    test("original allowIndirect existing", () => {
        const result = mergeNoEval([{ allowIndirect: true }], [{}]);

        expect(result).toEqual([{}]);
    });

    test("new allowIndirect existing", () => {
        const result = mergeNoEval([{}], [{ allowIndirect: true }]);

        expect(result).toEqual([{}]);
    });

    test("original allowIndirect is false but new allowIndirect is true", () => {
        const result = mergeNoEval([{ allowIndirect: false }], [{ allowIndirect: true }]);

        expect(result).toEqual([{}]);
    });

    test("original allowIndirect is true but new allowIndirect is false", () => {
        const result = mergeNoEval([{ allowIndirect: true }], [{ allowIndirect: false }]);

        expect(result).toEqual([{}]);
    });

    test("both allowIndirect are true", () => {
        const result = mergeNoEval([{ allowIndirect: true }], [{ allowIndirect: true }]);

        expect(result).toEqual([{ allowIndirect: true }]);
    });
});
