import { convertNoExposedSubjects } from "../no-exposed-subjects";

describe(convertNoExposedSubjects, () => {
    test("conversion without arguments", () => {
        const result = convertNoExposedSubjects({
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
        const result = convertNoExposedSubjects({
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
