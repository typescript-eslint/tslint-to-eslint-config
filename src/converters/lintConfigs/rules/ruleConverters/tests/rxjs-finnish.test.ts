import { convertRxjsFinnish } from "../rxjs-finnish";

describe(convertRxjsFinnish, () => {
    test("conversion without arguments", () => {
        const result = convertRxjsFinnish({
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
        const result = convertRxjsFinnish({
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
        const result = convertRxjsFinnish({
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
        const result = convertRxjsFinnish({
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
        const result = convertRxjsFinnish({
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
        const result = convertRxjsFinnish({
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
