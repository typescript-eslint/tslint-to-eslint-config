import { RuleConverter } from "../ruleConverter";
import { ESLintRuleSeverity } from "../types";

export const ConstRequiredForAllCapsMsg =
    "typescript-eslint does not enforce uppercase for const only.";
export const IgnoreLeadingTrailingIdentifierMsg =
    "Leading and trailing underscores (_) on identifiers will now be ignored.";
export const ForbiddenLeadingTrailingIdentifierMsg =
    "Leading or trailing underscores (_) on identifiers will now be forbidden.";

export const convertVariableName: RuleConverter = (tslintRule) => {
    const hasCheckFormat = tslintRule.ruleArguments.includes("check-format");
    const allowedLeadingUnderscore = tslintRule.ruleArguments.includes("allow-leading-underscore");
    const allowedTrailingUnderscore = tslintRule.ruleArguments.includes(
        "allow-trailing-underscore",
    );
    const constRequiredForAllCaps = tslintRule.ruleArguments.includes("require-const-for-all-caps");
    const allowPascalCase = tslintRule.ruleArguments.includes("allow-pascal-case");
    const allowSnakeCase = tslintRule.ruleArguments.includes("allow-snake-case");
    /**
     * disallows the use of certain TypeScript keywords as variable or parameter names.
     * @see https://palantir.github.io/tslint/rules/variable-name/
     * @see https://github.com/palantir/tslint/blob/285fc1db18d1fd24680d6a2282c6445abf1566ee/src/rules/variableNameRule.ts#L26-L36
     */
    const banKeywords = [
        "any",
        "Number",
        "number",
        "String",
        "string",
        "Boolean",
        "boolean",
        "Undefined",
        "undefined",
    ];

    const getCamelCaseRuleOptions = () => {
        const camelCaseRules: Record<string, unknown>[] = [];
        const camelCaseOptionNotices: string[] = [];
        const formats = ["camelCase", "UPPER_CASE"];

        if (hasCheckFormat && allowPascalCase) {
            formats.push("PascalCase");
        }
        if (hasCheckFormat && allowSnakeCase) {
            formats.push("snake_case");
        }

        if (!hasCheckFormat) {
            camelCaseRules.push({
                selector: "variable",
                format: ["camelCase", "UPPER_CASE"],
                leadingUnderscore: "forbid",
                trailingUnderscore: "forbid",
            });
        } else {
            camelCaseRules.push({
                selector: "variable",
                format: ["camelCase", "UPPER_CASE"],
                leadingUnderscore: allowedLeadingUnderscore ? "allow" : "forbid",
                trailingUnderscore: allowedTrailingUnderscore ? "allow" : "forbid",
            });
        }

        if (hasCheckFormat && constRequiredForAllCaps) {
            camelCaseOptionNotices.push(ConstRequiredForAllCapsMsg);
        }

        return {
            ...(camelCaseOptionNotices.length !== 0 && { notices: camelCaseOptionNotices }),
            ...(camelCaseRules.length !== 0 && { rules: camelCaseRules }),
            ruleName: "@typescript-eslint/naming-convention",
        };
    };

    const getUnderscoreDangleRuleOptions = () => {
        let underscoreDangleOptionSeverity: ESLintRuleSeverity | undefined;
        const underscoreDangleOptionNotice: string[] = [];

        if (hasCheckFormat && (allowedLeadingUnderscore || allowedTrailingUnderscore)) {
            underscoreDangleOptionSeverity = "off";
            underscoreDangleOptionNotice.push(IgnoreLeadingTrailingIdentifierMsg);
        } else {
            underscoreDangleOptionNotice.push(ForbiddenLeadingTrailingIdentifierMsg);
        }

        return {
            notices: underscoreDangleOptionNotice,
            ...(underscoreDangleOptionSeverity !== undefined && {
                ruleSeverity: underscoreDangleOptionSeverity,
            }),
            ruleName: "no-underscore-dangle",
        };
    };

    const getDenyListRuleOptions = () => {
        const denyListOptionArguments = tslintRule.ruleArguments.includes("ban-keywords")
            ? banKeywords
            : [];

        return {
            ...(denyListOptionArguments.length !== 0 && {
                ruleArguments: denyListOptionArguments,
            }),
            ruleName: "id-denylist",
        };
    };

    return {
        rules: [
            getCamelCaseRuleOptions(),
            getUnderscoreDangleRuleOptions(),
            getDenyListRuleOptions(),
            {
                ruleName: "id-match",
            },
        ],
    };
};
