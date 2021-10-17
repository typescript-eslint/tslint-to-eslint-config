import { convertPreferInlineDecorator } from "../prefer-inline-decorator";

describe(convertPreferInlineDecorator, () => {
    test("conversion without arguments", () => {
        const result = convertPreferInlineDecorator({
            ruleArguments: [],
        });

        expect(result).toEqual({});
    });
});
