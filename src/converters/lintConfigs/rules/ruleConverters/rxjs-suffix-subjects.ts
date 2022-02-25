import { RuleConverter } from "../ruleConverter.js";

export const convertRxjsSuffixSubjects: RuleConverter = ({ ruleArguments }) => {
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
