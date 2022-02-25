import { RuleConverter } from "../ruleConverter.js";

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
