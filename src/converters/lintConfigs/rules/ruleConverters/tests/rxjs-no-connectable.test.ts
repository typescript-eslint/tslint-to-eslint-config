import { convertRxjsNoConnectable } from "../rxjs-no-connectable";

describe(convertRxjsNoConnectable, () => {
    test("conversion without arguments", () => {
        const result = convertRxjsNoConnectable({
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
