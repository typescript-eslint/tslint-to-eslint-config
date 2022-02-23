import { describe, expect, test } from "@jest/globals";

import { convertUsePrimitiveType } from "../use-primitive-type";

describe("convertUsePrimitiveType", () => {
    test("conversion without arguments", () => {
        const result = convertUsePrimitiveType({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-new-wrappers",
                },
                {
                    ruleArguments: [
                        {
                            types: {
                                String: {
                                    message: "Use string instead",
                                    fixWith: "string",
                                },
                                Boolean: {
                                    message: "Use boolean instead",
                                    fixWith: "boolean",
                                },
                                Number: {
                                    message: "Use number instead",
                                    fixWith: "number",
                                },
                            },
                        },
                    ],
                    ruleName: "@typescript-eslint/ban-types",
                },
            ],
        });
    });
});
