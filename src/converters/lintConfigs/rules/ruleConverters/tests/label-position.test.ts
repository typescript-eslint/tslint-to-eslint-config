import { convertLabelPosition } from "../label-position";

describe(convertLabelPosition, () => {
    test("conversion without arguments", () => {
        const result = convertLabelPosition({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-unused-labels",
                },
            ],
        });
    });
});
