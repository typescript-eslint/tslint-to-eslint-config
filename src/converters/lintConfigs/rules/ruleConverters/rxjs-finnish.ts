import { RuleConverter } from "../ruleConverter";

export const convertRxjsFinnish: RuleConverter = ({ ruleArguments }) => {
    return {
        rules: [
            {
                ...(ruleArguments.length !== 0 && { ruleArguments }),
                ruleName: "rxjs/finnish",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
