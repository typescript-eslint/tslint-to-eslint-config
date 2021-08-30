import { convertNoSubclass } from "../no-subclass";

describe(convertNoSubclass, () => {
    test("conversion without arguments", () => {
        const result = convertNoSubclass({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-subclass",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
