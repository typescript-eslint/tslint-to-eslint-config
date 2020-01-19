import { EOL } from "os";

import { withKeysSorted } from "./withKeysSorted";

export const formatJsonOutput = (configuration: any) => {
    return `${JSON.stringify(withKeysSorted(configuration), undefined, 4)}${EOL}`;
};
