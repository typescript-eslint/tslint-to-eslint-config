import { RuleConverter } from "../ruleConverter";

export const convertRxjsBanOperators: RuleConverter = ({ ruleArguments }) => {
    return {
        rules: [
            {
                ...(ruleArguments.length !== 0 && { ruleArguments }),
                ruleName: "rxjs/ban-operators",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
