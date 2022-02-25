import { describe, expect, test } from "@jest/globals";

import { convertJsxNoLambda } from "../jsx-no-lambda.js";

describe("convertJsxNoLambda", () => {
    test("conversion without arguments", () => {
        const result = convertJsxNoLambda({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    notices: ["ESLint rule 'jsx-no-bind' also checks for Function.bind"],
                    ruleName: "react/jsx-no-bind",
                },
            ],
            plugins: ["eslint-plugin-react"],
        });
    });
});
