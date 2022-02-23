import { describe, expect, test } from "@jest/globals";

import { convertMaxClassesPerFile } from "../max-classes-per-file";

describe("convertMaxClassesPerFile", () => {
    test("conversion without arguments", () => {
        const result = convertMaxClassesPerFile({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "max-classes-per-file",
                },
            ],
        });
    });

    test("conversion with a maximum", () => {
        const result = convertMaxClassesPerFile({
            ruleArguments: [2],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [2],
                    ruleName: "max-classes-per-file",
                },
            ],
        });
    });

    test("conversion with a maximum and exclude-class-expressions", () => {
        const result = convertMaxClassesPerFile({
            ruleArguments: [2, "exclude-class-expressions"],
        });

        expect(result).toEqual({
            rules: [
                {
                    notices: ["Class expressions will no longer be ignored."],
                    ruleArguments: [2],
                    ruleName: "max-classes-per-file",
                },
            ],
        });
    });
});
