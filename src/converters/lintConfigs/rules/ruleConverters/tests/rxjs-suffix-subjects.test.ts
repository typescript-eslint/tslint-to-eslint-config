import { describe, expect, test } from "@jest/globals";

import { convertRxjsSuffixSubjects } from "../rxjs-suffix-subjects";

describe("convertRxjsSuffixSubjects", () => {
    test("conversion without arguments", () => {
        const result = convertRxjsSuffixSubjects({
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
        const result = convertRxjsSuffixSubjects({
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
        const result = convertRxjsSuffixSubjects({
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
        const result = convertRxjsSuffixSubjects({
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
        const result = convertRxjsSuffixSubjects({
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
