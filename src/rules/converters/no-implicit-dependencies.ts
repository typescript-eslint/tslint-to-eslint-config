import { RuleConverter } from "../converter";

export const convertNoImplicitDependencies: RuleConverter = tslintRule => {
    const ruleArgs = [];

    tslintRule.ruleArguments.forEach(element => {
        if (element === "dev") {
            ruleArgs.push({ devDependencies: false });
        } else if (element === "optional") {
            ruleArgs.push({ optionalDependencies: false });
        } else {
            ruleArgs.push({ devDependencies: element });
        }
    });
    return {
        rules: [
            {
                ruleName: "import/no-extraneous-dependencies",
                ...(ruleArgs.length > 0 && { ruleArguments: ruleArgs }),
            },
        ],
    };
};
