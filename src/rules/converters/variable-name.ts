import { RuleConverter } from "../converter";

export const convertVariableName: RuleConverter = tslintRule => {
    const getCamelCaseRuleOptions = () => {
        const camelCaseOptionNotice: string[] = [];
        if (tslintRule.ruleArguments.includes("check-format")) {
            if (
                !tslintRule.ruleArguments.includes("allow-leading-underscore") &&
                !tslintRule.ruleArguments.includes("allow-trailing-underscore")
            ) {
                camelCaseOptionNotice.push(
                    "Leading and trailing underscores (_) in variable names will now be ignored.",
                );
            } else if (
                tslintRule.ruleArguments.includes("allow-leading-underscore") &&
                !tslintRule.ruleArguments.includes("allow-trailing-underscore")
            ) {
                camelCaseOptionNotice.push(
                    "Leading undescores in variable names will now be ignored.",
                );
            } else if (
                !tslintRule.ruleArguments.includes("allow-leading-underscore") &&
                tslintRule.ruleArguments.includes("allow-trailing-underscore")
            ) {
                camelCaseOptionNotice.push(
                    "Trailing undescores in variable names will now be ignored.",
                );
            }
        } else {
            camelCaseOptionNotice.push(
                "Leading and trailing underscores (_) in variable names will now be ignored.",
            );
        }

        if (tslintRule.ruleArguments.includes("require-const-for-all-caps")) {
            camelCaseOptionNotice.push(
                "ESLint's camel-case will throw a warning if const name is not uppercase.",
            );
        }

        if (
            tslintRule.ruleArguments.includes("allow-pascal-case") ||
            tslintRule.ruleArguments.includes("allow-snake-case")
        ) {
            camelCaseOptionNotice.push(
                "ESLint's camel-case rule does not allow pascal or snake case variable names. Those cases are reserved for class names and static methods.",
            );
        }

        return {
            notices: camelCaseOptionNotice,
        };
    };

    const getUnderscoreDangleRuleOptions = () => {
        const underscoreDangleOptionArguments: string[] = [];
        const underscoreDangleOptionNotice: string[] = [];

        if (
            tslintRule.ruleArguments.includes("check-format") &&
            (tslintRule.ruleArguments.includes("allow-leading-underscore") ||
                tslintRule.ruleArguments.includes("allow-trailing-underscore"))
        ) {
            underscoreDangleOptionArguments.push("off");
            underscoreDangleOptionNotice.push(
                "Leading and trailing underscores (_) on identifiers will now be ignored.",
            );
        } else {
            underscoreDangleOptionNotice.push(
                "Leading or trailing underscores (_) on identifiers will now be forbidden.",
            );
        }

        return {
            ruleArguments: underscoreDangleOptionArguments,
            notices: underscoreDangleOptionNotice,
        };
    };

    const getBlackListRuleOptions = () => {
        const blackListOptionArguments: string[] = [];

        if (tslintRule.ruleArguments.includes("ban-keywords")) {
            blackListOptionArguments.push(
                "any",
                "Number",
                "number",
                "String",
                "string",
                "Boolean",
                "boolean",
                "Undefined",
                "undefined",
            );
        }

        return {
            ruleArguments: blackListOptionArguments,
        };
    };

    return {
        rules: [
            {
                ruleName: "camelcase",
                ...getCamelCaseRuleOptions(),
            },
            {
                ruleName: "no-underscore-dangle",
                ...getUnderscoreDangleRuleOptions(),
            },
            {
                ruleName: "id-blacklist",
                ...getBlackListRuleOptions(),
            },
            {
                ruleName: "id-match",
            },
        ],
    };
};
