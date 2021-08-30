import { convertSuffixSubjects } from "../suffix-subjects";

describe(convertSuffixSubjects, () => {
    test("conversion without arguments", () => {
        const result = convertSuffixSubjects({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/suffix-subjects",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });

    test("conversion with `parameters` argument", () => {
        const result = convertSuffixSubjects({
            ruleArguments: [{ parameters: true }],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/suffix-subjects",
                    ruleArguments: [{ parameters: true }],
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });

    test("conversion with `properties` argument", () => {
        const result = convertSuffixSubjects({
            ruleArguments: [{ properties: false }],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/suffix-subjects",
                    ruleArguments: [{ properties: false }],
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });

    test("conversion with `suffix` argument", () => {
        const result = convertSuffixSubjects({
            ruleArguments: [{ suffix: true }],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/suffix-subjects",
                    ruleArguments: [{ suffix: true }],
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });

    test("conversion with `variables` argument", () => {
        const result = convertSuffixSubjects({
            ruleArguments: [{ variables: false }],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/suffix-subjects",
                    ruleArguments: [{ variables: false }],
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
