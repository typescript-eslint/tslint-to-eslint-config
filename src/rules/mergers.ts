import { mergeBanTypes } from "./mergers/ban-types";
import { mergeIndent } from "./mergers/indent";
import { mergeNoMemberDelimiterStyle } from "./mergers/member-delimiter-style";
import { mergeNoCaller } from "./mergers/no-caller";
import { mergeNoEval } from "./mergers/no-eval";
import { mergeNoUnnecessaryTypeAssertion } from "./mergers/no-unnecessary-type-assertion";

export const mergers = new Map([
    ["@typescript-eslint/ban-types", mergeBanTypes],
    ["@typescript-eslint/indent", mergeIndent],
    ["@typescript-eslint/member-delimiter-style", mergeNoMemberDelimiterStyle],
    ["@typescript-eslint/no-unnecessary-type-assertion", mergeNoUnnecessaryTypeAssertion],
    ["no-caller", mergeNoCaller],
    ["no-eval", mergeNoEval],
]);
