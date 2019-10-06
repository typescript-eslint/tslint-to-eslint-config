import { RuleConverter } from "../converter";

export const convertNoDefaultExport: RuleConverter = () => {
    return {
        rules: [
            // TODO: devinmotion: Using import/no-default-export
        ],
    };
};
