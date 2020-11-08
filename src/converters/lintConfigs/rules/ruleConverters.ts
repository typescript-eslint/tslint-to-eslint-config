import { convertAdjacentOverloadSignatures } from "./ruleConverters/adjacent-overload-signatures";
import { convertAlign } from "./ruleConverters/align";
import { convertArrayType } from "./ruleConverters/array-type";
import { convertArrowParens } from "./ruleConverters/arrow-parens";
import { convertArrowReturnShorthand } from "./ruleConverters/arrow-return-shorthand";
import { convertAwaitPromise } from "./ruleConverters/await-promise";
import { convertBanCommaOperator } from "./ruleConverters/ban-comma-operator";
import { convertBanTsIgnore } from "./ruleConverters/ban-ts-ignore";
import { convertBanTypes } from "./ruleConverters/ban-types";
import { convertBinaryExpressionOperandOrder } from "./ruleConverters/binary-expression-operand-order";
import { convertCallableTypes } from "./ruleConverters/callable-types";
import { convertClassName } from "./ruleConverters/class-name";
import { convertCommentFormat } from "./ruleConverters/comment-format";
import { convertCurly } from "./ruleConverters/curly";
import { convertCyclomaticComplexity } from "./ruleConverters/cyclomatic-complexity";
import { convertDeprecation } from "./ruleConverters/deprecation";
import { convertEofline } from "./ruleConverters/eofline";
import { convertFileNameCasing } from "./ruleConverters/file-name-casing";
import { convertForin } from "./ruleConverters/forin";
import { convertFunctionConstructor } from "./ruleConverters/function-constructor";
import { convertImportBlacklist } from "./ruleConverters/import-blacklist";
import { convertIncrementDecrement } from "./ruleConverters/increment-decrement";
import { convertIndent } from "./ruleConverters/indent";
import { convertInterfaceName } from "./ruleConverters/interface-name";
import { convertInterfaceOverTypeLiteral } from "./ruleConverters/interface-over-type-literal";
import { convertJSDocFormat } from "./ruleConverters/jsdoc-format";
import { convertLabelPosition } from "./ruleConverters/label-position";
import { convertLinebreakStyle } from "./ruleConverters/linebreak-style";
import { convertMaxClassesPerFile } from "./ruleConverters/max-classes-per-file";
import { convertMaxFileLineCount } from "./ruleConverters/max-file-line-count";
import { convertMaxLineLength } from "./ruleConverters/max-line-length";
import { convertMemberAccess } from "./ruleConverters/member-access";
import { convertMemberOrdering } from "./ruleConverters/member-ordering";
import { convertNewlineBeforeReturn } from "./ruleConverters/newline-before-return";
import { convertNewlinePerChainedCall } from "./ruleConverters/newline-per-chained-call";
import { convertNewParens } from "./ruleConverters/new-parens";
import { convertNoAngleBracketTypeAssertion } from "./ruleConverters/no-angle-bracket-type-assertion";
import { convertNoArg } from "./ruleConverters/no-arg";
import { convertNoAsyncWithoutAwait } from "./ruleConverters/no-async-without-await";
import { convertNoBannedTerms } from "./ruleConverters/no-banned-terms";
import { convertNoBitwise } from "./ruleConverters/no-bitwise";
import { convertNoBooleanLiteralCompare } from "./ruleConverters/no-boolean-literal-compare";
import { convertNoConditionalAssignment } from "./ruleConverters/no-conditional-assignment";
import { convertNoConsecutiveBlankLines } from "./ruleConverters/no-consecutive-blank-lines";
import { convertNoConsole } from "./ruleConverters/no-console";
import { convertNoConstantCondition } from "./ruleConverters/no-constant-condition";
import { convertNoConstruct } from "./ruleConverters/no-construct";
import { convertNoControlRegex } from "./ruleConverters/no-control-regex";
import { convertNoDebugger } from "./ruleConverters/no-debugger";
import { convertNoDefaultExport } from "./ruleConverters/no-default-export";
import { convertNoDuplicateImports } from "./ruleConverters/no-duplicate-imports";
import { convertNoDuplicateSuper } from "./ruleConverters/no-duplicate-super";
import { convertNoDuplicateSwitchCase } from "./ruleConverters/no-duplicate-switch-case";
import { convertNoDuplicateVariable } from "./ruleConverters/no-duplicate-variable";
import { convertNoEmpty } from "./ruleConverters/no-empty";
import { convertNoEmptyInterface } from "./ruleConverters/no-empty-interface";
import { convertNoEval } from "./ruleConverters/no-eval";
import { convertNoExplicitAny } from "./ruleConverters/no-explicit-any";
import { convertNoFloatingPromises } from "./ruleConverters/no-floating-promises";
import { convertNoForIn } from "./ruleConverters/no-for-in";
import { convertNoForInArray } from "./ruleConverters/no-for-in-array";
import { convertNoImplicitDependencies } from "./ruleConverters/no-implicit-dependencies";
import { convertNoImportSideEffect } from "./ruleConverters/no-import-side-effect";
import { convertNoInferrableTypes } from "./ruleConverters/no-inferrable-types";
import { convertNoInternalModule } from "./ruleConverters/no-internal-module";
import { convertNoInvalidRegexp } from "./ruleConverters/no-invalid-regexp";
import { convertNoInvalidTemplateStrings } from "./ruleConverters/no-invalid-template-strings";
import { convertNoInvalidThis } from "./ruleConverters/no-invalid-this";
import { convertNoIrregularWhitespace } from "./ruleConverters/no-irregular-whitespace";
import { convertNoMagicNumbers } from "./ruleConverters/no-magic-numbers";
import { convertNoMisusedNew } from "./ruleConverters/no-misused-new";
import { convertNoMultilineString } from "./ruleConverters/no-multiline-string";
import { convertNoNamespace } from "./ruleConverters/no-namespace";
import { convertNoNonNullAssertion } from "./ruleConverters/no-non-null-assertion";
import { convertNoNullKeyword } from "./ruleConverters/no-null-keyword";
import { convertNoObjectLiteralTypeAssertion } from "./ruleConverters/no-object-literal-type-assertion";
import { convertNoOctalLiteral } from "./ruleConverters/no-octal-literal";
import { convertNoParameterProperties } from "./ruleConverters/no-parameter-properties";
import { convertNoParameterReassignment } from "./ruleConverters/no-parameter-reassignment";
import { convertNoRedundantJsdoc } from "./ruleConverters/no-redundant-jsdoc";
import { convertNoReference } from "./ruleConverters/no-reference";
import { convertNoReferenceImport } from "./ruleConverters/no-reference-import";
import { convertNoRegexSpaces } from "./ruleConverters/no-regex-spaces";
import { convertNoRequireImports } from "./ruleConverters/no-require-imports";
import { convertNoReturnAwait } from "./ruleConverters/no-return-await";
import { convertNoShadowedVariable } from "./ruleConverters/no-shadowed-variable";
import { convertNoSparseArrays } from "./ruleConverters/no-sparse-arrays";
import { convertNoStringLiteral } from "./ruleConverters/no-string-literal";
import { convertNoStringThrow } from "./ruleConverters/no-string-throw";
import { convertNoSubmoduleImports } from "./ruleConverters/no-submodule-imports";
import { convertNoSwitchCaseFallThrough } from "./ruleConverters/no-switch-case-fall-through";
import { convertNoThisAssignment } from "./ruleConverters/no-this-assignment";
import { convertNoTrailingWhitespace } from "./ruleConverters/no-trailing-whitespace";
import { convertNoUnboundMethod } from "./ruleConverters/no-unbound-method";
import { convertNoUnnecessaryClass } from "./ruleConverters/no-unnecessary-class";
import { convertNoUnnecessaryInitializer } from "./ruleConverters/no-unnecessary-initializer";
import { convertNoUnnecessaryQualifier } from "./ruleConverters/no-unnecessary-qualifier";
import { convertNoUnnecessarySemicolons } from "./ruleConverters/no-unnecessary-semicolons";
import { convertNoUnnecessaryTypeAssertion } from "./ruleConverters/no-unnecessary-type-assertion";
import { convertNoUnsafeFinally } from "./ruleConverters/no-unsafe-finally";
import { convertNoUnusedExpression } from "./ruleConverters/no-unused-expression";
import { convertNoUnusedVariable } from "./ruleConverters/no-unused-variable";
import { convertNoUseBeforeDeclare } from "./ruleConverters/no-use-before-declare";
import { convertNoVarKeyword } from "./ruleConverters/no-var-keyword";
import { convertNoVarRequires } from "./ruleConverters/no-var-requires";
import { convertNoVoidExpression } from "./ruleConverters/no-void-expression";
import { convertObjectLiteralKeyQuotes } from "./ruleConverters/object-literal-key-quotes";
import { convertObjectLiteralShorthand } from "./ruleConverters/object-literal-shorthand";
import { convertOneLine } from "./ruleConverters/one-line";
import { convertOneVariablePerDeclaration } from "./ruleConverters/one-variable-per-declaration";
import { convertOnlyArrowFunctions } from "./ruleConverters/only-arrow-functions";
import { convertOrderedImports } from "./ruleConverters/ordered-imports";
import { convertPreferConst } from "./ruleConverters/prefer-const";
import { convertPreferForOf } from "./ruleConverters/prefer-for-of";
import { convertPreferFunctionOverMethod } from "./ruleConverters/prefer-function-over-method";
import { convertPreferObjectSpread } from "./ruleConverters/prefer-object-spread";
import { convertPreferReadonly } from "./ruleConverters/prefer-readonly";
import { convertPreferTemplate } from "./ruleConverters/prefer-template";
import { convertPromiseFunctionAsync } from "./ruleConverters/promise-function-async";
import { convertQuotemark } from "./ruleConverters/quotemark";
import { convertRadix } from "./ruleConverters/radix";
import { convertRestrictPlusOperands } from "./ruleConverters/restrict-plus-operands";
import { convertSemicolon } from "./ruleConverters/semicolon";
import { convertSpaceBeforeFunctionParen } from "./ruleConverters/space-before-function-paren";
import { convertSpaceWithinParens } from "./ruleConverters/space-within-parens";
import { convertStrictBooleanExpressions } from "./ruleConverters/strict-boolean-expressions";
import { convertSwitchDefault } from "./ruleConverters/switch-default";
import { convertTrailingComma } from "./ruleConverters/trailing-comma";
import { convertTripleEquals } from "./ruleConverters/triple-equals";
import { convertTypedefWhitespace } from "./ruleConverters/typedef-whitespace";
import { convertTypeLiteralDelimiter } from "./ruleConverters/type-literal-delimiter";
import { convertTypeofCompare } from "./ruleConverters/typeof-compare";
import { convertUnifiedSignatures } from "./ruleConverters/unified-signatures";
import { convertUnnecessaryBind } from "./ruleConverters/unnecessary-bind";
import { convertUnnecessaryConstructor } from "./ruleConverters/unnecessary-constructor";
import { convertUseDefaultTypeParameter } from "./ruleConverters/use-default-type-parameter";
import { convertUseIsnan } from "./ruleConverters/use-isnan";
import { convertVariableName } from "./ruleConverters/variable-name";

// Codelyzer converters
import { convertComponentClassSuffix } from "./ruleConverters/codelyzer/component-class-suffix";
import { convertComponentMaxInlineDeclarations } from "./ruleConverters/codelyzer/component-max-inline-declarations";
import { convertComponentSelector } from "./ruleConverters/codelyzer/component-selector";
import { convertContextualLifecycle } from "./ruleConverters/codelyzer/contextual-lifecycle";
import { convertDirectiveClassSuffix } from "./ruleConverters/codelyzer/directive-class-suffix";
import { convertDirectiveSelector } from "./ruleConverters/codelyzer/directive-selector";
import { convertNoAttributeDecorator } from "./ruleConverters/codelyzer/no-attribute-decorator";
import { convertNoConflictingLifecycle } from "./ruleConverters/codelyzer/no-conflicting-lifecycle";
import { convertNoForwardRef } from "./ruleConverters/codelyzer/no-forward-ref";
import { convertNoHostMetadataProperty } from "./ruleConverters/codelyzer/no-host-metadata-property";
import { convertNoInputPrefix } from "./ruleConverters/codelyzer/no-input-prefix";
import { convertNoInputRename } from "./ruleConverters/codelyzer/no-input-rename";
import { convertNoInputsMetadataProperty } from "./ruleConverters/codelyzer/no-inputs-metadata-property";
import { convertNoLifecycleCall } from "./ruleConverters/codelyzer/no-lifecycle-call";
import { convertNoOutputNative } from "./ruleConverters/codelyzer/no-output-native";
import { convertNoOutputOnPrefix } from "./ruleConverters/codelyzer/no-output-on-prefix";
import { convertNoOutputRename } from "./ruleConverters/codelyzer/no-output-rename";
import { convertNoOutputsMetadataProperty } from "./ruleConverters/codelyzer/no-outputs-metadata-property";
import { convertNoPipeImpure } from "./ruleConverters/codelyzer/no-pipe-impure";
import { convertNoQueriesMetadataProperty } from "./ruleConverters/codelyzer/no-queries-metadata-property";
import { convertPipePrefix } from "./ruleConverters/codelyzer/pipe-prefix";
import { convertPreferOnPushComponentChangeDetection } from "./ruleConverters/codelyzer/prefer-on-push-component-change-detection";
import { convertPreferOutputReadonly } from "./ruleConverters/codelyzer/prefer-output-readonly";
import { convertRelativeUrlPrefix } from "./ruleConverters/codelyzer/relative-url-prefix";
import { convertTemplateAccessibilityTabindexNoPositive } from "./ruleConverters/codelyzer/template-accessibility-tabindex-no-positive";
import { convertTemplateBananaInBox } from "./ruleConverters/codelyzer/template-banana-in-box";
import { convertTemplateCyclomaticComplexity } from "./ruleConverters/codelyzer/template-cyclomatic-complexity";
import { convertTemplateNoAutofocus } from "./ruleConverters/codelyzer/template-no-autofocus";
import { convertTemplateNoCallExpression } from "./ruleConverters/codelyzer/template-no-call-expression";
import { convertTemplateNoNegatedAsync } from "./ruleConverters/codelyzer/template-no-negated-async";
import { convertUseComponentSelector } from "./ruleConverters/codelyzer/use-component-selector";
import { convertUseComponentViewEncapsulation } from "./ruleConverters/codelyzer/use-component-view-encapsulation";
import { convertUseInjectableProvidedIn } from "./ruleConverters/codelyzer/use-injectable-provided-in";
import { convertUseLifecycleInterface } from "./ruleConverters/codelyzer/use-lifecycle-interface";
import { convertUsePipeDecorator } from "./ruleConverters/codelyzer/use-pipe-decorator";
import { convertUsePipeTransformInterface } from "./ruleConverters/codelyzer/use-pipe-transform-interface";

// ESLint-React converters
import { convertJsxBooleanValue } from "./ruleConverters/eslint-plugin-react/jsx-boolean-value";
import { convertJsxCurlySpacing } from "./ruleConverters/eslint-plugin-react/jsx-curly-spacing";
import { convertJsxEqualsSpacing } from "./ruleConverters/eslint-plugin-react/jsx-equals-spacing";
import { convertJsxKey } from "./ruleConverters/eslint-plugin-react/jsx-key";
import { convertJsxNoBind } from "./ruleConverters/eslint-plugin-react/jsx-no-bind";
import { convertJsxWrapMultiline } from "./ruleConverters/eslint-plugin-react/jsx-wrap-multiline";

// eslint-plugin-rxjs converters
import { convertNoAsyncSubscribe } from "./ruleConverters/eslint-plugin-rxjs/no-async-subscribe";
import { convertNoIgnoredReplayBuffer } from "./ruleConverters/eslint-plugin-rxjs/no-ignored-replay-buffer";
import { convertNoIgnoredTakeWhileValue } from "./ruleConverters/eslint-plugin-rxjs/no-ignored-takewhile-value";
import { convertNoRedundantNotify } from "./ruleConverters/eslint-plugin-rxjs/no-redundant-notify";
import { convertNoShareReplay } from "./ruleConverters/eslint-plugin-rxjs/no-sharereplay";
import { convertNoUnsafeSubjectNext } from "./ruleConverters/eslint-plugin-rxjs/no-unsafe-subject-next";

/**
 * Keys TSLint rule names to their ESLint rule converters.
 */
export const ruleConverters = new Map([
    ["adjacent-overload-signatures", convertAdjacentOverloadSignatures],
    ["align", convertAlign],
    ["array-type", convertArrayType],
    ["arrow-parens", convertArrowParens],
    ["arrow-return-shorthand", convertArrowReturnShorthand],
    ["await-promise", convertAwaitPromise],
    ["ban-comma-operator", convertBanCommaOperator],
    ["ban-ts-ignore", convertBanTsIgnore],
    ["ban-types", convertBanTypes],
    ["binary-expression-operand-order", convertBinaryExpressionOperandOrder],
    ["callable-types", convertCallableTypes],
    ["class-name", convertClassName],
    ["comment-format", convertCommentFormat],
    ["component-class-suffix", convertComponentClassSuffix],
    ["component-max-inline-declarations", convertComponentMaxInlineDeclarations],
    ["component-selector", convertComponentSelector],
    ["contextual-lifecycle", convertContextualLifecycle],
    ["curly", convertCurly],
    ["cyclomatic-complexity", convertCyclomaticComplexity],
    ["deprecation", convertDeprecation],
    ["directive-class-suffix", convertDirectiveClassSuffix],
    ["directive-selector", convertDirectiveSelector],
    ["eofline", convertEofline],
    ["file-name-casing", convertFileNameCasing],
    ["forin", convertForin],
    ["function-constructor", convertFunctionConstructor],
    ["import-blacklist", convertImportBlacklist],
    ["increment-decrement", convertIncrementDecrement],
    ["indent", convertIndent],
    ["interface-name", convertInterfaceName],
    ["interface-over-type-literal", convertInterfaceOverTypeLiteral],
    ["jsdoc-format", convertJSDocFormat],
    ["jsx-boolean-value", convertJsxBooleanValue],
    ["jsx-curly-spacing", convertJsxCurlySpacing],
    ["jsx-equals-spacing", convertJsxEqualsSpacing],
    ["jsx-key", convertJsxKey],
    ["jsx-no-bind", convertJsxNoBind],
    ["jsx-wrap-multiline", convertJsxWrapMultiline],
    ["label-position", convertLabelPosition],
    ["linebreak-style", convertLinebreakStyle],
    ["max-classes-per-file", convertMaxClassesPerFile],
    ["max-file-line-count", convertMaxFileLineCount],
    ["max-line-length", convertMaxLineLength],
    ["member-access", convertMemberAccess],
    ["member-ordering", convertMemberOrdering],
    ["new-parens", convertNewParens],
    ["newline-before-return", convertNewlineBeforeReturn],
    ["newline-per-chained-call", convertNewlinePerChainedCall],
    ["no-angle-bracket-type-assertion", convertNoAngleBracketTypeAssertion],
    ["no-any", convertNoExplicitAny],
    ["no-arg", convertNoArg],
    ["no-async-without-await", convertNoAsyncWithoutAwait],
    ["no-attribute-decorator", convertNoAttributeDecorator],
    ["no-banned-terms", convertNoBannedTerms],
    ["no-bitwise", convertNoBitwise],
    ["no-boolean-literal-compare", convertNoBooleanLiteralCompare],
    ["no-conditional-assignment", convertNoConditionalAssignment],
    ["no-conflicting-lifecycle", convertNoConflictingLifecycle],
    ["no-consecutive-blank-lines", convertNoConsecutiveBlankLines],
    ["no-console", convertNoConsole],
    ["no-constant-condition", convertNoConstantCondition],
    ["no-construct", convertNoConstruct],
    ["no-control-regex", convertNoControlRegex],
    ["no-debugger", convertNoDebugger],
    ["no-default-export", convertNoDefaultExport],
    ["no-duplicate-imports", convertNoDuplicateImports],
    ["no-duplicate-super", convertNoDuplicateSuper],
    ["no-duplicate-switch-case", convertNoDuplicateSwitchCase],
    ["no-duplicate-variable", convertNoDuplicateVariable],
    ["no-empty-interface", convertNoEmptyInterface],
    ["no-empty", convertNoEmpty],
    ["no-eval", convertNoEval],
    ["no-floating-promises", convertNoFloatingPromises],
    ["no-for-in-array", convertNoForInArray],
    ["no-for-in", convertNoForIn],
    ["no-forward-ref", convertNoForwardRef],
    ["no-host-metadata-property", convertNoHostMetadataProperty],
    ["no-implicit-dependencies", convertNoImplicitDependencies],
    ["no-import-side-effect", convertNoImportSideEffect],
    ["no-inferrable-types", convertNoInferrableTypes],
    ["no-input-prefix", convertNoInputPrefix],
    ["no-input-rename", convertNoInputRename],
    ["no-inputs-metadata-property", convertNoInputsMetadataProperty],
    ["no-internal-module", convertNoInternalModule],
    ["no-invalid-regexp", convertNoInvalidRegexp],
    ["no-invalid-template-strings", convertNoInvalidTemplateStrings],
    ["no-invalid-this", convertNoInvalidThis],
    ["no-irregular-whitespace", convertNoIrregularWhitespace],
    ["no-lifecycle-call", convertNoLifecycleCall],
    ["no-magic-numbers", convertNoMagicNumbers],
    ["no-misused-new", convertNoMisusedNew],
    ["no-multiline-string", convertNoMultilineString],
    ["no-namespace", convertNoNamespace],
    ["no-non-null-assertion", convertNoNonNullAssertion],
    ["no-null-keyword", convertNoNullKeyword],
    ["no-object-literal-type-assertion", convertNoObjectLiteralTypeAssertion],
    ["no-octal-literal", convertNoOctalLiteral],
    ["no-output-native", convertNoOutputNative],
    ["no-output-native", convertNoOutputNative],
    ["no-output-on-prefix", convertNoOutputOnPrefix],
    ["no-output-rename", convertNoOutputRename],
    ["no-outputs-metadata-property", convertNoOutputsMetadataProperty],
    ["no-parameter-properties", convertNoParameterProperties],
    ["no-parameter-reassignment", convertNoParameterReassignment],
    ["no-pipe-impure", convertNoPipeImpure],
    ["no-queries-metadata-property", convertNoQueriesMetadataProperty],
    ["no-redundant-jsdoc", convertNoRedundantJsdoc],
    ["no-reference-import", convertNoReferenceImport],
    ["no-reference", convertNoReference],
    ["no-regex-spaces", convertNoRegexSpaces],
    ["no-require-imports", convertNoRequireImports],
    ["no-return-await", convertNoReturnAwait],
    ["no-shadowed-variable", convertNoShadowedVariable],
    ["no-sparse-arrays", convertNoSparseArrays],
    ["no-string-literal", convertNoStringLiteral],
    ["no-string-throw", convertNoStringThrow],
    ["no-submodule-imports", convertNoSubmoduleImports],
    ["no-switch-case-fall-through", convertNoSwitchCaseFallThrough],
    ["no-this-assignment", convertNoThisAssignment],
    ["no-trailing-whitespace", convertNoTrailingWhitespace],
    ["no-unbound-method", convertNoUnboundMethod],
    ["no-unnecessary-class", convertNoUnnecessaryClass],
    ["no-unnecessary-initializer", convertNoUnnecessaryInitializer],
    ["no-unnecessary-qualifier", convertNoUnnecessaryQualifier],
    ["no-unnecessary-semicolons", convertNoUnnecessarySemicolons],
    ["no-unnecessary-type-assertion", convertNoUnnecessaryTypeAssertion],
    ["no-unsafe-finally", convertNoUnsafeFinally],
    ["no-unused-expression", convertNoUnusedExpression],
    ["no-unused-variable", convertNoUnusedVariable],
    ["no-use-before-declare", convertNoUseBeforeDeclare],
    ["no-var-keyword", convertNoVarKeyword],
    ["no-var-requires", convertNoVarRequires],
    ["no-void-expression", convertNoVoidExpression],
    ["object-literal-key-quotes", convertObjectLiteralKeyQuotes],
    ["object-literal-shorthand", convertObjectLiteralShorthand],
    ["one-line", convertOneLine],
    ["one-variable-per-declaration", convertOneVariablePerDeclaration],
    ["only-arrow-functions", convertOnlyArrowFunctions],
    ["ordered-imports", convertOrderedImports],
    ["pipe-prefix", convertPipePrefix],
    ["prefer-const", convertPreferConst],
    ["prefer-for-of", convertPreferForOf],
    ["prefer-function-over-method", convertPreferFunctionOverMethod],
    ["prefer-object-spread", convertPreferObjectSpread],
    ["prefer-on-push-component-change-detection", convertPreferOnPushComponentChangeDetection],
    ["prefer-output-readonly", convertPreferOutputReadonly],
    ["prefer-readonly", convertPreferReadonly],
    ["prefer-template", convertPreferTemplate],
    ["promise-function-async", convertPromiseFunctionAsync],
    ["quotemark", convertQuotemark],
    ["radix", convertRadix],
    ["relative-url-prefix", convertRelativeUrlPrefix],
    ["restrict-plus-operands", convertRestrictPlusOperands],
    ["semicolon", convertSemicolon],
    ["space-before-function-paren", convertSpaceBeforeFunctionParen],
    ["space-within-parens", convertSpaceWithinParens],
    ["strict-boolean-expressions", convertStrictBooleanExpressions],
    ["switch-default", convertSwitchDefault],
    ["template-accessibility-tabindex-no-positive", convertTemplateAccessibilityTabindexNoPositive],
    ["template-banana-in-box", convertTemplateBananaInBox],
    ["template-cyclomatic-complexity", convertTemplateCyclomaticComplexity],
    ["template-no-autofocus", convertTemplateNoAutofocus],
    ["template-no-call-expression", convertTemplateNoCallExpression],
    ["template-no-negated-async", convertTemplateNoNegatedAsync],
    ["trailing-comma", convertTrailingComma],
    ["triple-equals", convertTripleEquals],
    ["type-literal-delimiter", convertTypeLiteralDelimiter],
    ["typedef-whitespace", convertTypedefWhitespace],
    ["typeof-compare", convertTypeofCompare],
    ["unified-signatures", convertUnifiedSignatures],
    ["unnecessary-bind", convertUnnecessaryBind],
    ["unnecessary-constructor", convertUnnecessaryConstructor],
    ["use-component-selector", convertUseComponentSelector],
    ["use-component-view-encapsulation", convertUseComponentViewEncapsulation],
    ["use-default-type-parameter", convertUseDefaultTypeParameter],
    ["use-injectable-provided-in", convertUseInjectableProvidedIn],
    ["use-isnan", convertUseIsnan],
    ["use-lifecycle-interface", convertUseLifecycleInterface],
    ["use-pipe-decorator", convertUsePipeDecorator],
    ["use-pipe-transform-interface", convertUsePipeTransformInterface],
    ["variable-name", convertVariableName],
    ["rxjs-no-async-subscribe", convertNoAsyncSubscribe],
    ["rxjs-no-ignored-replay-buffer", convertNoIgnoredReplayBuffer],
    ["rxjs-no-ignored-takewhile-value", convertNoIgnoredTakeWhileValue],
    ["rxjs-no-redundant-notify", convertNoRedundantNotify],
    ["rxjs-no-sharereplay", convertNoShareReplay],
    ["rxjs-no-unsafe-subject-next", convertNoUnsafeSubjectNext],

    // These converters are all for rules that need more complex option conversions.
    // Some of them will likely need to have notices about changed lint behaviors...
    // If you're willing to take on that work, that'd be great! Please send PRs! 💖
    // As these are enabled, they should be added in sorted order to the list above.

    // TSLint core rules:
    // ["ban", convertBan], // no-restricted-properties

    // tslint-microsoft-contrib rules:
    // ["max-func-body-length", convertMaxFuncBodyLength],
    // ["no-empty-line-after-opening-brace", convertNoEmptyLineAfterOpeningBrace], // padded-blocks
    // ["no-function-expression", convertNoFunctionExpression], // ban-syntax config
    // ["no-suspicious-comment", convertNoSuspiciousComment],
    // ["no-with-statement", convertNoWithStatement],
]);
