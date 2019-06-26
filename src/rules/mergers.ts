import { mergeBanTypes } from "./mergers/ban-types";
import { mergeNoUnnecessaryTypeAssertion } from "./mergers/no-unnecessary-type-assertion";

export const mergers = new Map([
    ["@typescript-eslint/ban-types", mergeBanTypes],
    ["@typescript-eslint/no-unnecessary-type-assertion", mergeNoUnnecessaryTypeAssertion],
]);
