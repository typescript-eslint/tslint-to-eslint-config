import { RuleConverter } from "../ruleConverter";

const SUPPORTED_OPTIONS: string[] = ["anonymous", "asyncArrow", "named"];

type ObjectArgument = Record<string, "always" | "never">;

const isObjectArgument = (argument: unknown): argument is ObjectArgument =>
    typeof argument === "object" && argument !== null;

export const convertSpaceBeforeFunctionParen: RuleConverter = (tslintRule) => {
    const argument: unknown = tslintRule.ruleArguments[0];
    const ruleName = "space-before-function-paren";
    if (argument === "always" || argument === "never") {
        return { rules: [{ ruleArguments: [argument], ruleName }] };
    }
    if (isObjectArgument(argument)) {
        const notices = Object.keys(argument)
            .filter((option) => !SUPPORTED_OPTIONS.includes(option))
            .map((option) => `Option "${option}" is not supported by ESLint.`);
        const filtered = Object.keys(argument)
            .filter((option) => SUPPORTED_OPTIONS.includes(option))
            .reduce<ObjectArgument>((obj, option) => {
                return { ...obj, [option]: argument[option] };
            }, {});
        return {
            rules: [
                {
                    ...(notices.length !== 0 && { notices }),
                    ...(Object.keys(filtered).length !== 0 && {
                        ruleArguments: [filtered],
                    }),
                    ruleName,
                },
            ],
        };
    }
    return { rules: [{ ruleName }] };
};
