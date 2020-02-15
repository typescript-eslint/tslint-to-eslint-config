import { EOL } from "os";

import { withKeysSorted } from "./withKeysSorted";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const formatJsonOutput = (configuration: any): string => {
    return `${JSON.stringify(withKeysSorted(configuration), undefined, 4)}${EOL}`;
};
