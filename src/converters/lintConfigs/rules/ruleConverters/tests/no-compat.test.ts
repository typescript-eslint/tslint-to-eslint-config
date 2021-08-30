import { convertNoCompat } from "../no-compat";

describe(convertNoCompat, () => {
    test("conversion without arguments", () => {
        const result = convertNoCompat({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-compat",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
