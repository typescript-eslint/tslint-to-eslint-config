import { EOL } from "os";

import { withKeysSorted } from "./withKeysSorted";

export const formatJsOutput = (configuration: any) => {
    return `module.exports = ${JSON.stringify(withKeysSorted(configuration), undefined, 4)};${EOL}`;
};
