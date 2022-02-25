import { EOL } from "os";

import { faqs } from "./faqs.js";
import { withKeysSorted } from "./withKeysSorted.js";

export const formatJsOutput = (configuration: any) => {
    return `${faqs}module.exports = ${JSON.stringify(
        withKeysSorted(configuration),
        undefined,
        4,
    )};${EOL}`;
};
