import { RuleConverter } from "../converter";

export const convertVariableName: RuleConverter = tslintRule => {
    const getCamelCaseRuleOptions = () => {
        const camelCaseOptionNotice: string[] = [];
        camelCaseOptionNotice.push(
            "By default, this rule looks for any underscores (_) located within the source code. It ignores leading and trailing underscores and only checks those in the middle of a variable name.",
        );

        if (
            tslintRule.ruleArguments.length !== 0 &&
            tslintRule.ruleArguments.includes("require-const-for-all-caps")
        ) {
            camelCaseOptionNotice.push(
                'The argument "require-const-for-all-caps" is not needed as ESlint will decide if a variable is a constant (all uppercase). If not, a warning will be thrown.',
            );
        }

        if (
            tslintRule.ruleArguments.length !== 0 &&
            (tslintRule.ruleArguments.includes("allow-pascal-case") ||
                tslintRule.ruleArguments.includes("allow-snake-case"))
        ) {
            camelCaseOptionNotice.push(
                "This rule does not allow pascal neither snake case to variable names. Those are reserved for class names and static methods.",
            );
        }

        return {
            arguments: [],
            notices: camelCaseOptionNotice,
        };
    };

    const getUnderscoreDangleRuleOptions = () => {
        const underscoreDangleOptionArguments: string[] = [];
        const underscoreDangleOptionNotice: string[] = [];
        underscoreDangleOptionNotice.push(
            'By default, "no-underscore-dangle" will disallows dangling underscores in identifiers.',
        );

        if (
            tslintRule.ruleArguments.length !== 0 &&
            tslintRule.ruleArguments.includes("check-format") &&
            (tslintRule.ruleArguments.includes("allow-leading-underscore") ||
                tslintRule.ruleArguments.includes("allow-trailing-underscore"))
        ) {
            underscoreDangleOptionArguments.push("off");
            underscoreDangleOptionNotice.push(
                'If either "allow-leading-underscore" or "allow-trailing-underscore" are provided, "no-underscore-dangle" will be turned off.',
            );
        }

        return {
            arguments: underscoreDangleOptionArguments,
            notices: underscoreDangleOptionNotice,
        };
    };

    const getBlackListRuleOptions = () => {
        const blackListOptionArguments: string[] = [];
        const blackListOptionNotice: string[] = [];

        if (
            tslintRule.ruleArguments.length !== 0 &&
            tslintRule.ruleArguments.includes("ban-keywords")
        ) {
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
            blackListOptionNotice.push(
                'If "ban-keywords" was provided, ESLint has to disallows the use of certain TypeScript keywords by using "id-blacklist" rule.',
            );
        }

        return {
            arguments: blackListOptionArguments,
            notices: blackListOptionNotice,
        };
    };

    const camelCaseOptions = getCamelCaseRuleOptions();
    const underscoreDangleOptions = getUnderscoreDangleRuleOptions();
    const idblackListOptions = getBlackListRuleOptions();

    return {
        rules: [
            {
                ruleName: "camelcase",
                ruleArguments: camelCaseOptions.arguments,
                notices: camelCaseOptions.notices,
            },
            {
                ruleName: "no-underscore-dangle",
                ruleArguments: underscoreDangleOptions.arguments,
                notices: underscoreDangleOptions.notices,
            },
            {
                ruleName: "id-blacklist",
                ruleArguments: idblackListOptions.arguments,
                notices: idblackListOptions.notices,
            },
            {
                ruleName: "id-match",
            },
        ],
    };
};
