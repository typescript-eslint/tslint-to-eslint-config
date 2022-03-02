import { RuleConverter } from "../ruleConverter";

export const convertOrderedImports: RuleConverter = (tslintRule) => {
    const argument = { ...tslintRule.ruleArguments[0] };
    const notices: string[] = [];

    const patternOptions = {
        nocomment: true,
        dot: true,
    };

    const importOrderRule = {
        alphabetize: {
            caseInsensitive: true,
            order: "asc",
        },
        "newlines-between": "ignore",
        groups: [
            ["builtin", "external", "internal", "unknown", "object", "type"],
            "parent",
            ["sibling", "index"],
        ],
        pathGroupsNaturalNewlines: false,
        pathGroupsExcludedImportTypes: [],
        pathGroups: [
            {
                pattern: "./",
                patternOptions,
                group: "sibling",
                position: "before",
            },

            {
                pattern: ".",
                patternOptions,
                group: "sibling",
                position: "before",
            },
            {
                pattern: "..",
                patternOptions,
                group: "parent",
                position: "before",
            },
            {
                pattern: "../",
                patternOptions,
                group: "parent",
                position: "before",
            },
        ],
    };

    switch (argument["import-sources-order"]) {
        case "case-insensitive":
        case "case-insensitive-legacy":
            importOrderRule.alphabetize.caseInsensitive = true;
            importOrderRule.alphabetize.order = "asc";
            break;
        case "lowercase-first":
            importOrderRule.alphabetize.caseInsensitive = false;
            importOrderRule.alphabetize.order = "asc";
            importOrderRule.pathGroups = importOrderRule.pathGroups.concat([
                {
                    pattern: "[a-z]*",
                    patternOptions,
                    group: "external",
                    position: "before",
                },
                {
                    pattern: "../[a-z]*",
                    patternOptions,
                    group: "parent",
                    position: "before",
                },
                {
                    pattern: "./[a-z]*",
                    patternOptions,
                    group: "sibling",
                    position: "before",
                },
            ]);
            break;
        case "lowercase-last":
            importOrderRule.alphabetize.caseInsensitive = false;
            importOrderRule.alphabetize.order = "asc";
            break;
        case "any":
            importOrderRule.alphabetize.caseInsensitive = false;
            importOrderRule.alphabetize.order = "ignore";
            break;
    }

    if (argument["grouped-imports"] === true) {
        importOrderRule["newlines-between"] = "always";
        importOrderRule.pathGroupsNaturalNewlines = true;
    }

    if ("groups" in argument) {
        notices.push(
            "Option 'groups' is too bespoke to be converted to ESLint plugin 'eslint-plugin-import'",
        );
    }

    if ("named-imports-order" in argument) {
        notices.push(
            "Option 'named-imports-order' is not supported by ESLint plugin 'eslint-plugin-import'",
        );
    }

    if (argument["module-source-path"] === "basename") {
        notices.push(
            "Option 'module-source-path' with a value of 'basename' is not supported by ESLint plugin 'eslint-plugin-import'. The behavior will fallback to 'full'",
        );
    }

    return {
        plugins: ["eslint-plugin-import"],
        rules: [
            {
                ...(notices.length !== 0 && { notices }),
                ruleArguments: [importOrderRule],
                ruleName: "import/order",
            },
        ],
    };
};
