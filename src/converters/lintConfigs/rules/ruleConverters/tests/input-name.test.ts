import { convertInputName } from "../input-name";

describe(convertInputName, () => {
    test("conversion without arguments", () => {
        const result = convertInputName({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "output-name",
                },
            ],
        });
    });
        
    test("conversion with an argument", () => {
        const result = convertInputName({
            ruleArguments: ["TODO"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: ["TODO"],
                    ruleName: "output-name",
                },
            ],
        });
    });
        
});
