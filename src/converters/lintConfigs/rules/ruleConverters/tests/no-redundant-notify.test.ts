import { convertNoRedundantNotify } from "../no-redundant-notify";

describe(convertNoRedundantNotify, () => {
    test("conversion without arguments", () => {
        const result = convertNoRedundantNotify({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-redundant-notify",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
