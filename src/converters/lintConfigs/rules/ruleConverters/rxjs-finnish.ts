import { RuleConverter } from "../ruleConverter.js";

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
