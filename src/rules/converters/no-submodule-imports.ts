import { RuleConverter } from "../converter";

export const convertNoSubmoduleImports: RuleConverter = tslintRule => {
    const ruleArguments: string[] = [];

    if (
        !(
            tslintRule.ruleArguments.length === 0 ||
            tslintRule.ruleArguments[0] === false ||
            tslintRule.ruleArguments.length < 2
        )
    ) {
        ruleArguments.push(...tslintRule.ruleArguments);
    }

    return {
        rules: [
            {
                ruleName: "import/no-internal-modules",
                ...{
                    ruleArguments:
                        ruleArguments.length > 0 ? [{ allow: ruleArguments }] : undefined,
                },
            },
        ],
        plugins: ["eslint-plugin-import"],
    };
};
