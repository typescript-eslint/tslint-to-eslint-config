import { describe, expect, test } from "@jest/globals";

import { convertOrderedImports } from "../ordered-imports.js";

describe("convertOrderedImports", () => {
    test("conversion without arguments", () => {
        const result = convertOrderedImports({
            ruleArguments: [],
        });

        expect(result).toEqual({
            plugins: ["eslint-plugin-import"],
            rules: [
                {
                    ruleName: "import/order",
                },
            ],
        });
    });

    test("conversion with allow-declarations argument", () => {
        const result = convertOrderedImports({
            ruleArguments: ["import-sources-order"],
        });

        expect(result).toEqual({
            plugins: ["eslint-plugin-import"],
            rules: [
                {
                    notices: ['Option "import-sources-order" is not supported by ESLint.'],
                    ruleName: "import/order",
                },
            ],
        });
    });

    test("conversion with allow-declarations argument", () => {
        const result = convertOrderedImports({
            ruleArguments: ["named-imports-order"],
        });

        expect(result).toEqual({
            plugins: ["eslint-plugin-import"],
            rules: [
                {
                    notices: ['Option "named-imports-order" is not supported by ESLint.'],
                    ruleName: "import/order",
                },
            ],
        });
    });

    test("conversion with unsupported arguments", () => {
        const result = convertOrderedImports({
            ruleArguments: ["import-sources-order", "named-imports-order", "module-source-path"],
        });

        expect(result).toEqual({
            plugins: ["eslint-plugin-import"],
            rules: [
                {
                    notices: [
                        'Option "import-sources-order" is not supported by ESLint.',
                        'Option "module-source-path" is not supported by ESLint.',
                        'Option "named-imports-order" is not supported by ESLint.',
                    ],
                    ruleName: "import/order",
                },
            ],
        });
    });
});
