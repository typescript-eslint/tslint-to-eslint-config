import { describe, expect, test } from "@jest/globals";

import { convertImportBlacklist } from "../import-blacklist";

describe("convertImportBlacklist", () => {
    test.each([
        [[], []],
        [["rxjs"], ["rxjs"]],
        [
            ["rxjs", "lodash"],
            ["rxjs", "lodash"],
        ],
        [
            [".*\\.temp$", ".*\\.tmp$"],
            [".*\\.temp$", ".*\\.tmp$"],
        ],
        [
            ["moment", "date-fns", ["eslint/*"]],
            [{ patterns: ["eslint/*"], paths: ["moment", "date-fns"] }],
        ],
        [
            [{ lodash: ["pullAll", "pull"] }],
            [
                {
                    paths: [
                        {
                            name: "lodash",
                            importNames: ["pullAll", "pull"],
                        },
                    ],
                },
            ],
        ],
        [
            [
                "rxjs",
                [".*\\.temp$", ".*\\.tmp$"],
                { lodash: ["pullAll", "pull"] },
                { dummy: ["default"] },
            ],
            [
                {
                    paths: [
                        "rxjs",
                        {
                            name: "lodash",
                            importNames: ["pullAll", "pull"],
                        },
                        {
                            name: "dummy",
                            importNames: ["default"],
                        },
                    ],
                    patterns: [".*\\.temp$", ".*\\.tmp$"],
                },
            ],
        ],
    ] as any[][])("convert %j", (ruleArguments: any[], expected: any[]) => {
        const result = convertImportBlacklist({ ruleArguments });
        const hasPatterns = typeof expected[0] === "object" && "patterns" in expected[0];

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: expected,
                    ...(hasPatterns && {
                        notices: [
                            "ESLint and TSLint use different strategies to match patterns. TSLint uses standard regular expressions, but ESLint .gitignore spec.",
                        ],
                    }),
                    ruleName: "no-restricted-imports",
                },
            ],
        });
    });
});
