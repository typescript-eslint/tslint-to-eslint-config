import { EOL } from "os";

export const formatJsonOutput = (configuration: unknown) =>
    `${JSON.stringify(configuration, undefined, 4)}${EOL}`;
