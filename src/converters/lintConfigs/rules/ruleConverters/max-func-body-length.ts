import { isNumber } from "lodash";

import { RuleConverter } from "../ruleConverter";

const parseExtras = (ruleArguments: any[]) => {
    if (ruleArguments.length === 0) {
        return {};
    }

    const [max] = ruleArguments;
    if (typeof max === "number") {
        return {
            ruleArguments: [max],
        };
    }

    const notices = [
        "ESLint's max-statements rule only supports a single maximum function length.",
    ];

    if (max["ignore-comments"]) {
        notices.push("ESLint's max-statements rule does not have an option to ignore comments.");
    }

    return {
        notices,
        ruleArguments: [
            Math.max(...Object.values(max as Record<string, number | string>).filter(isNumber)),
        ],
    };
};

export const convertMaxFuncBodyLength: RuleConverter = (tslintRule) => {
    return {
        rules: [
            {
                ...parseExtras(tslintRule.ruleArguments),
                ruleName: "max-statements",
            },
        ],
    };
};
