import { RuleConverter } from "../converter";

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
        let underscoreDangleOptionSeverity: string | null = null;
        const underscoreDangleOptionNotice: string[] = [];

        if (hasCheckFormat && (allowedLeadingUnderscore || allowedTrailingUnderscore)) {
            underscoreDangleOptionSeverity = "off";
            underscoreDangleOptionNotice.push(IgnoreLeadingTrailingIdentifierMsg);
        } else {
            underscoreDangleOptionNotice.push(ForbiddenLeadingTrailingIdentifierMsg);
        }

        return {
            notices: underscoreDangleOptionNotice,
            ...(underscoreDangleOptionSeverity !== null && {
                ruleSeverity: underscoreDangleOptionSeverity,
            }),
            ruleName: "no-underscore-dangle",
        };
    };

    const getBlackListRuleOptions = () => {
        const blackListOptionArguments = tslintRule.ruleArguments.includes("ban-keywords")
            ? [
                  "any",
                  "Number",
                  "number",
                  "String",
                  "string",
                  "Boolean",
                  "boolean",
                  "Undefined",
                  "undefined",
              ]
            : [];

        return {
            ...(blackListOptionArguments.length !== 0 && {
                ruleArguments: blackListOptionArguments,
            }),
            ruleName: "id-blacklist",
        };
    };

    return {
        rules: [
            getCamelCaseRuleOptions(),
            getUnderscoreDangleRuleOptions(),
            getBlackListRuleOptions(),
            {
                ruleName: "id-match",
            },
        ],
    };
};
