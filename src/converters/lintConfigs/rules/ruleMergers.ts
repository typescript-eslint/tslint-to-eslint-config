import { mergeBanTypes } from "./ruleMergers/ban-types";
import { mergeConsistentTypeAssertions } from "./ruleMergers/consistent-type-assertions";
import { mergeIndent } from "./ruleMergers/indent";
import { mergeNamingConvention } from "./ruleMergers/naming-convention";
import { mergeNoCaller } from "./ruleMergers/no-caller";
import { mergeNoEval } from "./ruleMergers/no-eval";
import { mergeNoMemberDelimiterStyle } from "./ruleMergers/member-delimiter-style";
import { mergeNoUnnecessaryTypeAssertion } from "./ruleMergers/no-unnecessary-type-assertion";
import { mergeTripleSlashReference } from "./ruleMergers/triple-slash-reference";

export const ruleMergers = new Map([
    ["@typescript-eslint/ban-types", mergeBanTypes],
    ["@typescript-eslint/consistent-type-assertions", mergeConsistentTypeAssertions],
    ["@typescript-eslint/indent", mergeIndent],
    ["@typescript-eslint/member-delimiter-style", mergeNoMemberDelimiterStyle],
    ["@typescript-eslint/naming-convention", mergeNamingConvention],
    ["@typescript-eslint/no-unnecessary-type-assertion", mergeNoUnnecessaryTypeAssertion],
    ["@typescript-eslint/triple-slash-reference", mergeTripleSlashReference],
    ["no-caller", mergeNoCaller],
    ["no-eval", mergeNoEval],
]);
