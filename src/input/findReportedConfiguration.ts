import { Exec } from "../adapters/exec";
import { asError } from "../utils";

export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends Record<string, unknown> ? DeepPartial<T[P]> : T[P];
};

export type FindReportedConfigurationDependencies = {
    exec: Exec;
    platform: string;
};

export const findReportedConfiguration = async <Configuration>(
    exec: Exec,
    command: string,
    config: string,
): Promise<DeepPartial<Configuration> | Error> => {
    const fullCommand = `${command} "${config}"`;
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

const execAndCatch = async (exec: Exec, fullCommand: string): Promise<Error | string> => {
    try {
        const { stderr, stdout } = await exec(fullCommand);

        if (stderr) {
            return new Error(stderr);
        }

        return stdout;
    } catch (error) {
        return asError(error);
    }
};
