import { convertNoTap } from "../no-tap";

describe(convertNoTap, () => {
    test("conversion without arguments", () => {
        const result = convertNoTap({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-tap",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
