import { RuleConverter } from "../ruleConverter";

export const convertRxjsPreferAngularTakeuntil: RuleConverter = ({ ruleArguments }) => {
    return {
        rules: [
            {
                ...(ruleArguments.length !== 0 && { ruleArguments }),
                ruleName: "prefer-takeuntil",
            },
        ],
        plugins: ["rxjs-angular"],
    };
};
