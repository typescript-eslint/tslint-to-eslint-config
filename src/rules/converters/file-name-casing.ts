import { RuleConverter } from "../converter";

const IGNORE_CASE_NOTICE = "ESLint (Unicorn plugin) does not support the 'ignore' case.";
const CASING_BY_FILETYPE_CHANGE =
    "ESLint (Unicorn Plugin) does not support file name casing by file type, so all previously configured casings are now allowed.";
const CASES_MAP: { [s: string]: string } = {
    "camel-case": "camelCase",
    "pascal-case": "pascalCase",
    "kebab-case": "kebabCase",
    "snake-case": "snakeCase",
};

export const convertFileNameCasing: RuleConverter = tslintRule => {
    return {
        rules: [
            {
                ruleName: "unicorn/filename-case",
                ...collectArguments(tslintRule.ruleArguments),
            },
        ],
        plugins: ["unicorn"],
    };
};

const collectArguments = (ruleArguments: any[]) => {
    const notices: string[] = [];
    const foundCases: { [k: string]: boolean } = {};

    if (ruleArguments.length === 0 || ruleArguments[0] === false || ruleArguments.length < 2) {
        return undefined;
    }

    const casings = ruleArguments[1];
    if (typeof casings === "string") {
        if (casings === "ignore") {
            notices.push(IGNORE_CASE_NOTICE);
        } else {
            foundCases[CASES_MAP[casings]] = true;
        }
    }

    if (ruleArguments[1] instanceof Object) {
        notices.push(CASING_BY_FILETYPE_CHANGE);
        for (const casing in casings) {
            if (casings[casing] === "ignore") {
                notices.push(IGNORE_CASE_NOTICE);
            } else {
                foundCases[CASES_MAP[casings[casing]]] = true;
            }
        }
    }

    return {
        ...(notices.length > 0 && { notices }),
        ruleArguments: [
            {
                cases: foundCases,
            },
        ],
    };
};
