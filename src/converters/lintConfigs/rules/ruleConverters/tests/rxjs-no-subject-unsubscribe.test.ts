import { describe, expect, test } from "@jest/globals";

import { convertRxjsNoSubjectUnubscribe } from "../rxjs-no-subject-unsubscribe.js";

describe("convertRxjsNoSubjectUnubscribe", () => {
    test("conversion without arguments", () => {
        const result = convertRxjsNoSubjectUnubscribe({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-subject-unsubscribe",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
