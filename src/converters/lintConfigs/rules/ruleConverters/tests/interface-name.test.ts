import { convertInterfaceName } from "../interface-name";

describe(convertInterfaceName, () => {
    test("conversion without arguments", () => {
        const result = convertInterfaceName({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/naming-convention",
                },
            ],
        });
    });

    test("conversion with 'always-prefix' argument", () => {
        const result = convertInterfaceName({
            ruleArguments: ["always-prefix"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/naming-convention",
                    rules: [
                        {
                            selector: "interface",
                            format: ["PascalCase"],
                            custom: {
                                regex: "^I[A-Z]",
                                match: true,
                            },
                        },
                    ],
                },
            ],
        });
    });

    test("conversion with 'never-prefix' argument", () => {
        const result = convertInterfaceName({
            ruleArguments: ["never-prefix"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/naming-convention",
                    rules: [
                        {
                            selector: "interface",
                            format: ["PascalCase"],
                            custom: {
                                regex: "^I[A-Z]",
                                match: false,
                            },
                        },
                    ],
                },
            ],
        });
    });
});
