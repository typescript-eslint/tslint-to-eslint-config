import { RuleConverter } from "../converter";

export const convertNoImplicitDependencies: RuleConverter = tslintRule => {
    const ruleArgs: {
        [eslintOption in "devDependencies" | "optionalDependencies"]?: boolean
    }[] = [];
    const notices: string[] = [];

    tslintRule.ruleArguments.forEach(element => {
        if (element === "dev") {
            ruleArgs.push({ devDependencies: false });
        } else if (element === "optional") {
            ruleArgs.push({ optionalDependencies: false });
        } else {
            notices.push("ESLint does not support whitelisting modules");
        }
    });

    return {
        rules: [
            {
                ruleName: "import/no-extraneous-dependencies",
                ...(ruleArgs.length > 0 && { ruleArguments: ruleArgs }),
                ...(notices.length > 0 && { notices }),
            },
        ],

        plugins: ["import"],
    };
};
