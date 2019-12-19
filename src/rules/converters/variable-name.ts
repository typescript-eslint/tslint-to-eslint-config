import { RuleConverter } from "../converter";

export const IgnoreLeadingTrailingUnderscoreMsg =
    "Leading and trailing underscores (_) in variable names will now be ignored.";
export const IgnoreOnlyLeadingUnderscoreMsg =
    "Leading undescores in variable names will now be ignored.";
export const IgnoreOnlyTrailingUnderscoreMsg =
    "Trailing undescores in variable names will now be ignored.";
export const ConstRequiredForAllCapsMsg =
    "ESLint's camel-case will throw a warning if const name is not uppercase.";
export const ForbiddenPascalSnakeMsg =
    "ESLint's camel-case rule does not allow pascal or snake case variable names. Those cases are reserved for class names and static methods.";
export const IgnoreLeadingTrailingIdentifierMsg =
    "Leading and trailing underscores (_) on identifiers will now be ignored.";
export const ForbiddenLeadingTrailingIdentifierMsg =
    "Leading or trailing underscores (_) on identifiers will now be forbidden.";

export const convertVariableName: RuleConverter = tslintRule => {
    const hasCheckFormat = tslintRule.ruleArguments.includes("check-format");
    const allowedLeadingUnderscore = tslintRule.ruleArguments.includes("allow-leading-underscore");
    const allowedTrailingUnderscore = tslintRule.ruleArguments.includes(
        "allow-trailing-underscore",
    );
    const constRequiredForAllCaps = tslintRule.ruleArguments.includes("require-const-for-all-caps");
    const allowPascalSnakeCase =
        tslintRule.ruleArguments.includes("allow-pascal-case") ||
        tslintRule.ruleArguments.includes("allow-snake-case");

    const getCamelCaseRuleOptions = () => {
        const camelCaseOptionNotice: string[] = [];

        if (hasCheckFormat) {
            if (!allowedLeadingUnderscore && !allowedTrailingUnderscore) {
                camelCaseOptionNotice.push(IgnoreLeadingTrailingUnderscoreMsg);
            } else if (allowedLeadingUnderscore && !allowedTrailingUnderscore) {
                camelCaseOptionNotice.push(IgnoreOnlyLeadingUnderscoreMsg);
            } else if (!allowedLeadingUnderscore && allowedTrailingUnderscore) {
                camelCaseOptionNotice.push(IgnoreOnlyTrailingUnderscoreMsg);
            }
        } else {
            camelCaseOptionNotice.push(IgnoreLeadingTrailingUnderscoreMsg);
        }

        if (constRequiredForAllCaps) {
            camelCaseOptionNotice.push(ConstRequiredForAllCapsMsg);
        }

        if (allowPascalSnakeCase) {
            camelCaseOptionNotice.push(ForbiddenPascalSnakeMsg);
        }

        return {
            notices: camelCaseOptionNotice,
            ruleName: "camelcase",
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
