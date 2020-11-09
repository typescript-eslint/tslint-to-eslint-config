import { convertNoSubjectUnubscribe } from "../no-subject-unsubscribe";

describe(convertNoSubjectUnubscribe, () => {
    test("conversion without arguments", () => {
        const result = convertNoSubjectUnubscribe({
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
