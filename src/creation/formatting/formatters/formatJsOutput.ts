import { EOL } from "os";

import { withKeysSorted } from "./withKeysSorted";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const formatJsOutput = (configuration: any): string => {
    return `module.exports = ${JSON.stringify(withKeysSorted(configuration), undefined, 4)};${EOL}`;
};
