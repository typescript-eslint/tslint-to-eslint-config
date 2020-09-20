import { EOL } from "os";

import { faqs } from "./faqs";
import { withKeysSorted } from "./withKeysSorted";

export const formatJsonOutput = (configuration: any) => {
    return `${faqs}${JSON.stringify(withKeysSorted(configuration), undefined, 4)}${EOL}`;
};
