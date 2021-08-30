import { convertNoUnsafeSwitchmap } from "../no-unsafe-switchmap";

describe(convertNoUnsafeSwitchmap, () => {
    test("conversion without arguments", () => {
        const result = convertNoUnsafeSwitchmap({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-unsafe-switchmap",
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });

    test("conversion with `disallow` argument", () => {
        const result = convertNoUnsafeSwitchmap({
            ruleArguments: [
                { disallow: ["add", "create", "delete", "post", "put", "remove", "set", "update"] },
            ],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-unsafe-switchmap",
                    ruleArguments: [
                        {
                            disallow: [
                                "add",
                                "create",
                                "delete",
                                "post",
                                "put",
                                "remove",
                                "set",
                                "update",
                            ],
                        },
                    ],
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });

    test("conversion with `observable` argument", () => {
        const result = convertNoUnsafeSwitchmap({
            ruleArguments: [{ observable: "action(s|\\$)?" }],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "rxjs/no-unsafe-switchmap",
                    ruleArguments: [{ observable: "action(s|\\$)?" }],
                },
            ],
            plugins: ["eslint-plugin-rxjs"],
        });
    });
});
