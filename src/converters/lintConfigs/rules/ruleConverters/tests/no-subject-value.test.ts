import { convertNoSubjectValue } from "../no-subject-value";

describe(convertNoSubjectValue, () => {
    test("conversion without arguments", () => {
        const result = convertNoSubjectValue({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-subject-value",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
