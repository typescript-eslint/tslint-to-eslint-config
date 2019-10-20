import { EOL } from "os";

export const formatJsonOutput = (configuration: any) => {
    const keys = Object.keys(configuration).sort();
    const sortedConfiguration = Object.fromEntries(keys.map(key => [key, configuration[key]]));

    return `${JSON.stringify(sortedConfiguration, undefined, 4)}${EOL}`;
};
