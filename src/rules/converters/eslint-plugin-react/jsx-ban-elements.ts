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

    let forbidArr: any[] = [];
    for (let i = 0; i < ruleArguments.length; i++) {
        let forbidObj: any = {};
        forbidObj.element = ruleArguments[i][0];

        if (ruleArguments[i].length == 2) {
            forbidObj.message = ruleArguments[i][1];
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
