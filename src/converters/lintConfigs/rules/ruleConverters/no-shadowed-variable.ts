import { RuleConverter } from "../ruleConverter";

const SELECTIVE_DISABLE_NOTICE =
    "ESLint does not support selectively disabling shadowed declaration checks " +
    "depending on the type of declaration, so all kinds of declarations are checked.";

const UNDERSCORE_DISABLE_NOTICE =
    "ESLint does not support disabling shadowed variable checks based on " +
    "whether their names start with underscore or not, please use 'allow' in eslint configuration to " +
    "provide specific variable names you want to disable the rule for.";

export const convertNoShadowedVariable: RuleConverter = (tslintRule) => {
    const ruleArguments: { hoist: "all" | "never" }[] = [];
    const notices: string[] = [];

    if (tslintRule.ruleArguments.length === 0 || !(tslintRule.ruleArguments[0] instanceof Object)) {
        ruleArguments.push({ hoist: "all" });
    } else {
        const config: Record<string, boolean> = tslintRule.ruleArguments[0];

        if (config.underscore === false) {
            notices.push(UNDERSCORE_DISABLE_NOTICE);
        }

        ruleArguments.push({
            hoist: config.temporalDeadZone === false ? "never" : "all",
        });

        const hasUnsupportedDisables = Object.entries(config).some(
            ([key, value]) => value === false && key !== "underscore" && key !== "temporalDeadZone",
        );

        if (hasUnsupportedDisables) {
            notices.push(SELECTIVE_DISABLE_NOTICE);
        }
    }

    return {
        rules: [
            {
                ruleName: "no-shadow",
                ruleSeverity: "off",
            },
            {
                ...(notices.length !== 0 && { notices }),
                ...(ruleArguments.length !== 0 && { ruleArguments }),
                ruleName: "@typescript-eslint/no-shadow",
            },
        ],
    };
};
