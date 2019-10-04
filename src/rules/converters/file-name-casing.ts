import { RuleConverter } from "../converter";

const IGNORE_CASE_NOTICE = "ESLint (Unicorn plugin) does not support ignore as case";
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
    let casesMap = new Map();
    casesMap.set("camel-case", "camelCase");
    casesMap.set("pascal-case", "pascalCase");
    casesMap.set("kebab-case", "kebabCase");
    casesMap.set("snake-case", "snakeCase");
    let foundCases: { [k: string]: any } = {};

    if (ruleArguments.length === 0 || ruleArguments[0] === false || ruleArguments.length < 2) {
        return undefined;
    }

    let casings = ruleArguments[1];
    if (typeof casings === "string") {
        if (casings === "ignore") {
            notices.push(IGNORE_CASE_NOTICE);
        } else {
            foundCases[casesMap.get(casings)] = true;
        }
    }

    if (ruleArguments[1] instanceof Object) {
        for (let casing in casings) {
            if (casings[casing] === "ignore") {
                notices.push(IGNORE_CASE_NOTICE);
            } else {
                foundCases[casesMap.get(casings[casing])] = true;
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
