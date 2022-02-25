import { EOL } from "os";

import { faqs } from "./faqs.js";
import { withKeysSorted } from "./withKeysSorted.js";

export const formatJsonOutput = (configuration: any) => {
    return `${faqs}${JSON.stringify(withKeysSorted(configuration), undefined, 4)}${EOL}`;
};
