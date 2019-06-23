import { RuleConverter } from "../converter";

export const convertUnnecessaryConstructor: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "no-useless-constructor",
            },
        ],
    };
};
