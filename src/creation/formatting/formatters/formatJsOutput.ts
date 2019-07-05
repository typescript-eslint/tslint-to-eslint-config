import { EOL } from "os";

export const formatJsOutput = (configuration: unknown) =>
    `module.exports = ${JSON.stringify(configuration, undefined, 4)};${EOL}`;
