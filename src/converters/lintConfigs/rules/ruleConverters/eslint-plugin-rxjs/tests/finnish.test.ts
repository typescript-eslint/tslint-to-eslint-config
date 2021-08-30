import { convertFinnish } from "../finnish";

describe(convertFinnish, () => {
    test("conversion without arguments", () => {
        const result = convertFinnish({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/finnish",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });

    test("conversion with `functions` argument", () => {
        const result = convertFinnish({
            ruleArguments: [{ functions: true }],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/finnish",
                    ruleArguments: [{ functions: true }],
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });

    test("conversion with `methods` argument", () => {
        const result = convertFinnish({
            ruleArguments: [{ methods: false }],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/finnish",
                    ruleArguments: [{ methods: false }],
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });

    test("conversion with `parameters` argument", () => {
        const result = convertFinnish({
            ruleArguments: [{ parameters: true }],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/finnish",
                    ruleArguments: [{ parameters: true }],
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });

    test("conversion with `properties` argument", () => {
        const result = convertFinnish({
            ruleArguments: [{ properties: false }],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/finnish",
                    ruleArguments: [{ properties: false }],
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });

    test("conversion with `variables` argument", () => {
        const result = convertFinnish({
            ruleArguments: [{ variables: true }],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/finnish",
                    ruleArguments: [{ variables: true }],
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
