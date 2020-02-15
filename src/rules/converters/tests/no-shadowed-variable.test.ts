import {
    convertNoShadowedVariable,
    SELECTIVE_DISABLE_NOTICE,
    UNDERSCORE_DISABLE_NOTICE,
} from "../no-shadowed-variable";

describe(convertNoShadowedVariable, () => {
    test("conversion without parameter", () => {
        const result = convertNoShadowedVariable({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [{ hoist: "all" }],
                    ruleName: "no-shadow",
                },
            ],
        });
    });

    test("conversion with non-object parameter", () => {
        const result = convertNoShadowedVariable({
            ruleArguments: ["will-be-ignored"],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [{ hoist: "all" }],
                    ruleName: "no-shadow",
                },
            ],
        });
    });

    test("conversion with empty parameter object", () => {
        const result = convertNoShadowedVariable({
            ruleArguments: [{}],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [{ hoist: "all" }],
                    ruleName: "no-shadow",
                },
            ],
        });
    });

    test("conversion with disabled 'temporalDeadZone'", () => {
        const result = convertNoShadowedVariable({
            ruleArguments: [{ temporalDeadZone: false }],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [{ hoist: "never" }],
                    ruleName: "no-shadow",
                },
            ],
        });
    });

    test("conversion with disabled declaration types", () => {
        const result = convertNoShadowedVariable({
            ruleArguments: [{ class: false, underscore: false }],
        });

        expect(result).toEqual({
            rules: [
                {
                    notices: [UNDERSCORE_DISABLE_NOTICE, SELECTIVE_DISABLE_NOTICE],
                    ruleArguments: [{ hoist: "all" }],
                    ruleName: "no-shadow",
                },
            ],
        });
    });
});
