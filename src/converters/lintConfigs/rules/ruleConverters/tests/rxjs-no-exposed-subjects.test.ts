import { describe, expect, test } from "@jest/globals";

import { convertRxjsNoExposedSubjects } from "../rxjs-no-exposed-subjects";

describe("convertRxjsNoExposedSubjects", () => {
    test("conversion without arguments", () => {
        const result = convertRxjsNoExposedSubjects({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-exposed-subjects",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });

    test("conversion with allowProtected argument", () => {
        const result = convertRxjsNoExposedSubjects({
            ruleArguments: [{ allowProtected: true }],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-exposed-subjects",
                    ruleArguments: [{ allowProtected: true }],
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
