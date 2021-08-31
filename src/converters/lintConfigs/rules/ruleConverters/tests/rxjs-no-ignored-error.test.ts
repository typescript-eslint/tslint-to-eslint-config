import { convertNoIgnoredError } from "../no-ignored-error";

describe(convertNoIgnoredError, () => {
    test("conversion without arguments", () => {
        const result = convertNoIgnoredError({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-ignored-error",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
