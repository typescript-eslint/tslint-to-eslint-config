import { convertThrowError } from "../throw-error";

describe(convertThrowError, () => {
    test("conversion without arguments", () => {
        const result = convertThrowError({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/throw-error",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
