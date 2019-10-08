import { RuleConverter } from "../converter";

export enum AccessibilityLevel {
    Explicit = "explicit", // require an accessor (including public)
    NoPublic = "no-public", // don't require public
    Off = "off", // don't check
}

export enum MemberAccessArguments {
    NoPublic = "no-public",
    Accessor = "check-accessor",
    Constructor = "check-constructor",
    ParameterProp = "check-parameter-property",
}

export const convertMemberAccess: RuleConverter = tslintRule => {
    const schema: any = {
        accessibility: AccessibilityLevel.Explicit,
    };

    if (
        !(
            tslintRule.ruleArguments.length === 0 ||
            tslintRule.ruleArguments[0] === false ||
            tslintRule.ruleArguments.length < 2
        )
    ) {
        tslintRule.ruleArguments.map(ruleArg => {
            if (typeof ruleArg === "string") {
                switch (ruleArg) {
                    case MemberAccessArguments.NoPublic:
                        schema.accessibility = AccessibilityLevel.NoPublic;
                        break;
                    case MemberAccessArguments.Accessor:
                        schema.overrides = {
                            ...schema.overrides,
                            accessors: AccessibilityLevel.Explicit,
                        };
                        break;
                    case MemberAccessArguments.Constructor:
                        schema.overrides = {
                            ...schema.overrides,
                            constructors: AccessibilityLevel.Explicit,
                        };
                        break;
                    case MemberAccessArguments.ParameterProp:
                        schema.overrides = {
                            ...schema.overrides,
                            parameterProperties: AccessibilityLevel.Explicit,
                        };
                        break;
                    default:
                        break;
                }
            }
            return ruleArg;
        });
    }

    return {
        rules: [
            {
                ruleName: "@typescript-eslint/explicit-member-accessibility",
                ruleArguments: [schema],
            },
        ],
    };
};
