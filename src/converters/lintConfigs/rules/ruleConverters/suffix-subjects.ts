import { RuleConverter } from "../ruleConverter";

export const convertSuffixSubjects: RuleConverter = ({ ruleArguments }) => {
    return {
        rules: [
            {
                ...(ruleArguments.length !== 0 && { ruleArguments }),
                ruleName: "rxjs/suffix-subjects",
            },
        ],
        plugins: ["eslint-plugin-rxjs"],
    };
};
