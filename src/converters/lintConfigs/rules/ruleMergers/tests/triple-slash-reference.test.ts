import { describe, expect, test } from "@jest/globals";

import { mergeTripleSlashReference } from "../triple-slash-reference";

const option = {
    path: "always",
    types: "prefer-import",
    lib: "always",
};

describe("mergeTripleSlashReference", () => {
    test("neither options existing", () => {
        const result = mergeTripleSlashReference(undefined, undefined);

        expect(result).toEqual([]);
    });

    test("only existing options", () => {
        const result = mergeTripleSlashReference([option], undefined);

        expect(result).toEqual([option]);
    });

    test("only new options", () => {
        const result = mergeTripleSlashReference(undefined, [option]);

        expect(result).toEqual([option]);
    });
});
