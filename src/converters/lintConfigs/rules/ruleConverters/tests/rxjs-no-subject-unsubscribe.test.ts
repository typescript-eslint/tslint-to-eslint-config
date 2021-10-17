import { convertRxjsNoSubjectUnubscribe } from "../rxjs-no-subject-unsubscribe";

describe(convertRxjsNoSubjectUnubscribe, () => {
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
