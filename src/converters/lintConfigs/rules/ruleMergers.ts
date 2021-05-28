import { mergeBanTypes } from "./ruleMergers/ban-types";
import { mergeConsistentTypeAssertions } from "./ruleMergers/consistent-type-assertions";
import { mergeIndent } from "./ruleMergers/indent";
import { mergeNoMemberDelimiterStyle } from "./ruleMergers/member-delimiter-style";
import { mergeNamingConvention } from "./ruleMergers/naming-convention";
import { mergeNoEmpty } from "./ruleMergers/no-empty";
import { mergeNoEval } from "./ruleMergers/no-eval";
import { mergeNoUnnecessaryTypeAssertion } from "./ruleMergers/no-unnecessary-type-assertion";
import { mergeTripleSlashReference } from "./ruleMergers/triple-slash-reference";
import { mergeNoUseBeforeDefine } from "./ruleMergers/no-use-before-define";

export const ruleMergers = new Map([
    ["@typescript-eslint/ban-types", mergeBanTypes],
    ["@typescript-eslint/consistent-type-assertions", mergeConsistentTypeAssertions],
    ["@typescript-eslint/indent", mergeIndent],
    ["@typescript-eslint/member-delimiter-style", mergeNoMemberDelimiterStyle],
    ["@typescript-eslint/naming-convention", mergeNamingConvention],
    ["@typescript-eslint/no-use-before-define", mergeNoUseBeforeDefine],
    ["@typescript-eslint/no-unnecessary-type-assertion", mergeNoUnnecessaryTypeAssertion],
    ["@typescript-eslint/triple-slash-reference", mergeTripleSlashReference],
    ["no-empty", mergeNoEmpty],
    ["no-eval", mergeNoEval],
]);
