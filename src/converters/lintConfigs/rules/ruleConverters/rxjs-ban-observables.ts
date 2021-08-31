import { RuleConverter } from "../ruleConverter";

export const convertRxjsBanObservables: RuleConverter = ({ ruleArguments }) => {
    return {
        rules: [
            {
                ...(ruleArguments.length !== 0 && { ruleArguments }),
                ruleName: "rxjs/ban-observables",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
