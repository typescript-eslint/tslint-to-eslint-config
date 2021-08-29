import { RuleConverter } from "../../ruleConverter";

export const convertFinnish: RuleConverter = ({ ruleArguments }) => {
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
