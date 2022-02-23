import { describe, expect, test } from "@jest/globals";

import { convertJsxSelfClose } from "../jsx-self-close";

describe("convertJsxSelfClose", () => {
    test("conversion without arguments", () => {
        const result = convertJsxSelfClose({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "react/self-closing-comp",
                },
            ],
            plugins: ["eslint-plugin-react"],
        });
    });
});
