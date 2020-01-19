import { convertFileNameCasing } from "../file-name-casing";

describe(convertFileNameCasing, () => {
    test("conversion without parameter", () => {
        const result = convertFileNameCasing({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "unicorn/filename-case",
                },
            ],
            plugins: ["unicorn"],
        });
    });

    test("conversion without string value", () => {
        const result = convertFileNameCasing({
            ruleArguments: [true, "camel-case"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "unicorn/filename-case",
                    ruleArguments: [
                        {
                            cases: {
                                camelCase: true,
                            },
                        },
                    ],
                },
            ],
            plugins: ["unicorn"],
        });
    });

    test("conversion with object for filetypes", () => {
        const result = convertFileNameCasing({
            ruleArguments: [true, { ".ts": "ignore", ".tsx": "pascal-case", ".js": "snake-case" }],
        });

        expect(result).toEqual({
            rules: [
                {
                    notices: [
                        "ESLint (Unicorn Plugin) does not support file name casing by file type, so all previously configured casings are now allowed.",
                        "ESLint (Unicorn plugin) does not support the 'ignore' case.",
                    ],
                    ruleName: "unicorn/filename-case",
                    ruleArguments: [
                        {
                            cases: {
                                snakeCase: true,
                                pascalCase: true,
                            },
                        },
                    ],
                },
            ],
            plugins: ["unicorn"],
        });
    });

    test("conversion with ignore as case", () => {
        const result = convertFileNameCasing({
            ruleArguments: [true, "ignore"],
        });

        expect(result).toEqual({
            rules: [
                {
                    notices: ["ESLint (Unicorn plugin) does not support the 'ignore' case."],
                    ruleName: "unicorn/filename-case",
                },
            ],
            plugins: ["unicorn"],
        });
    });

    test("conversion with ignore in object", () => {
        const result = convertFileNameCasing({
            ruleArguments: [true, { ".ts": "ignore" }],
        });

        expect(result).toEqual({
            rules: [
                {
                    notices: [
                        "ESLint (Unicorn Plugin) does not support file name casing by file type, so all previously configured casings are now allowed.",
                        "ESLint (Unicorn plugin) does not support the 'ignore' case.",
                    ],
                    ruleName: "unicorn/filename-case",
                },
            ],
            plugins: ["unicorn"],
        });
    });
});
