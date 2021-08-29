import { convertJust } from "../just";

describe(convertJust, () => {
    test("conversion without arguments", () => {
        const result = convertJust({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/just",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
