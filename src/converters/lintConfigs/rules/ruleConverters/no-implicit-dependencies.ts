import { RuleConverter } from "../ruleConverter";

type ExtraneousDependenciesArgument = Partial<
    Record<"devDependencies" | "optionalDependencies", boolean>
>;

export const convertNoImplicitDependencies: RuleConverter = (tslintRule) => {
    const ruleArguments: ExtraneousDependenciesArgument[] = [];
    const notices: string[] = [];

    for (const element of tslintRule.ruleArguments) {
        if (element === "dev") {
            ruleArguments.push({ devDependencies: false });
        } else if (element === "optional") {
            ruleArguments.push({ optionalDependencies: false });
        } else {
            notices.push("ESLint does not support whitelisting modules");
        }
    }

    return {
        rules: [
            {
                ...(notices.length !== 0 && { notices }),
                ...(ruleArguments.length !== 0 && { ruleArguments }),
                ruleName: "import/no-extraneous-dependencies",
            },
        ],

        plugins: ["eslint-plugin-import"],
    };
};
