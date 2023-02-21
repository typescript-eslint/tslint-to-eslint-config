import { describe, expect, test } from "@jest/globals";

import { convertOrderedImports } from "../ordered-imports";

describe("convertOrderedImports", () => {
    test("conversion without arguments", () => {
        const result = convertOrderedImports({
            ruleArguments: [],
        });

        expect(result).toEqual({
            plugins: ["eslint-plugin-import"],
            rules: [
                {
                    ruleArguments: [
                        {
                            "newlines-between": "ignore",
                            alphabetize: {
                                caseInsensitive: true,
                                order: "asc",
                            },
                            groups: [
                                ["builtin", "external", "internal", "unknown", "object", "type"],
                                "parent",
                                ["sibling", "index"],
                            ],
                            pathGroupsExcludedImportTypes: [],
                            distinctGroup: false,
                            pathGroups: [
                                {
                                    pattern: "./",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "sibling",
                                    position: "before",
                                },

                                {
                                    pattern: ".",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "sibling",
                                    position: "before",
                                },
                                {
                                    pattern: "..",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "parent",
                                    position: "before",
                                },
                                {
                                    pattern: "../",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "parent",
                                    position: "before",
                                },
                            ],
                        },
                    ],
                    ruleName: "import/order",
                },
            ],
        });
    });

    test("conversion with option import-sources-order as case-insensitive", () => {
        const result = convertOrderedImports({
            ruleArguments: [
                {
                    "import-sources-order": "case-insensitive",
                },
            ],
        });

        expect(result).toEqual({
            plugins: ["eslint-plugin-import"],
            rules: [
                {
                    ruleArguments: [
                        {
                            "newlines-between": "ignore",
                            alphabetize: {
                                caseInsensitive: true,
                                order: "asc",
                            },
                            groups: [
                                ["builtin", "external", "internal", "unknown", "object", "type"],
                                "parent",
                                ["sibling", "index"],
                            ],
                            pathGroupsExcludedImportTypes: [],
                            distinctGroup: false,
                            pathGroups: [
                                {
                                    pattern: "./",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "sibling",
                                    position: "before",
                                },

                                {
                                    pattern: ".",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "sibling",
                                    position: "before",
                                },
                                {
                                    pattern: "..",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "parent",
                                    position: "before",
                                },
                                {
                                    pattern: "../",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "parent",
                                    position: "before",
                                },
                            ],
                        },
                    ],
                    ruleName: "import/order",
                },
            ],
        });
    });

    test("conversion with option import-sources-order as case-insensitive-legacy", () => {
        const result = convertOrderedImports({
            ruleArguments: [
                {
                    "import-sources-order": "case-insensitive-legacy",
                },
            ],
        });

        expect(result).toEqual({
            plugins: ["eslint-plugin-import"],
            rules: [
                {
                    ruleArguments: [
                        {
                            "newlines-between": "ignore",
                            alphabetize: {
                                caseInsensitive: true,
                                order: "asc",
                            },
                            groups: [
                                ["builtin", "external", "internal", "unknown", "object", "type"],
                                "parent",
                                ["sibling", "index"],
                            ],
                            pathGroupsExcludedImportTypes: [],
                            distinctGroup: false,
                            pathGroups: [
                                {
                                    pattern: "./",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "sibling",
                                    position: "before",
                                },

                                {
                                    pattern: ".",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "sibling",
                                    position: "before",
                                },
                                {
                                    pattern: "..",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "parent",
                                    position: "before",
                                },
                                {
                                    pattern: "../",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "parent",
                                    position: "before",
                                },
                            ],
                        },
                    ],
                    ruleName: "import/order",
                },
            ],
        });
    });

    test("conversion with option import-sources-order as lowercase-first", () => {
        const result = convertOrderedImports({
            ruleArguments: [{ "import-sources-order": "lowercase-first" }],
        });

        expect(result).toEqual({
            plugins: ["eslint-plugin-import"],
            rules: [
                {
                    ruleArguments: [
                        {
                            "newlines-between": "ignore",
                            alphabetize: {
                                caseInsensitive: false,
                                order: "asc",
                            },
                            groups: [
                                ["builtin", "external", "internal", "unknown", "object", "type"],
                                "parent",
                                ["sibling", "index"],
                            ],
                            pathGroupsExcludedImportTypes: [],
                            distinctGroup: false,
                            pathGroups: [
                                {
                                    pattern: "./",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "sibling",
                                    position: "before",
                                },
                                {
                                    pattern: ".",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "sibling",
                                    position: "before",
                                },
                                {
                                    pattern: "..",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "parent",
                                    position: "before",
                                },
                                {
                                    pattern: "../",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "parent",
                                    position: "before",
                                },
                                {
                                    pattern: "[a-z]*",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "external",
                                    position: "before",
                                },
                                {
                                    pattern: "../[a-z]*",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "parent",
                                    position: "before",
                                },
                                {
                                    pattern: "./[a-z]*",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "sibling",
                                    position: "before",
                                },
                            ],
                        },
                    ],
                    ruleName: "import/order",
                },
            ],
        });
    });

    test("conversion with option import-sources-order as lowercase-last", () => {
        const result = convertOrderedImports({
            ruleArguments: [{ "import-sources-order": "lowercase-last" }],
        });

        expect(result).toEqual({
            plugins: ["eslint-plugin-import"],
            rules: [
                {
                    ruleArguments: [
                        {
                            "newlines-between": "ignore",
                            alphabetize: {
                                caseInsensitive: false,
                                order: "asc",
                            },
                            groups: [
                                ["builtin", "external", "internal", "unknown", "object", "type"],
                                "parent",
                                ["sibling", "index"],
                            ],
                            pathGroupsExcludedImportTypes: [],
                            distinctGroup: false,
                            pathGroups: [
                                {
                                    pattern: "./",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "sibling",
                                    position: "before",
                                },
                                {
                                    pattern: ".",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "sibling",
                                    position: "before",
                                },
                                {
                                    pattern: "..",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "parent",
                                    position: "before",
                                },
                                {
                                    pattern: "../",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "parent",
                                    position: "before",
                                },
                            ],
                        },
                    ],
                    ruleName: "import/order",
                },
            ],
        });
    });

    test("conversion with option import-sources-order as any", () => {
        const result = convertOrderedImports({
            ruleArguments: [{ "import-sources-order": "any" }],
        });

        expect(result).toEqual({
            plugins: ["eslint-plugin-import"],
            rules: [
                {
                    ruleArguments: [
                        {
                            "newlines-between": "ignore",
                            alphabetize: {
                                caseInsensitive: false,
                                order: "ignore",
                            },
                            groups: [
                                ["builtin", "external", "internal", "unknown", "object", "type"],
                                "parent",
                                ["sibling", "index"],
                            ],
                            pathGroupsExcludedImportTypes: [],
                            distinctGroup: false,
                            pathGroups: [
                                {
                                    pattern: "./",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "sibling",
                                    position: "before",
                                },
                                {
                                    pattern: ".",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "sibling",
                                    position: "before",
                                },
                                {
                                    pattern: "..",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "parent",
                                    position: "before",
                                },
                                {
                                    pattern: "../",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "parent",
                                    position: "before",
                                },
                            ],
                        },
                    ],
                    ruleName: "import/order",
                },
            ],
        });
    });

    test("conversion with option import-sources-order as case-insensitive (with grouped-imports)", () => {
        const result = convertOrderedImports({
            ruleArguments: [
                {
                    "import-sources-order": "case-insensitive",
                    "grouped-imports": true,
                },
            ],
        });

        expect(result).toEqual({
            plugins: ["eslint-plugin-import"],
            rules: [
                {
                    ruleArguments: [
                        {
                            "newlines-between": "always",
                            alphabetize: {
                                caseInsensitive: true,
                                order: "asc",
                            },
                            groups: [
                                ["builtin", "external", "internal", "unknown", "object", "type"],
                                "parent",
                                ["sibling", "index"],
                            ],
                            pathGroupsExcludedImportTypes: [],
                            distinctGroup: false,
                            pathGroups: [
                                {
                                    pattern: "./",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "sibling",
                                    position: "before",
                                },

                                {
                                    pattern: ".",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "sibling",
                                    position: "before",
                                },
                                {
                                    pattern: "..",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "parent",
                                    position: "before",
                                },
                                {
                                    pattern: "../",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "parent",
                                    position: "before",
                                },
                            ],
                        },
                    ],
                    ruleName: "import/order",
                },
            ],
        });
    });

    test("conversion with option import-sources-order as case-insensitive-legacy (with grouped-imports)", () => {
        const result = convertOrderedImports({
            ruleArguments: [
                {
                    "import-sources-order": "case-insensitive-legacy",
                    "grouped-imports": true,
                },
            ],
        });

        expect(result).toEqual({
            plugins: ["eslint-plugin-import"],
            rules: [
                {
                    ruleArguments: [
                        {
                            "newlines-between": "always",
                            alphabetize: {
                                caseInsensitive: true,
                                order: "asc",
                            },
                            groups: [
                                ["builtin", "external", "internal", "unknown", "object", "type"],
                                "parent",
                                ["sibling", "index"],
                            ],
                            pathGroupsExcludedImportTypes: [],
                            distinctGroup: false,
                            pathGroups: [
                                {
                                    pattern: "./",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "sibling",
                                    position: "before",
                                },

                                {
                                    pattern: ".",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "sibling",
                                    position: "before",
                                },
                                {
                                    pattern: "..",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "parent",
                                    position: "before",
                                },
                                {
                                    pattern: "../",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "parent",
                                    position: "before",
                                },
                            ],
                        },
                    ],
                    ruleName: "import/order",
                },
            ],
        });
    });

    test("conversion with option import-sources-order as lowercase-first (with grouped-imports)", () => {
        const result = convertOrderedImports({
            ruleArguments: [
                {
                    "import-sources-order": "lowercase-first",
                    "grouped-imports": true,
                },
            ],
        });

        expect(result).toEqual({
            plugins: ["eslint-plugin-import"],
            rules: [
                {
                    ruleArguments: [
                        {
                            "newlines-between": "always",
                            alphabetize: {
                                caseInsensitive: false,
                                order: "asc",
                            },
                            groups: [
                                ["builtin", "external", "internal", "unknown", "object", "type"],
                                "parent",
                                ["sibling", "index"],
                            ],
                            pathGroupsExcludedImportTypes: [],
                            distinctGroup: false,
                            pathGroups: [
                                {
                                    pattern: "./",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "sibling",
                                    position: "before",
                                },
                                {
                                    pattern: ".",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "sibling",
                                    position: "before",
                                },
                                {
                                    pattern: "..",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "parent",
                                    position: "before",
                                },
                                {
                                    pattern: "../",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "parent",
                                    position: "before",
                                },
                                {
                                    pattern: "[a-z]*",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "external",
                                    position: "before",
                                },
                                {
                                    pattern: "../[a-z]*",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "parent",
                                    position: "before",
                                },
                                {
                                    pattern: "./[a-z]*",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "sibling",
                                    position: "before",
                                },
                            ],
                        },
                    ],
                    ruleName: "import/order",
                },
            ],
        });
    });

    test("conversion with option import-sources-order as lowercase-last (with grouped-imports)", () => {
        const result = convertOrderedImports({
            ruleArguments: [
                {
                    "import-sources-order": "lowercase-last",
                    "grouped-imports": true,
                },
            ],
        });

        expect(result).toEqual({
            plugins: ["eslint-plugin-import"],
            rules: [
                {
                    ruleArguments: [
                        {
                            "newlines-between": "always",
                            alphabetize: {
                                caseInsensitive: false,
                                order: "asc",
                            },
                            groups: [
                                ["builtin", "external", "internal", "unknown", "object", "type"],
                                "parent",
                                ["sibling", "index"],
                            ],
                            pathGroupsExcludedImportTypes: [],
                            distinctGroup: false,
                            pathGroups: [
                                {
                                    pattern: "./",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "sibling",
                                    position: "before",
                                },
                                {
                                    pattern: ".",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "sibling",
                                    position: "before",
                                },
                                {
                                    pattern: "..",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "parent",
                                    position: "before",
                                },
                                {
                                    pattern: "../",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "parent",
                                    position: "before",
                                },
                            ],
                        },
                    ],
                    ruleName: "import/order",
                },
            ],
        });
    });

    test("conversion with option import-sources-order as any (with grouped-imports)", () => {
        const result = convertOrderedImports({
            ruleArguments: [
                {
                    "import-sources-order": "any",
                    "grouped-imports": true,
                },
            ],
        });

        expect(result).toEqual({
            plugins: ["eslint-plugin-import"],
            rules: [
                {
                    ruleArguments: [
                        {
                            "newlines-between": "always",
                            alphabetize: {
                                caseInsensitive: false,
                                order: "ignore",
                            },
                            groups: [
                                ["builtin", "external", "internal", "unknown", "object", "type"],
                                "parent",
                                ["sibling", "index"],
                            ],
                            pathGroupsExcludedImportTypes: [],
                            distinctGroup: false,
                            pathGroups: [
                                {
                                    pattern: "./",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "sibling",
                                    position: "before",
                                },
                                {
                                    pattern: ".",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "sibling",
                                    position: "before",
                                },
                                {
                                    pattern: "..",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "parent",
                                    position: "before",
                                },
                                {
                                    pattern: "../",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "parent",
                                    position: "before",
                                },
                            ],
                        },
                    ],
                    ruleName: "import/order",
                },
            ],
        });
    });

    test("conversion with grouped-imports as true", () => {
        const result = convertOrderedImports({
            ruleArguments: [
                {
                    "grouped-imports": true,
                },
            ],
        });

        expect(result).toEqual({
            plugins: ["eslint-plugin-import"],
            rules: [
                {
                    ruleArguments: [
                        {
                            "newlines-between": "always",
                            alphabetize: {
                                caseInsensitive: true,
                                order: "asc",
                            },
                            groups: [
                                ["builtin", "external", "internal", "unknown", "object", "type"],
                                "parent",
                                ["sibling", "index"],
                            ],
                            pathGroupsExcludedImportTypes: [],
                            distinctGroup: false,
                            pathGroups: [
                                {
                                    pattern: "./",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "sibling",
                                    position: "before",
                                },
                                {
                                    pattern: ".",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "sibling",
                                    position: "before",
                                },
                                {
                                    pattern: "..",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "parent",
                                    position: "before",
                                },
                                {
                                    pattern: "../",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "parent",
                                    position: "before",
                                },
                            ],
                        },
                    ],
                    ruleName: "import/order",
                },
            ],
        });
    });

    test("fails with option groups", () => {
        const result = convertOrderedImports({
            ruleArguments: [
                {
                    groups: [],
                },
            ],
        });

        expect(result).toEqual({
            plugins: ["eslint-plugin-import"],
            rules: [
                {
                    notices: [
                        "Option 'groups' is too bespoke to be converted to ESLint plugin 'eslint-plugin-import'",
                    ],
                    ruleArguments: [
                        {
                            "newlines-between": "ignore",
                            alphabetize: {
                                caseInsensitive: true,
                                order: "asc",
                            },
                            groups: [
                                ["builtin", "external", "internal", "unknown", "object", "type"],
                                "parent",
                                ["sibling", "index"],
                            ],
                            pathGroupsExcludedImportTypes: [],
                            distinctGroup: false,
                            pathGroups: [
                                {
                                    pattern: "./",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "sibling",
                                    position: "before",
                                },
                                {
                                    pattern: ".",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "sibling",
                                    position: "before",
                                },
                                {
                                    pattern: "..",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "parent",
                                    position: "before",
                                },
                                {
                                    pattern: "../",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "parent",
                                    position: "before",
                                },
                            ],
                        },
                    ],
                    ruleName: "import/order",
                },
            ],
        });
    });

    test("fails with option named-imports-order", () => {
        const result = convertOrderedImports({
            ruleArguments: [
                {
                    "named-imports-order": "any",
                },
            ],
        });

        expect(result).toEqual({
            plugins: ["eslint-plugin-import"],
            rules: [
                {
                    notices: [
                        "Option 'named-imports-order' is not supported by ESLint plugin 'eslint-plugin-import'",
                    ],
                    ruleArguments: [
                        {
                            "newlines-between": "ignore",
                            alphabetize: {
                                caseInsensitive: true,
                                order: "asc",
                            },
                            groups: [
                                ["builtin", "external", "internal", "unknown", "object", "type"],
                                "parent",
                                ["sibling", "index"],
                            ],
                            pathGroupsExcludedImportTypes: [],
                            distinctGroup: false,
                            pathGroups: [
                                {
                                    pattern: "./",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "sibling",
                                    position: "before",
                                },
                                {
                                    pattern: ".",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "sibling",
                                    position: "before",
                                },
                                {
                                    pattern: "..",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "parent",
                                    position: "before",
                                },
                                {
                                    pattern: "../",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "parent",
                                    position: "before",
                                },
                            ],
                        },
                    ],
                    ruleName: "import/order",
                },
            ],
        });
    });

    test("fails with option module-source-path as 'basename'", () => {
        const result = convertOrderedImports({
            ruleArguments: [
                {
                    "module-source-path": "basename",
                },
            ],
        });

        expect(result).toEqual({
            plugins: ["eslint-plugin-import"],
            rules: [
                {
                    notices: [
                        "Option 'module-source-path' with a value of 'basename' is not supported by ESLint plugin 'eslint-plugin-import'. The behavior will fallback to 'full'",
                    ],
                    ruleArguments: [
                        {
                            "newlines-between": "ignore",
                            alphabetize: {
                                caseInsensitive: true,
                                order: "asc",
                            },
                            groups: [
                                ["builtin", "external", "internal", "unknown", "object", "type"],
                                "parent",
                                ["sibling", "index"],
                            ],
                            pathGroupsExcludedImportTypes: [],
                            distinctGroup: false,
                            pathGroups: [
                                {
                                    pattern: "./",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "sibling",
                                    position: "before",
                                },
                                {
                                    pattern: ".",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "sibling",
                                    position: "before",
                                },
                                {
                                    pattern: "..",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "parent",
                                    position: "before",
                                },
                                {
                                    pattern: "../",
                                    patternOptions: {
                                        nocomment: true,
                                        dot: true,
                                    },
                                    group: "parent",
                                    position: "before",
                                },
                            ],
                        },
                    ],
                    ruleName: "import/order",
                },
            ],
        });
    });
});
