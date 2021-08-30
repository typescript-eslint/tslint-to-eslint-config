import { convertNoConnectable } from "../no-connectable";

describe(convertNoConnectable, () => {
    test("conversion without arguments", () => {
        const result = convertNoConnectable({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-connectable",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
