import { convertNoFinnish } from "../no-finnish";

describe(convertNoFinnish, () => {
    test("conversion without arguments", () => {
        const result = convertNoFinnish({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-finnish",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
