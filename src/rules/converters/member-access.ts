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

interface IMemberAccessSchema {
    accessibility: string;
    overrides?: { [key: string]: string };
}

export const convertMemberAccess: RuleConverter = tslintRule => {
    const tslintRuleArguments = tslintRule.ruleArguments;
    const schema: IMemberAccessSchema = {
        accessibility: AccessibilityLevel.Explicit,
    };

    if (tslintRuleArguments.length >= 2 || tslintRuleArguments[0] !== false) {
        tslintRuleArguments.forEach(ruleArg => {
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
