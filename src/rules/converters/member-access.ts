import { RuleConverter } from "../converter";

export enum AccessibilityLevel {
    Explicit = "explicit",
    NoPublic = "no-public",
}

export enum MemberAccessArguments {
    NoPublic = "no-public",
    Accessor = "check-accessor",
    Constructor = "check-constructor",
    ParameterProp = "check-parameter-property",
}

type MemberAccessSchema = {
    accessibility: string;
    overrides?: Record<string, string>;
};

export const convertMemberAccess: RuleConverter = tslintRule => {
    const schema: MemberAccessSchema = {
        accessibility: AccessibilityLevel.Explicit,
    };

    if (tslintRule.ruleArguments.length >= 2 || tslintRule.ruleArguments[0] === true) {
        for (const ruleArg of tslintRule.ruleArguments) {
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
                }
            }
        }
    }

    return {
        rules: [
            {
                ruleArguments: [schema],
                ruleName: "@typescript-eslint/explicit-member-accessibility",
            },
        ],
    };
};
