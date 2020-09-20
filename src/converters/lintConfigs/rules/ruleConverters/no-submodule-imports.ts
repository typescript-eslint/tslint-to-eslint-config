import { RuleConverter } from "../ruleConverter";

export const convertNoSubmoduleImports: RuleConverter = (tslintRule) => {
    const allow: string[] = [];

    if (
        tslintRule.ruleArguments.length !== 0 &&
        tslintRule.ruleArguments[0] !== false &&
        tslintRule.ruleArguments.length >= 2
    ) {
        allow.push(
            ...tslintRule.ruleArguments.map((ruleArg) => {
                return typeof ruleArg === "string" ? ruleArg.concat("/*") : ruleArg;
            }),
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
