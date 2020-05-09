import { convertDirectiveSelector } from "../directive-selector";

describe(convertDirectiveSelector, () => {
    test("conversion with arguments of same type", () => {
        const result = convertDirectiveSelector({
            ruleArguments: ["attribute", "myPrefix", "camelCase"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [
                        {
                            type: "attribute",
                            prefix: "myPrefix",
                            style: "camelCase",
                        },
                    ],
                    ruleName: "@angular-eslint/directive-selector",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin"],
        });
    });

    test("conversion with arguments of mixed type", () => {
        const result = convertDirectiveSelector({
            ruleArguments: ["element", ["ng", "ngx"], "kebab-case"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [
                        {
                            type: "element",
                            prefix: ["ng", "ngx"],
                            style: "kebab-case",
                        },
                    ],
                    ruleName: "@angular-eslint/directive-selector",
                },
            ],
            plugins: ["@angular-eslint/eslint-plugin"],
        });
    });
});
