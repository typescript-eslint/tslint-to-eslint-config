import { describe, expect, test } from "@jest/globals";

import { mergeConsistentTypeAssertions } from "../consistent-type-assertions";

const option = {
    assertionStyle: "never",
};

describe("mergeConsistentTypeAssertions", () => {
    test("neither options existing", () => {
        const result = mergeConsistentTypeAssertions(undefined, undefined);

        expect(result).toEqual([]);
    });

    test("only existing options", () => {
        const result = mergeConsistentTypeAssertions([option], undefined);

        expect(result).toEqual([option]);
    });

    test("only new options", () => {
        const result = mergeConsistentTypeAssertions(undefined, [option]);

        expect(result).toEqual([option]);
    });
});
