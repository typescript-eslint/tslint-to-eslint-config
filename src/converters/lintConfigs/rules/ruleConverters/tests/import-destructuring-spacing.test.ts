import { describe, expect, test } from "@jest/globals";

import { convertImportDestructuringSpacing } from "../import-destructuring-spacing";

describe("convertImportDestructuringSpacing", () => {
    test("conversion without arguments", () => {
        const result = convertImportDestructuringSpacing({
            ruleArguments: [],
        });

        expect(result).toEqual({});
    });
});
