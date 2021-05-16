import { RuleConverter } from "../ruleConverter";

export const convertNoSubmoduleImports: RuleConverter = (tslintRule) => {
    const allow: string[] = [];

    if (
        tslintRule.ruleArguments.length !== 0 &&
        tslintRule.ruleArguments[0] !== false &&
        tslintRule.ruleArguments.length >= 2
    ) {
        allow.push(
            ...(tslintRule.ruleArguments as string[])
                .slice(1, tslintRule.ruleArguments.length)
                .map((ruleArg) => ruleArg.concat("/*")),
        );
    }

    return {
        rules: [
            {
                ruleName: "import/no-internal-modules",
                ...(allow.length !== 0 && { ruleArguments: [{ allow }] }),
            },
        ],
        plugins: ["eslint-plugin-import"],
    };
};
