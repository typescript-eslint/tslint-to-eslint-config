import { Exec } from "../adapters/exec";

export const findLintConfiguration = async <Configuration>(
    exec: Exec,
    command: string,
    config: string,
    defaultValues: Configuration,
): Promise<Configuration | Error> => {
    const fullCommand = `${command} ${config}`;
    const stdout = await execAndCatch(exec, fullCommand);
    if (stdout instanceof Error) {
        return stdout;
    }

    try {
        return {
            ...defaultValues,
            ...(JSON.parse(stdout) as Partial<Configuration>),
        };
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
