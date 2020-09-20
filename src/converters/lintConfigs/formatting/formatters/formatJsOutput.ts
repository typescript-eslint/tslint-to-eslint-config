import { EOL } from "os";

import { faqs } from "./faqs";
import { withKeysSorted } from "./withKeysSorted";

export const formatJsOutput = (configuration: any) => {
    return `${faqs}module.exports = ${JSON.stringify(
        withKeysSorted(configuration),
        undefined,
        4,
    )};${EOL}`;
};
