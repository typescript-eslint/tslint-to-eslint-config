import { convertRxjsNoUnsafeSubjectNext } from "../rxjs-no-unsafe-subject-next";

describe(convertRxjsNoUnsafeSubjectNext, () => {
    test("conversion without arguments", () => {
        const result = convertRxjsNoUnsafeSubjectNext({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-unsafe-subject-next",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
