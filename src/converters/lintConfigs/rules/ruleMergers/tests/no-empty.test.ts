import { describe, expect, test } from "@jest/globals";

import { mergeNoEmpty } from "../no-empty";

describe("mergeNoEmpty", () => {
    test("neither options existing", () => {
        const result = mergeNoEmpty(undefined, undefined);

        expect(result).toEqual([]);
    });

    test("neither allowEmptyCatch existing", () => {
        const result = mergeNoEmpty([{}], [{}]);

        expect(result).toEqual([]);
    });

    test("original allowEmptyCatch existing", () => {
        const result = mergeNoEmpty([{ allowEmptyCatch: true }], []);

        expect(result).toEqual([]);
    });

    test("new allowEmptyCatch existing", () => {
        const result = mergeNoEmpty([], [{ allowEmptyCatch: true }]);

        expect(result).toEqual([]);
    });

    test("original allowEmptyCatch is false but new allowEmptyCatch is true", () => {
        const result = mergeNoEmpty([{ allowEmptyCatch: false }], [{ allowEmptyCatch: true }]);

        expect(result).toEqual([]);
    });

    test("original allowEmptyCatch is true but new allowEmptyCatch is false", () => {
        const result = mergeNoEmpty([{ allowEmptyCatch: true }], [{ allowEmptyCatch: false }]);

        expect(result).toEqual([]);
    });

    test("both allowEmptyCatch are true", () => {
        const result = mergeNoEmpty([{ allowEmptyCatch: true }], [{ allowEmptyCatch: true }]);

        expect(result).toEqual([{ allowEmptyCatch: true }]);
    });
});
