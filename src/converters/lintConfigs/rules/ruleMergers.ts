import { mergeBanTypes } from "./ruleMergers/ban-types.js";
import { mergeConsistentTypeAssertions } from "./ruleMergers/consistent-type-assertions.js";
import { mergeIndent } from "./ruleMergers/indent.js";
import { mergeJsxA11yAltText } from "./ruleMergers/jsx-a11y-alt-text.js";
import { mergeNoMemberDelimiterStyle } from "./ruleMergers/member-delimiter-style.js";
import { mergeNamingConvention } from "./ruleMergers/naming-convention.js";
import { mergeNoEmpty } from "./ruleMergers/no-empty.js";
import { mergeNoEval } from "./ruleMergers/no-eval.js";
import { mergeNoUnnecessaryTypeAssertion } from "./ruleMergers/no-unnecessary-type-assertion.js";
import { mergeNoUseBeforeDefine } from "./ruleMergers/no-use-before-define.js";
import { mergeTripleSlashReference } from "./ruleMergers/triple-slash-reference.js";

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
