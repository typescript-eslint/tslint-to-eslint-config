import { convertPreferObserver } from "../prefer-observer";

describe(convertPreferObserver, () => {
    test("conversion without arguments", () => {
        const result = convertPreferObserver({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/prefer-observer",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });

    test("conversion with `allowNext` argument", () => {
        const result = convertPreferObserver({
            ruleArguments: [{ allowNext: false }],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/prefer-observer",
                    ruleArguments: [{ allowNext: false }],
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
