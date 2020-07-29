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

    const forbidArr: any[] = [];
    for (const element of ruleArguments) {
        const forbidObj: any = {};
        forbidObj.element = element[0];

        if (element.length == 2) {
            forbidObj.message = element[1];
        }
        forbidArr.push(forbidObj);
    }

    return {
        ruleArguments: [
            {
                forbid: forbidArr,
            },
        ],
    };
};
