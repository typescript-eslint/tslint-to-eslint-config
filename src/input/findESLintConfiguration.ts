import { TSLintToESLintSettings } from "../types";
import { findConfiguration, FindConfigurationDependencies } from "./findConfiguration";

export type ESLintConfiguration = {
    env: {
        [i: string]: boolean;
    };
    rules: {
        [i: string]: number | [string, any];
    };
};

const defaultESLintConfiguration = {
    env: {},
    rules: {},
};

export const findESLintConfiguration = async (
    dependencies: FindConfigurationDependencies,
    rawSettings: Pick<TSLintToESLintSettings, "config" | "eslint">,
): Promise<ESLintConfiguration | Error> => {
    const rawConfiguration = await findConfiguration<ESLintConfiguration>(
        dependencies.exec,
        "eslint --print-config",
        rawSettings.eslint || rawSettings.config,
    );

    return rawConfiguration instanceof Error
        ? rawConfiguration
        : {
              ...defaultESLintConfiguration,
              ...rawConfiguration,
          };
};
