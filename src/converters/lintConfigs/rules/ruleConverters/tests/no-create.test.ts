import { convertNoCreate } from "../no-create";

describe(convertNoCreate, () => {
    test("conversion without arguments", () => {
        const result = convertNoCreate({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-create",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
