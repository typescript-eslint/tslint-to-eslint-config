import { convertNoUnsafeSubjectNext } from "../no-unsafe-subject-next";

describe(convertNoUnsafeSubjectNext, () => {
    test("conversion without arguments", () => {
        const result = convertNoUnsafeSubjectNext({
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
