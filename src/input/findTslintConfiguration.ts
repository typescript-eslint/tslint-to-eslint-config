import { Exec } from "../adapters/exec";

export type TSLintConfiguration = {
    ruleDirectories: string[];
    rules: {
        [i: string]: any;
    };
};

export type FindTSlintConfigurationDependencies = {
    exec: Exec;
};

export const findTslintConfiguration = async (
    dependencies: FindTSlintConfigurationDependencies,
    config: string,
): Promise<TSLintConfiguration | Error> => {
    const command = buildCommand(config);
    const { stderr, stdout } = await dependencies.exec(command);

    if (stderr) {
        return new Error(stderr);
    }

    try {
        return {
            ruleDirectories: [],
            rules: {},
            ...(JSON.parse(stdout) as Partial<TSLintConfiguration>),
        };
    } catch (error) {
        return new Error(`Error parsing TSLint configuration: ${error}`);
    }
};

const buildCommand = (config: string) => {
    return ["tslint --print-config", config].filter(Boolean).join(" ");
};
