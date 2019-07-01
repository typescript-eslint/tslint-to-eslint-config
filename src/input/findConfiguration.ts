import { Exec } from "../adapters/exec";

export type DeepPartial<T> = {
    [P in keyof T]: T[P] extends {} ? DeepPartial<T[P]> : T[P];
};

export type FindConfigurationDependencies = {
    exec: Exec;
};

export const findConfiguration = async <Configuration>(
    exec: Exec,
    command: string,
    config: string,
): Promise<DeepPartial<Configuration> | Error> => {
    const fullCommand = `${command} ${config}`;
    const stdout = await execAndCatch(exec, fullCommand);

    if (stdout instanceof Error) {
        return stdout;
    }

    try {
        return JSON.parse(stdout) as DeepPartial<Configuration>;
    } catch (error) {
        return new Error(`Error parsing configuration: ${error}`);
    }
};

const execAndCatch = async (exec: Exec, fullCommand: string) => {
    try {
        const { stderr, stdout } = await exec(fullCommand);

        if (stderr) {
            return new Error(stderr);
        }

        return stdout;
    } catch (error) {
        return error;
    }
};
