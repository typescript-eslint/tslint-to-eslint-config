import { RuleConverter } from "../../converter";

export const convertJsxBanElements: RuleConverter = (tslintRule) => {
    return {
        rules: [
            {
                ...collectArguments(tslintRule.ruleArguments),
                ruleName: "react/forbid-elements",
            },
        ],
        plugins: ["eslint-plugin-react"],
    };
};

const collectArguments = (ruleArguments: any[]) => {
    if (ruleArguments.length === 0) {
        return undefined;
    }

    const forbiddenElements = ruleArguments.map((ruleArgument) => {
        return {
            element: ruleArgument[0],
            ...(ruleArgument.length === 2 && { message: ruleArgument[1] }),
        };
    });

    return {
        ruleArguments: [
            {
                forbid: forbiddenElements,
            },
        ],
    };
};
