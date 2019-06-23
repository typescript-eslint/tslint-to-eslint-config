import { convertInterfaceName } from "../interface-name";

describe(convertInterfaceName, () => {
    test("conversion without arguments", () => {
        const result = convertInterfaceName({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/interface-name-prefix",
                },
            ],
        });
    });
});
