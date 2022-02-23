import { describe, expect, test } from "@jest/globals";

import { mergeNamingConvention } from "../naming-convention";

describe("mergeNamingConvention", () => {
    test("neither options existing", () => {
        const result = mergeNamingConvention(undefined, undefined);

        expect(result).toEqual([]);
    });

    test("original variable name existing", () => {
        const result = mergeNamingConvention(
            [
                {
                    selector: "variable",
                    format: ["camelCase", "UPPER_CASE"],
                    leadingUnderscore: "forbid",
                    trailingUnderscore: "forbid",
                },
            ],
            undefined,
        );

        expect(result).toEqual([
            {
                selector: "variable",
                format: ["camelCase", "UPPER_CASE"],
                leadingUnderscore: "forbid",
                trailingUnderscore: "forbid",
            },
        ]);
    });

    test("original interface name existing", () => {
        const result = mergeNamingConvention(undefined, [
            {
                selector: "interface",
                format: ["PascalCase"],
                custom: {
                    regex: "^I[A-Z]",
                    match: false,
                },
            },
        ]);

        expect(result).toEqual([
            {
                selector: "interface",
                format: ["PascalCase"],
                custom: {
                    regex: "^I[A-Z]",
                    match: false,
                },
            },
        ]);
    });

    test("both interface and variable name existing", () => {
        const result = mergeNamingConvention(
            [
                {
                    selector: "variable",
                    format: ["camelCase", "UPPER_CASE"],
                    leadingUnderscore: "forbid",
                    trailingUnderscore: "forbid",
                },
            ],
            [
                {
                    selector: "interface",
                    format: ["PascalCase"],
                    custom: {
                        regex: "^I[A-Z]",
                        match: false,
                    },
                },
            ],
        );

        expect(result).toEqual([
            {
                selector: "variable",
                format: ["camelCase", "UPPER_CASE"],
                leadingUnderscore: "forbid",
                trailingUnderscore: "forbid",
            },
            {
                selector: "interface",
                format: ["PascalCase"],
                custom: {
                    regex: "^I[A-Z]",
                    match: false,
                },
            },
        ]);
    });
});
