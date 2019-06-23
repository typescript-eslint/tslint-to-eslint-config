import { convertUnnecessaryBind } from "../unnecessary-bind";

describe(convertUnnecessaryBind, () => {
    test("conversion without arguments", () => {
        const result = convertUnnecessaryBind({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "no-extra-bind",
                },
            ],
        });
    });
});
