import { ESLintRuleSeverity } from "../rules/types";
import { findConfiguration, FindConfigurationDependencies } from "./findConfiguration";

export type ESLintConfiguration = {
    env: {
        [i: string]: boolean;
    };
    extends: string | string[];
    rules: ESLintConfigurationRules;
};

export type ESLintConfigurationRules = {
    [i: string]: ESLintConfigurationRuleValue;
};

export type ESLintConfigurationRuleValue =
    | 0
    | 1
    | 2
    | ESLintRuleSeverity
    | [ESLintRuleSeverity, any];

const defaultESLintConfiguration = {
    env: {},
    extends: [],
    rules: {},
};

export const findESLintConfiguration = async (
    dependencies: FindConfigurationDependencies,
    config: string | undefined,
): Promise<ESLintConfiguration | Error> => {
    const rawConfiguration = await findConfiguration<ESLintConfiguration>(
        dependencies.exec,
        "eslint --print-config",
        config || "./eslintrc.js",
    );

    return rawConfiguration instanceof Error
        ? rawConfiguration
        : {
              ...defaultESLintConfiguration,
              ...rawConfiguration,
          };
};
