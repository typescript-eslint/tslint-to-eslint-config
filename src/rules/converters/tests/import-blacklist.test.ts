import { convertImportBlacklist } from "../import-blacklist";

describe(convertImportBlacklist, () => {
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
        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: expected,
                    ruleName: "no-restricted-imports",
                },
            ],
        });
    });
});
