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
import { convertComponentClassSuffix } from "./ruleConverters/codelyzer/component-class-suffix";
import { convertComponentMaxInlineDeclarations } from "./ruleConverters/codelyzer/component-max-inline-declarations";
import { convertComponentSelector } from "./ruleConverters/codelyzer/component-selector";
import { convertContextualDecorator } from "./ruleConverters/codelyzer/contextual-decorator";
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
import { convertTemplateAccessibilityAltText } from "./ruleConverters/codelyzer/template-accessibility-alt-text";
import { convertTemplateAccessibilityElementsContent } from "./ruleConverters/codelyzer/template-accessibility-elements-content";
import { convertTemplateAccessibilityLabelFor } from "./ruleConverters/codelyzer/template-accessibility-label-for";
import { convertTemplateAccessibilityTabindexNoPositive } from "./ruleConverters/codelyzer/template-accessibility-tabindex-no-positive";
import { convertTemplateAccessibilityTableScope } from "./ruleConverters/codelyzer/template-accessibility-table-scope";
import { convertTemplateAccessibilityValidAria } from "./ruleConverters/codelyzer/template-accessibility-valid-aria";
import { convertTemplateBananaInBox } from "./ruleConverters/codelyzer/template-banana-in-box";
import { convertTemplateClickEventsHaveKeyEvents } from "./ruleConverters/codelyzer/template-click-events-have-key-events";
import { convertTemplateConditionalComplexity } from "./ruleConverters/codelyzer/template-conditional-complexity";
import { convertTemplateCyclomaticComplexity } from "./ruleConverters/codelyzer/template-cyclomatic-complexity";
import { convertTemplateI18N } from "./ruleConverters/codelyzer/template-i18n";
import { convertTemplateMouseEventsHaveKeyEvents } from "./ruleConverters/codelyzer/template-mouse-events-have-key-events";
import { convertTemplateNoAny } from "./ruleConverters/codelyzer/template-no-any";
import { convertTemplateNoAutofocus } from "./ruleConverters/codelyzer/template-no-autofocus";
import { convertTemplateNoCallExpression } from "./ruleConverters/codelyzer/template-no-call-expression";
import { convertTemplateNoDistractingElements } from "./ruleConverters/codelyzer/template-no-distracting-elements";
import { convertTemplateNoNegatedAsync } from "./ruleConverters/codelyzer/template-no-negated-async";
import { convertTemplateUseTrackByFunction } from "./ruleConverters/codelyzer/template-use-track-by-function";
import { convertUseComponentSelector } from "./ruleConverters/codelyzer/use-component-selector";
import { convertUseComponentViewEncapsulation } from "./ruleConverters/codelyzer/use-component-view-encapsulation";
import { convertUseInjectableProvidedIn } from "./ruleConverters/codelyzer/use-injectable-provided-in";
import { convertUseLifecycleInterface } from "./ruleConverters/codelyzer/use-lifecycle-interface";
import { convertUsePipeDecorator } from "./ruleConverters/codelyzer/use-pipe-decorator";
import { convertUsePipeTransformInterface } from "./ruleConverters/codelyzer/use-pipe-transform-interface";
import { convertCommentFormat } from "./ruleConverters/comment-format";
import { convertCurly } from "./ruleConverters/curly";
import { convertCyclomaticComplexity } from "./ruleConverters/cyclomatic-complexity";
import { convertDeprecation } from "./ruleConverters/deprecation";
import { convertEofline } from "./ruleConverters/eofline";
import { convertActionHygiene } from "./ruleConverters/eslint-plugin-ngrx/action-hygiene";
import { convertAvoidDispatchingMultipleActionsSequentially } from "./ruleConverters/eslint-plugin-ngrx/avoid-dispatching-multiple-actions-sequentially";
import { convertEffectCreatorAndDecorator } from "./ruleConverters/eslint-plugin-ngrx/effect-creator-and-decorator";
import { convertNoDispatchInEffects } from "./ruleConverters/eslint-plugin-ngrx/no-dispatch-in-effects";
import { convertNoEffectDecorator } from "./ruleConverters/eslint-plugin-ngrx/no-effect-decorator";
import { convertNoEffectsInProviders } from "./ruleConverters/eslint-plugin-ngrx/no-effects-in-providers";
import { convertNoMultipleActionsInEffects } from "./ruleConverters/eslint-plugin-ngrx/no-multiple-actions-in-effects";
import { convertNoReducerInKeyNames } from "./ruleConverters/eslint-plugin-ngrx/no-reducer-in-key-names";
import { convertNoTypedStore } from "./ruleConverters/eslint-plugin-ngrx/no-typed-store";
import { convertOnReducerExplicitReturnType } from "./ruleConverters/eslint-plugin-ngrx/on-reducer-explicit-return-type";
import { convertSelectorForSelect } from "./ruleConverters/eslint-plugin-ngrx/selector-for-select";
import { convertJsxBanProps } from "./ruleConverters/eslint-plugin-react/jsx-ban-props";
import { convertJsxBooleanValue } from "./ruleConverters/eslint-plugin-react/jsx-boolean-value";
import { convertJsxCurlySpacing } from "./ruleConverters/eslint-plugin-react/jsx-curly-spacing";
import { convertJsxEqualsSpacing } from "./ruleConverters/eslint-plugin-react/jsx-equals-spacing";
import { convertJsxKey } from "./ruleConverters/eslint-plugin-react/jsx-key";
import { convertJsxNoBind } from "./ruleConverters/eslint-plugin-react/jsx-no-bind";
import { convertJsxNoLambda } from "./ruleConverters/eslint-plugin-react/jsx-no-lambda";
import { convertJsxSelfClose } from "./ruleConverters/eslint-plugin-react/jsx-self-close";
import { convertJsxSpaceBeforeTrailingSlash } from "./ruleConverters/eslint-plugin-react/jsx-space-before-trailing-slash";
import { convertJsxWrapMultiline } from "./ruleConverters/eslint-plugin-react/jsx-wrap-multiline";
import { convertNoAsyncSubscribe } from "./ruleConverters/eslint-plugin-rxjs/no-async-subscribe";
import { convertNoCreate } from "./ruleConverters/eslint-plugin-rxjs/no-create";
import { convertNoExposedSubjects } from "./ruleConverters/eslint-plugin-rxjs/no-exposed-subjects";
import { convertNoFinnish } from "./ruleConverters/eslint-plugin-rxjs/no-finnish";
import { convertNoIgnoredNotifier } from "./ruleConverters/eslint-plugin-rxjs/no-ignored-notifier";
import { convertNoIgnoredReplayBuffer } from "./ruleConverters/eslint-plugin-rxjs/no-ignored-replay-buffer";
import { convertNoIgnoredSubscription } from "./ruleConverters/eslint-plugin-rxjs/no-ignored-subscription";
import { convertNoIgnoredTakeWhileValue } from "./ruleConverters/eslint-plugin-rxjs/no-ignored-takewhile-value";
import { convertNoImplicitAnyCatch } from "./ruleConverters/eslint-plugin-rxjs/no-implicit-any-catch";
import { convertNoIndex } from "./ruleConverters/eslint-plugin-rxjs/no-index";
import { convertNoInternal } from "./ruleConverters/eslint-plugin-rxjs/no-internal";
import { convertNoNestedSubscribe } from "./ruleConverters/eslint-plugin-rxjs/no-nested-subscribe";
import { convertNoRedundantNotify } from "./ruleConverters/eslint-plugin-rxjs/no-redundant-notify";
import { convertNoShareReplay } from "./ruleConverters/eslint-plugin-rxjs/no-sharereplay";
import { convertNoSubjectUnubscribe } from "./ruleConverters/eslint-plugin-rxjs/no-subject-unsubscribe";
import { convertNoSubjectValue } from "./ruleConverters/eslint-plugin-rxjs/no-subject-value";
import { convertNoUnboundMethods } from "./ruleConverters/eslint-plugin-rxjs/no-unbound-methods";
import { convertNoUnsafeSubjectNext } from "./ruleConverters/eslint-plugin-rxjs/no-unsafe-subject-next";
import { convertNoUnsafeTakeUntil } from "./ruleConverters/eslint-plugin-rxjs/no-unsafe-takeuntil";
import { convertCognitiveComplexity } from "./ruleConverters/eslint-plugin-sonarjs/cognitive-complexity";
import { convertConsecutiveOverloads } from "./ruleConverters/eslint-plugin-sonarjs/consecutive-overloads";
import { convertMaxSwitchCases } from "./ruleConverters/eslint-plugin-sonarjs/max-switch-cases";
import { convertNoAllDuplicatedBranches } from "./ruleConverters/eslint-plugin-sonarjs/no-all-duplicated-branches";
import { convertNoAlphabeticalSort } from "./ruleConverters/eslint-plugin-sonarjs/no-alphabetical-sort";
import { convertNoBigFunction } from "./ruleConverters/eslint-plugin-sonarjs/no-big-function";
import { convertNoCollapsibleIf } from "./ruleConverters/eslint-plugin-sonarjs/no-collapsible-if";
import { convertNoCollectionSizeMischeck } from "./ruleConverters/eslint-plugin-sonarjs/no-collection-size-mischeck";
import { convertNoDuplicateString } from "./ruleConverters/eslint-plugin-sonarjs/no-duplicate-string";
import { convertNoDuplicatedBranches } from "./ruleConverters/eslint-plugin-sonarjs/no-duplicated-branches";
import { convertNoElementOverwrite } from "./ruleConverters/eslint-plugin-sonarjs/no-element-overwrite";
import { convertNoEmptyDestructuring } from "./ruleConverters/eslint-plugin-sonarjs/no-empty-destructuring";
import { convertNoEmptyNestedBlocks } from "./ruleConverters/eslint-plugin-sonarjs/no-empty-nested-blocks";
import { convertNoExtraSemicolon } from "./ruleConverters/eslint-plugin-sonarjs/no-extra-semicolon";
import { convertNoIdenticalConditions } from "./ruleConverters/eslint-plugin-sonarjs/no-identical-conditions";
import { convertNoIdenticalExpressions } from "./ruleConverters/eslint-plugin-sonarjs/no-identical-expressions";
import { convertNoIdenticalFunctions } from "./ruleConverters/eslint-plugin-sonarjs/no-identical-functions";
import { convertNoInMisuse } from "./ruleConverters/eslint-plugin-sonarjs/no-in-misuse";
import { convertNoInvalidAwait } from "./ruleConverters/eslint-plugin-sonarjs/no-invalid-await";
import { convertNoInvertedBooleanCheck } from "./ruleConverters/eslint-plugin-sonarjs/no-inverted-boolean-check";
import { convertNoMultilineStringLiterals } from "./ruleConverters/eslint-plugin-sonarjs/no-multiline-string-literals";
import { convertNoRedundantBoolean } from "./ruleConverters/eslint-plugin-sonarjs/no-redundant-boolean";
import { convertNoRedundantJump } from "./ruleConverters/eslint-plugin-sonarjs/no-redundant-jump";
import { convertNoRedundantParentheses } from "./ruleConverters/eslint-plugin-sonarjs/no-redundant-parentheses";
import { convertNoSameLineConditional } from "./ruleConverters/eslint-plugin-sonarjs/no-same-line-conditional";
import { convertNoSelfAssignment } from "./ruleConverters/eslint-plugin-sonarjs/no-self-assignment";
import { convertNoSmallSwitch } from "./ruleConverters/eslint-plugin-sonarjs/no-small-switch";
import { convertNoUnconditionalJump } from "./ruleConverters/eslint-plugin-sonarjs/no-unconditional-jump";
import { convertNoUnusedArray } from "./ruleConverters/eslint-plugin-sonarjs/no-unused-array";
import { convertNoUseOfEmptyReturnValue } from "./ruleConverters/eslint-plugin-sonarjs/no-use-of-empty-return-value";
import { convertNoUselessCast } from "./ruleConverters/eslint-plugin-sonarjs/no-useless-cast";
import { convertNoUselessCatch } from "./ruleConverters/eslint-plugin-sonarjs/no-useless-catch";
import { convertNoVariableUsageBeforeDeclaration } from "./ruleConverters/eslint-plugin-sonarjs/no-variable-usage-before-declaration";
import { convertParametersMaxNumber } from "./ruleConverters/eslint-plugin-sonarjs/parameters-max-number";
import { convertPreferDefaultLast } from "./ruleConverters/eslint-plugin-sonarjs/prefer-default-last";
import { convertPreferImmediateReturn } from "./ruleConverters/eslint-plugin-sonarjs/prefer-immediate-return";
import { convertUsePrimitiveType } from "./ruleConverters/eslint-plugin-sonarjs/use-primitive-type";
import { convertFileNameCasing } from "./ruleConverters/file-name-casing";
import { convertForin } from "./ruleConverters/forin";
import { convertFunctionConstructor } from "./ruleConverters/function-constructor";
import { convertImportBlacklist } from "./ruleConverters/import-blacklist";
import { convertImportDestructuringSpacing } from "./ruleConverters/import-destructuring-spacing";
import { convertIncrementDecrement } from "./ruleConverters/increment-decrement";
import { convertIndent } from "./ruleConverters/indent";
import { convertInterfaceName } from "./ruleConverters/interface-name";
import { convertInterfaceOverTypeLiteral } from "./ruleConverters/interface-over-type-literal";
import { convertJSDocFormat } from "./ruleConverters/jsdoc-format";
import { convertLabelPosition } from "./ruleConverters/label-position";
import { convertLinebreakStyle } from "./ruleConverters/linebreak-style";
import { convertMaxClassesPerFile } from "./ruleConverters/max-classes-per-file";
import { convertMaxFileLineCount } from "./ruleConverters/max-file-line-count";
import { convertMaxFuncBodyLength } from "./ruleConverters/max-func-body-length";
import { convertMaxLineLength } from "./ruleConverters/max-line-length";
import { convertMemberAccess } from "./ruleConverters/member-access";
import { convertMemberOrdering } from "./ruleConverters/member-ordering";
import { convertMochaAvoidOnly } from "./ruleConverters/mocha-avoid-only";
import { convertNewParens } from "./ruleConverters/new-parens";
import { convertNewlineBeforeReturn } from "./ruleConverters/newline-before-return";
import { convertNewlinePerChainedCall } from "./ruleConverters/newline-per-chained-call";
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
import { convertNoCookies } from "./ruleConverters/no-cookies";
import { convertNoDebugger } from "./ruleConverters/no-debugger";
import { convertNoDefaultExport } from "./ruleConverters/no-default-export";
import { convertNoDeleteExpression } from "./ruleConverters/no-delete-expression";
import { convertNoDocumentDomain } from "./ruleConverters/no-document-domain";
import { convertNoDocumentWrite } from "./ruleConverters/no-document-write";
import { convertNoDuplicateImports } from "./ruleConverters/no-duplicate-imports";
import { convertNoDuplicateSuper } from "./ruleConverters/no-duplicate-super";
import { convertNoDuplicateSwitchCase } from "./ruleConverters/no-duplicate-switch-case";
import { convertNoDuplicateVariable } from "./ruleConverters/no-duplicate-variable";
import { convertNoDynamicDelete } from "./ruleConverters/no-dynamic-delete";
import { convertNoEmpty } from "./ruleConverters/no-empty";
import { convertNoEmptyInterface } from "./ruleConverters/no-empty-interface";
import { convertNoEmptyLineAfterOpeningBrace } from "./ruleConverters/no-empty-line-after-opening-brace";
import { convertNoEval } from "./ruleConverters/no-eval";
import { convertNoExecScript } from "./ruleConverters/no-exec-script";
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
import { convertNoSuspiciousComment } from "./ruleConverters/no-suspicious-comment";
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
import { convertNoWithStatement } from "./ruleConverters/no-with-statement";
import { convertNonLiteralFsPath } from "./ruleConverters/non-literal-fs-path";
import { convertNonLiteralRequire } from "./ruleConverters/non-literal-require";
import { convertObjectLiteralKeyQuotes } from "./ruleConverters/object-literal-key-quotes";
import { convertObjectLiteralShorthand } from "./ruleConverters/object-literal-shorthand";
import { convertOneLine } from "./ruleConverters/one-line";
import { convertOneVariablePerDeclaration } from "./ruleConverters/one-variable-per-declaration";
import { convertOnlyArrowFunctions } from "./ruleConverters/only-arrow-functions";
import { convertOrderedImports } from "./ruleConverters/ordered-imports";
import { convertPossibleTimingAttack } from "./ruleConverters/possible-timing-attack";
import { convertPreferArrayLiteral } from "./ruleConverters/prefer-array-literal";
import { convertPreferConditionalExpression } from "./ruleConverters/prefer-conditional-expression";
import { convertPreferConst } from "./ruleConverters/prefer-const";
import { convertPreferForOf } from "./ruleConverters/prefer-for-of";
import { convertPreferFunctionOverMethod } from "./ruleConverters/prefer-function-over-method";
import { convertPreferInlineDecorator } from "./ruleConverters/prefer-inline-decorator";
import { convertPreferObjectSpread } from "./ruleConverters/prefer-object-spread";
import { convertPreferReadonly } from "./ruleConverters/prefer-readonly";
import { convertPreferSwitch } from "./ruleConverters/prefer-switch";
import { convertPreferTemplate } from "./ruleConverters/prefer-template";
import { convertPromiseFunctionAsync } from "./ruleConverters/promise-function-async";
import { convertQuotemark } from "./ruleConverters/quotemark";
import { convertRadix } from "./ruleConverters/radix";
import { convertReactA11yAccessibleHeadings } from "./ruleConverters/react-a11y-accessible-headings";
import { convertReactA11yAnchors } from "./ruleConverters/react-a11y-anchors";
import { convertReactA11yAriaUnsupportedElements } from "./ruleConverters/react-a11y-aria-unsupported-elements";
import { convertReactA11yEventHasRole } from "./ruleConverters/react-a11y-event-has-role";
import { convertReactA11yImageButtonHasAlt } from "./ruleConverters/react-a11y-image-button-has-alt";
import { convertReactA11yImgHasAlt } from "./ruleConverters/react-a11y-img-has-alt";
import { convertReactA11yLang } from "./ruleConverters/react-a11y-lang";
import { convertReactA11yProps } from "./ruleConverters/react-a11y-props";
import { convertReactA11yProptypes } from "./ruleConverters/react-a11y-proptypes";
import { convertReactA11yRole } from "./ruleConverters/react-a11y-role";
import { convertReactA11yRoleHasRequiredAriaProps } from "./ruleConverters/react-a11y-role-has-required-aria-props";
import { convertReactA11yRoleSupportsAriaProps } from "./ruleConverters/react-a11y-role-supports-aria-props";
import { convertReactA11yTabIndexNoPositive } from "./ruleConverters/react-a11y-tabindex-no-positive";
import { convertReactNoDangerousHtml } from "./ruleConverters/react-no-dangerous-html";
import { convertReactTsxCurlySpacing } from "./ruleConverters/react-tsx-curly-spacing";
import { convertRestrictPlusOperands } from "./ruleConverters/restrict-plus-operands";
import { convertSemicolon } from "./ruleConverters/semicolon";
import { convertSpaceBeforeFunctionParen } from "./ruleConverters/space-before-function-paren";
import { convertSpaceWithinParens } from "./ruleConverters/space-within-parens";
import { convertStrictBooleanExpressions } from "./ruleConverters/strict-boolean-expressions";
import { convertSwitchDefault } from "./ruleConverters/switch-default";
import { convertTrailingComma } from "./ruleConverters/trailing-comma";
import { convertTripleEquals } from "./ruleConverters/triple-equals";
import { convertTypeLiteralDelimiter } from "./ruleConverters/type-literal-delimiter";
import { convertTypedefWhitespace } from "./ruleConverters/typedef-whitespace";
import { convertTypeofCompare } from "./ruleConverters/typeof-compare";
import { convertUnderscoreConsistentInvocation } from "./ruleConverters/underscore-consistent-invocation";
import { convertUnifiedSignatures } from "./ruleConverters/unified-signatures";
import { convertUnnecessaryBind } from "./ruleConverters/unnecessary-bind";
import { convertUnnecessaryConstructor } from "./ruleConverters/unnecessary-constructor";
import { convertUseDefaultTypeParameter } from "./ruleConverters/use-default-type-parameter";
import { convertUseIsnan } from "./ruleConverters/use-isnan";
import { convertVariableName } from "./ruleConverters/variable-name";

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
    ["cognitive-complexity", convertCognitiveComplexity],
    ["comment-format", convertCommentFormat],
    ["component-class-suffix", convertComponentClassSuffix],
    ["component-max-inline-declarations", convertComponentMaxInlineDeclarations],
    ["component-selector", convertComponentSelector],
    ["consecutive-overloads", convertConsecutiveOverloads],
    ["contextual-decorator", convertContextualDecorator],
    ["contextual-lifecycle", convertContextualLifecycle],
    ["convert-react-a11y-accessible-headings", convertReactA11yAccessibleHeadings],
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
    ["import-destructuring-spacing", convertImportDestructuringSpacing],
    ["increment-decrement", convertIncrementDecrement],
    ["indent", convertIndent],
    ["interface-name", convertInterfaceName],
    ["interface-over-type-literal", convertInterfaceOverTypeLiteral],
    ["jsdoc-format", convertJSDocFormat],
    ["jsx-ban-props", convertJsxBanProps],
    ["jsx-boolean-value", convertJsxBooleanValue],
    ["jsx-curly-spacing", convertJsxCurlySpacing],
    ["jsx-equals-spacing", convertJsxEqualsSpacing],
    ["jsx-key", convertJsxKey],
    ["jsx-no-bind", convertJsxNoBind],
    ["jsx-no-lambda", convertJsxNoLambda],
    ["jsx-self-close", convertJsxSelfClose],
    ["jsx-space-before-trailing-slash", convertJsxSpaceBeforeTrailingSlash],
    ["jsx-wrap-multiline", convertJsxWrapMultiline],
    ["label-position", convertLabelPosition],
    ["linebreak-style", convertLinebreakStyle],
    ["max-classes-per-file", convertMaxClassesPerFile],
    ["max-file-line-count", convertMaxFileLineCount],
    ["max-func-body-length", convertMaxFuncBodyLength],
    ["max-line-length", convertMaxLineLength],
    ["max-switch-cases", convertMaxSwitchCases],
    ["member-access", convertMemberAccess],
    ["member-ordering", convertMemberOrdering],
    ["mocha-avoid-only", convertMochaAvoidOnly],
    ["new-parens", convertNewParens],
    ["newline-before-return", convertNewlineBeforeReturn],
    ["newline-per-chained-call", convertNewlinePerChainedCall],
    ["ngrx-action-hygiene", convertActionHygiene],
    [
        "ngrx-avoid-dispatching-multiple-actions-sequentially",
        convertAvoidDispatchingMultipleActionsSequentially,
    ],
    ["ngrx-effect-creator-and-decorator", convertEffectCreatorAndDecorator],
    ["ngrx-no-dispatch-in-effects", convertNoDispatchInEffects],
    ["ngrx-no-effect-decorator", convertNoEffectDecorator],
    ["ngrx-no-effects-in-providers", convertNoEffectsInProviders],
    ["ngrx-no-multiple-actions-in-effects", convertNoMultipleActionsInEffects],
    ["ngrx-no-reducer-in-key-names", convertNoReducerInKeyNames],
    ["ngrx-no-reducer-in-key-names", convertNoReducerInKeyNames],
    ["ngrx-no-typed-store", convertNoTypedStore],
    ["ngrx-on-reducer-explicit-return-type", convertOnReducerExplicitReturnType],
    ["ngrx-selector-for-select", convertSelectorForSelect],
    ["no-all-duplicated-branches", convertNoAllDuplicatedBranches],
    ["no-alphabetical-sort", convertNoAlphabeticalSort],
    ["no-angle-bracket-type-assertion", convertNoAngleBracketTypeAssertion],
    ["no-any", convertNoExplicitAny],
    ["no-arg", convertNoArg],
    ["no-async-without-await", convertNoAsyncWithoutAwait],
    ["no-attribute-decorator", convertNoAttributeDecorator],
    ["no-banned-terms", convertNoBannedTerms],
    ["no-big-function", convertNoBigFunction],
    ["no-bitwise", convertNoBitwise],
    ["no-boolean-literal-compare", convertNoBooleanLiteralCompare],
    ["no-collapsible-if", convertNoCollapsibleIf],
    ["no-collection-size-mischeck", convertNoCollectionSizeMischeck],
    ["no-conditional-assignment", convertNoConditionalAssignment],
    ["no-conflicting-lifecycle", convertNoConflictingLifecycle],
    ["no-consecutive-blank-lines", convertNoConsecutiveBlankLines],
    ["no-console", convertNoConsole],
    ["no-constant-condition", convertNoConstantCondition],
    ["no-construct", convertNoConstruct],
    ["no-control-regex", convertNoControlRegex],
    ["no-cookies", convertNoCookies],
    ["no-debugger", convertNoDebugger],
    ["no-default-export", convertNoDefaultExport],
    ["no-delete-expression", convertNoDeleteExpression],
    ["no-document-domain", convertNoDocumentDomain],
    ["no-document-write", convertNoDocumentWrite],
    ["no-duplicate-imports", convertNoDuplicateImports],
    ["no-duplicate-string", convertNoDuplicateString],
    ["no-duplicate-super", convertNoDuplicateSuper],
    ["no-duplicate-switch-case", convertNoDuplicateSwitchCase],
    ["no-duplicate-variable", convertNoDuplicateVariable],
    ["no-duplicated-branches", convertNoDuplicatedBranches],
    ["no-dynamic-delete", convertNoDynamicDelete],
    ["no-element-overwrite", convertNoElementOverwrite],
    ["no-empty-destructuring", convertNoEmptyDestructuring],
    ["no-empty-interface", convertNoEmptyInterface],
    ["no-empty-line-after-opening-brace", convertNoEmptyLineAfterOpeningBrace],
    ["no-empty-nested-blocks", convertNoEmptyNestedBlocks],
    ["no-empty", convertNoEmpty],
    ["no-eval", convertNoEval],
    ["no-exec-script", convertNoExecScript],
    ["no-extra-semicolon", convertNoExtraSemicolon],
    ["no-floating-promises", convertNoFloatingPromises],
    ["no-for-in-array", convertNoForInArray],
    ["no-for-in", convertNoForIn],
    ["no-forward-ref", convertNoForwardRef],
    ["no-host-metadata-property", convertNoHostMetadataProperty],
    ["no-identical-conditions", convertNoIdenticalConditions],
    ["no-identical-expressions", convertNoIdenticalExpressions],
    ["no-identical-functions", convertNoIdenticalFunctions],
    ["no-implicit-dependencies", convertNoImplicitDependencies],
    ["no-import-side-effect", convertNoImportSideEffect],
    ["no-in-misuse", convertNoInMisuse],
    ["no-inferrable-types", convertNoInferrableTypes],
    ["no-input-prefix", convertNoInputPrefix],
    ["no-input-rename", convertNoInputRename],
    ["no-inputs-metadata-property", convertNoInputsMetadataProperty],
    ["no-internal-module", convertNoInternalModule],
    ["no-invalid-await", convertNoInvalidAwait],
    ["no-invalid-regexp", convertNoInvalidRegexp],
    ["no-invalid-template-strings", convertNoInvalidTemplateStrings],
    ["no-invalid-this", convertNoInvalidThis],
    ["no-inverted-boolean-check", convertNoInvertedBooleanCheck],
    ["no-irregular-whitespace", convertNoIrregularWhitespace],
    ["no-lifecycle-call", convertNoLifecycleCall],
    ["no-magic-numbers", convertNoMagicNumbers],
    ["no-misused-new", convertNoMisusedNew],
    ["no-multiline-string-literals", convertNoMultilineStringLiterals],
    ["no-multiline-string", convertNoMultilineString],
    ["no-namespace", convertNoNamespace],
    ["non-literal-fs-path", convertNonLiteralFsPath],
    ["no-non-null-assertion", convertNoNonNullAssertion],
    ["no-null-keyword", convertNoNullKeyword],
    ["no-object-literal-type-assertion", convertNoObjectLiteralTypeAssertion],
    ["no-octal-literal", convertNoOctalLiteral],
    ["no-output-native", convertNoOutputNative],
    ["no-output-on-prefix", convertNoOutputOnPrefix],
    ["no-output-rename", convertNoOutputRename],
    ["no-outputs-metadata-property", convertNoOutputsMetadataProperty],
    ["no-parameter-properties", convertNoParameterProperties],
    ["no-parameter-reassignment", convertNoParameterReassignment],
    ["no-pipe-impure", convertNoPipeImpure],
    ["no-queries-metadata-property", convertNoQueriesMetadataProperty],
    ["no-redundant-boolean", convertNoRedundantBoolean],
    ["no-redundant-jsdoc", convertNoRedundantJsdoc],
    ["no-redundant-jump", convertNoRedundantJump],
    ["no-redundant-parentheses", convertNoRedundantParentheses],
    ["no-reference-import", convertNoReferenceImport],
    ["no-reference", convertNoReference],
    ["no-regex-spaces", convertNoRegexSpaces],
    ["no-require-imports", convertNoRequireImports],
    ["no-return-await", convertNoReturnAwait],
    ["no-same-line-conditional", convertNoSameLineConditional],
    ["no-self-assignment", convertNoSelfAssignment],
    ["no-shadowed-variable", convertNoShadowedVariable],
    ["no-small-switch", convertNoSmallSwitch],
    ["no-sparse-arrays", convertNoSparseArrays],
    ["no-string-literal", convertNoStringLiteral],
    ["no-string-throw", convertNoStringThrow],
    ["no-submodule-imports", convertNoSubmoduleImports],
    ["no-suspicious-comment", convertNoSuspiciousComment],
    ["no-switch-case-fall-through", convertNoSwitchCaseFallThrough],
    ["no-this-assignment", convertNoThisAssignment],
    ["no-trailing-whitespace", convertNoTrailingWhitespace],
    ["no-unbound-method", convertNoUnboundMethod],
    ["no-unconditional-jump", convertNoUnconditionalJump],
    ["no-unnecessary-class", convertNoUnnecessaryClass],
    ["no-unnecessary-initializer", convertNoUnnecessaryInitializer],
    ["no-unnecessary-qualifier", convertNoUnnecessaryQualifier],
    ["no-unnecessary-semicolons", convertNoUnnecessarySemicolons],
    ["no-unnecessary-type-assertion", convertNoUnnecessaryTypeAssertion],
    ["no-unsafe-finally", convertNoUnsafeFinally],
    ["no-unused-array", convertNoUnusedArray],
    ["no-unused-expression", convertNoUnusedExpression],
    ["no-unused-variable", convertNoUnusedVariable],
    ["no-use-before-declare", convertNoUseBeforeDeclare],
    ["no-use-of-empty-return-value", convertNoUseOfEmptyReturnValue],
    ["no-useless-cast", convertNoUselessCast],
    ["no-useless-catch", convertNoUselessCatch],
    ["no-var-keyword", convertNoVarKeyword],
    ["no-var-requires", convertNoVarRequires],
    ["no-variable-usage-before-declaration", convertNoVariableUsageBeforeDeclaration],
    ["no-void-expression", convertNoVoidExpression],
    ["no-with-statement", convertNoWithStatement],
    ["non-literal-require", convertNonLiteralRequire],
    ["object-literal-key-quotes", convertObjectLiteralKeyQuotes],
    ["object-literal-shorthand", convertObjectLiteralShorthand],
    ["one-line", convertOneLine],
    ["one-variable-per-declaration", convertOneVariablePerDeclaration],
    ["only-arrow-functions", convertOnlyArrowFunctions],
    ["ordered-imports", convertOrderedImports],
    ["parameters-max-number", convertParametersMaxNumber],
    ["pipe-prefix", convertPipePrefix],
    ["possible-timing-attack", convertPossibleTimingAttack],
    ["prefer-array-literal", convertPreferArrayLiteral],
    ["prefer-conditional-expression", convertPreferConditionalExpression],
    ["prefer-const", convertPreferConst],
    ["prefer-default-last", convertPreferDefaultLast],
    ["prefer-for-of", convertPreferForOf],
    ["prefer-function-over-method", convertPreferFunctionOverMethod],
    ["prefer-immediate-return", convertPreferImmediateReturn],
    ["prefer-inline-decorator", convertPreferInlineDecorator],
    ["prefer-object-spread", convertPreferObjectSpread],
    ["prefer-on-push-component-change-detection", convertPreferOnPushComponentChangeDetection],
    ["prefer-output-readonly", convertPreferOutputReadonly],
    ["prefer-readonly", convertPreferReadonly],
    ["prefer-switch", convertPreferSwitch],
    ["prefer-template", convertPreferTemplate],
    ["promise-function-async", convertPromiseFunctionAsync],
    ["quotemark", convertQuotemark],
    ["radix", convertRadix],
    ["react-a11y-anchors", convertReactA11yAnchors],
    ["react-a11y-aria-unsupported-elements", convertReactA11yAriaUnsupportedElements],
    ["react-a11y-event-has-role", convertReactA11yEventHasRole],
    ["react-a11y-image-button-has-alt", convertReactA11yImageButtonHasAlt],
    ["react-a11y-img-has-alt", convertReactA11yImgHasAlt],
    ["react-a11y-lang", convertReactA11yLang],
    ["react-a11y-props", convertReactA11yProps],
    ["react-a11y-proptypes", convertReactA11yProptypes],
    ["react-a11y-role-has-required-aria-props", convertReactA11yRoleHasRequiredAriaProps],
    ["react-a11y-role-supports-aria-props", convertReactA11yRoleSupportsAriaProps],
    ["react-a11y-role", convertReactA11yRole],
    ["react-a11y-tabindex-no-positive", convertReactA11yTabIndexNoPositive],
    ["react-no-dangerous-html", convertReactNoDangerousHtml],
    ["react-tsx-curly-spacing", convertReactTsxCurlySpacing],
    ["relative-url-prefix", convertRelativeUrlPrefix],
    ["restrict-plus-operands", convertRestrictPlusOperands],
    ["rxjs-no-async-subscribe", convertNoAsyncSubscribe],
    ["rxjs-no-create", convertNoCreate],
    ["rxjs-no-exposed-subjects", convertNoExposedSubjects],
    ["rxjs-no-finnish", convertNoFinnish],
    ["rxjs-no-ignored-notifier", convertNoIgnoredNotifier],
    ["rxjs-no-ignored-replay-buffer", convertNoIgnoredReplayBuffer],
    ["rxjs-no-ignored-subscription", convertNoIgnoredSubscription],
    ["rxjs-no-ignored-takewhile-value", convertNoIgnoredTakeWhileValue],
    ["rxjs-no-implicit-any-catch", convertNoImplicitAnyCatch],
    ["rxjs-no-index", convertNoIndex],
    ["rxjs-no-internal", convertNoInternal],
    ["rxjs-no-nested-subscribe", convertNoNestedSubscribe],
    ["rxjs-no-redundant-notify", convertNoRedundantNotify],
    ["rxjs-no-sharereplay", convertNoShareReplay],
    ["rxjs-no-subject-unsubscribe", convertNoSubjectUnubscribe],
    ["rxjs-no-subject-value", convertNoSubjectValue],
    ["rxjs-no-unbound-methods", convertNoUnboundMethods],
    ["rxjs-no-unsafe-subject-next", convertNoUnsafeSubjectNext],
    ["rxjs-no-unsafe-takeuntil", convertNoUnsafeTakeUntil],
    ["semicolon", convertSemicolon],
    ["space-before-function-paren", convertSpaceBeforeFunctionParen],
    ["space-within-parens", convertSpaceWithinParens],
    ["strict-boolean-expressions", convertStrictBooleanExpressions],
    ["switch-default", convertSwitchDefault],
    ["template-accessibility-alt-text", convertTemplateAccessibilityAltText],
    ["template-accessibility-elements-content", convertTemplateAccessibilityElementsContent],
    ["template-accessibility-label-for", convertTemplateAccessibilityLabelFor],
    ["template-accessibility-tabindex-no-positive", convertTemplateAccessibilityTabindexNoPositive],
    ["template-accessibility-table-scope", convertTemplateAccessibilityTableScope],
    ["template-accessibility-valid-aria", convertTemplateAccessibilityValidAria],
    ["template-banana-in-box", convertTemplateBananaInBox],
    ["template-click-events-have-key-events", convertTemplateClickEventsHaveKeyEvents],
    ["template-conditional-complexity", convertTemplateConditionalComplexity],
    ["template-cyclomatic-complexity", convertTemplateCyclomaticComplexity],
    ["template-i18n", convertTemplateI18N],
    ["template-mouse-events-have-key-events", convertTemplateMouseEventsHaveKeyEvents],
    ["template-no-any", convertTemplateNoAny],
    ["template-no-autofocus", convertTemplateNoAutofocus],
    ["template-no-call-expression", convertTemplateNoCallExpression],
    ["template-no-distracting-elements", convertTemplateNoDistractingElements],
    ["template-no-negated-async", convertTemplateNoNegatedAsync],
    ["template-use-track-by-function", convertTemplateUseTrackByFunction],
    ["trailing-comma", convertTrailingComma],
    ["triple-equals", convertTripleEquals],
    ["type-literal-delimiter", convertTypeLiteralDelimiter],
    ["typedef-whitespace", convertTypedefWhitespace],
    ["typeof-compare", convertTypeofCompare],
    ["underscore-consistent-invocation", convertUnderscoreConsistentInvocation],
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
    ["use-primitive-type", convertUsePrimitiveType],
    ["variable-name", convertVariableName],
]);
