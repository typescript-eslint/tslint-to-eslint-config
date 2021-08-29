import { convertNoToPromise } from "../no-topromise";

describe(convertNoToPromise, () => {
    test("conversion without arguments", () => {
        const result = convertNoToPromise({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-topromise",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
