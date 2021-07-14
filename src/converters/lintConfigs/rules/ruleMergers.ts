import { mergeBanTypes } from "./ruleMergers/ban-types";
import { mergeConsistentTypeAssertions } from "./ruleMergers/consistent-type-assertions";
import { mergeIndent } from "./ruleMergers/indent";
import { mergeJsxA11yAltText } from "./ruleMergers/jsx-a11y-alt-text";
import { mergeNoMemberDelimiterStyle } from "./ruleMergers/member-delimiter-style";
import { mergeNamingConvention } from "./ruleMergers/naming-convention";
import { mergeNoEmpty } from "./ruleMergers/no-empty";
import { mergeNoEval } from "./ruleMergers/no-eval";
import { mergeNoUnnecessaryTypeAssertion } from "./ruleMergers/no-unnecessary-type-assertion";
import { mergeNoUseBeforeDefine } from "./ruleMergers/no-use-before-define";
import { mergeTripleSlashReference } from "./ruleMergers/triple-slash-reference";

export const ruleMergers = new Map([
    ["@typescript-eslint/ban-types", mergeBanTypes],
    ["@typescript-eslint/consistent-type-assertions", mergeConsistentTypeAssertions],
    ["@typescript-eslint/indent", mergeIndent],
    ["@typescript-eslint/member-delimiter-style", mergeNoMemberDelimiterStyle],
    ["@typescript-eslint/naming-convention", mergeNamingConvention],
    ["@typescript-eslint/no-use-before-define", mergeNoUseBeforeDefine],
    ["@typescript-eslint/no-unnecessary-type-assertion", mergeNoUnnecessaryTypeAssertion],
    ["@typescript-eslint/triple-slash-reference", mergeTripleSlashReference],
    ["jsx-a11y/alt-text", mergeJsxA11yAltText],
    ["no-empty", mergeNoEmpty],
    ["no-eval", mergeNoEval],
]);
