import { describe, expect, test } from "@jest/globals";

import { convertNonLiteralFsPath } from "../non-literal-fs-path.js";

describe("convertNonLiteralFsPath", () => {
    test("conversion without arguments", () => {
        const result = convertNonLiteralFsPath({
            ruleArguments: [],
        });

        expect(result).toEqual({
            plugins: ["eslint-plugin-security"],
            rules: [
                {
                    ruleName: "security/detect-non-literal-fs-filename",
                },
            ],
        });
    });
});
