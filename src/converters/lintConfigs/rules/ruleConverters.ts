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
import { convertAngularWhitespace } from "./ruleConverters/codelyzer/angular-whitespace";
import { convertImportDestructuringSpacing } from "./ruleConverters/codelyzer/import-destructuring-spacing";
import { convertCommentFormat } from "./ruleConverters/comment-format";
import { convertComponentClassSuffix } from "./ruleConverters/component-class-suffix";
import { convertComponentMaxInlineDeclarations } from "./ruleConverters/component-max-inline-declarations";
import { convertComponentSelector } from "./ruleConverters/component-selector";
import { convertConsecutiveOverloads } from "./ruleConverters/consecutive-overloads";
import { convertContextualDecorator } from "./ruleConverters/contextual-decorator";
import { convertContextualLifecycle } from "./ruleConverters/contextual-lifecycle";
import { convertCurly } from "./ruleConverters/curly";
import { convertCyclomaticComplexity } from "./ruleConverters/cyclomatic-complexity";
import { convertDeprecation } from "./ruleConverters/deprecation";
import { convertDirectiveClassSuffix } from "./ruleConverters/directive-class-suffix";
import { convertDirectiveSelector } from "./ruleConverters/directive-selector";
import { convertEofline } from "./ruleConverters/eofline";
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
import { convertAdd } from "./ruleConverters/eslint-plugin-rxjs/add";
import { convertBanObservables } from "./ruleConverters/eslint-plugin-rxjs/ban-observables";
import { convertBanOperators } from "./ruleConverters/eslint-plugin-rxjs/ban-operators";
import { convertDeepOperators } from "./ruleConverters/eslint-plugin-rxjs/deep-operators";
import { convertFinnish } from "./ruleConverters/eslint-plugin-rxjs/finnish";
import { convertJust } from "./ruleConverters/eslint-plugin-rxjs/just";
import { convertNoAdd } from "./ruleConverters/eslint-plugin-rxjs/no-add";
import { convertNoAsyncSubscribe } from "./ruleConverters/eslint-plugin-rxjs/no-async-subscribe";
import { convertNoCompat } from "./ruleConverters/eslint-plugin-rxjs/no-compat";
import { convertNoConnectable } from "./ruleConverters/eslint-plugin-rxjs/no-connectable";
import { convertNoCreate } from "./ruleConverters/eslint-plugin-rxjs/no-create";
import { convertNoDeepOperators } from "./ruleConverters/eslint-plugin-rxjs/no-deep-operators";
import { convertNoExplicitGenerics } from "./ruleConverters/eslint-plugin-rxjs/no-explicit-generics";
import { convertNoExposedSubjects } from "./ruleConverters/eslint-plugin-rxjs/no-exposed-subjects";
import { convertNoFinnish } from "./ruleConverters/eslint-plugin-rxjs/no-finnish";
import { convertNoIgnoredError } from "./ruleConverters/eslint-plugin-rxjs/no-ignored-error";
import { convertNoIgnoredNotifier } from "./ruleConverters/eslint-plugin-rxjs/no-ignored-notifier";
import { convertNoIgnoredObservable } from "./ruleConverters/eslint-plugin-rxjs/no-ignored-observable";
import { convertNoIgnoredReplayBuffer } from "./ruleConverters/eslint-plugin-rxjs/no-ignored-replay-buffer";
import { convertNoIgnoredSubscribe } from "./ruleConverters/eslint-plugin-rxjs/no-ignored-subscribe";
import { convertNoIgnoredSubscription } from "./ruleConverters/eslint-plugin-rxjs/no-ignored-subscription";
import { convertNoIgnoredTakewhileValue } from "./ruleConverters/eslint-plugin-rxjs/no-ignored-takewhile-value";
import { convertNoImplicitAnyCatch } from "./ruleConverters/eslint-plugin-rxjs/no-implicit-any-catch";
import { convertNoIndex } from "./ruleConverters/eslint-plugin-rxjs/no-index";
import { convertNoInternal } from "./ruleConverters/eslint-plugin-rxjs/no-internal";
import { convertNoNestedSubscribe } from "./ruleConverters/eslint-plugin-rxjs/no-nested-subscribe";
import { convertNoOperator } from "./ruleConverters/eslint-plugin-rxjs/no-operator";
import { convertNoPatched } from "./ruleConverters/eslint-plugin-rxjs/no-patched";
import { convertNoRedundantNotify } from "./ruleConverters/eslint-plugin-rxjs/no-redundant-notify";
import { convertNoShareReplay } from "./ruleConverters/eslint-plugin-rxjs/no-sharereplay";
import { convertNoSubclass } from "./ruleConverters/eslint-plugin-rxjs/no-subclass";
import { convertNoSubjectUnubscribe } from "./ruleConverters/eslint-plugin-rxjs/no-subject-unsubscribe";
import { convertNoSubjectValue } from "./ruleConverters/eslint-plugin-rxjs/no-subject-value";
import { convertNoTap } from "./ruleConverters/eslint-plugin-rxjs/no-tap";
import { convertNoToPromise } from "./ruleConverters/eslint-plugin-rxjs/no-topromise";
import { convertNoUnboundMethods } from "./ruleConverters/eslint-plugin-rxjs/no-unbound-methods";
import { convertNoUnsafeCatch } from "./ruleConverters/eslint-plugin-rxjs/no-unsafe-catch";
import { convertNoUnsafeFirst } from "./ruleConverters/eslint-plugin-rxjs/no-unsafe-first";
import { convertNoUnsafeScope } from "./ruleConverters/eslint-plugin-rxjs/no-unsafe-scope";
import { convertNoUnsafeSubjectNext } from "./ruleConverters/eslint-plugin-rxjs/no-unsafe-subject-next";
import { convertNoUnsafeSwitchmap } from "./ruleConverters/eslint-plugin-rxjs/no-unsafe-switchmap";
import { convertNoUnsafeTakeuntil } from "./ruleConverters/eslint-plugin-rxjs/no-unsafe-takeuntil";
import { convertNoUnsafeTakewhile } from "./ruleConverters/eslint-plugin-rxjs/no-unsafe-takewhile";
import { convertNoUnusedAdd } from "./ruleConverters/eslint-plugin-rxjs/no-unused-add";
import { convertNoWholesale } from "./ruleConverters/eslint-plugin-rxjs/no-wholesale";
import { convertPreferAdd } from "./ruleConverters/eslint-plugin-rxjs/prefer-add";
import { convertPreferAngularAsyncPipe } from "./ruleConverters/eslint-plugin-rxjs/prefer-angular-async-pipe";
import { convertPreferAngularComposition } from "./ruleConverters/eslint-plugin-rxjs/prefer-angular-composition";
import { convertPreferAngularTakeuntil } from "./ruleConverters/eslint-plugin-rxjs/prefer-angular-takeuntil";
import { convertPreferObserver } from "./ruleConverters/eslint-plugin-rxjs/prefer-observer";
import { convertSuffixSubjects } from "./ruleConverters/eslint-plugin-rxjs/suffix-subjects";
import { convertThrowError } from "./ruleConverters/eslint-plugin-rxjs/throw-error";
import { convertCognitiveComplexity } from "./ruleConverters/eslint-plugin-sonarjs/cognitive-complexity";
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
import { convertMaxFuncBodyLength } from "./ruleConverters/max-func-body-length";
import { convertMaxLineLength } from "./ruleConverters/max-line-length";
import { convertMaxSwitchCases } from "./ruleConverters/max-switch-cases";
import { convertMemberAccess } from "./ruleConverters/member-access";
import { convertMemberOrdering } from "./ruleConverters/member-ordering";
import { convertMochaAvoidOnly } from "./ruleConverters/mocha-avoid-only";
import { convertNewParens } from "./ruleConverters/new-parens";
import { convertNewlineBeforeReturn } from "./ruleConverters/newline-before-return";
import { convertNewlinePerChainedCall } from "./ruleConverters/newline-per-chained-call";
import { convertNgrxActionHygiene } from "./ruleConverters/ngrx-action-hygiene";
import { convertNgrxAvoidDispatchingMultipleActionsSequentially } from "./ruleConverters/ngrx-avoid-dispatching-multiple-actions-sequentially";
import { convertNgrxEffectCreatorAndDecorator } from "./ruleConverters/ngrx-effect-creator-and-decorator";
import { convertNgrxNoDispatchInEffects } from "./ruleConverters/ngrx-no-dispatch-in-effects";
import { convertNgrxNoDuplicateActionTypes } from "./ruleConverters/ngrx-no-duplicate-action-types";
import { convertNgrxNoEffectDecorator } from "./ruleConverters/ngrx-no-effect-decorator";
import { convertNgrxNoEffectsInProviders } from "./ruleConverters/ngrx-no-effects-in-providers";
import { convertNgrxNoMultipleActionsInEffects } from "./ruleConverters/ngrx-no-multiple-actions-in-effects";
import { convertNgrxNoReducerInKeyNames } from "./ruleConverters/ngrx-no-reducer-in-key-names";
import { convertNgrxNoTypedStore } from "./ruleConverters/ngrx-no-typed-store";
import { convertNgrxOnReducerExplicitReturnType } from "./ruleConverters/ngrx-on-reducer-explicit-return-type";
import { convertNgrxSelectorForSelect } from "./ruleConverters/ngrx-selector-for-select";
import { convertNoAllDuplicatedBranches } from "./ruleConverters/no-all-duplicated-branches";
import { convertNoAlphabeticalSort } from "./ruleConverters/no-alphabetical-sort";
import { convertNoAngleBracketTypeAssertion } from "./ruleConverters/no-angle-bracket-type-assertion";
import { convertNoArg } from "./ruleConverters/no-arg";
import { convertNoAsyncWithoutAwait } from "./ruleConverters/no-async-without-await";
import { convertNoAttributeDecorator } from "./ruleConverters/no-attribute-decorator";
import { convertNoBannedTerms } from "./ruleConverters/no-banned-terms";
import { convertNoBigFunction } from "./ruleConverters/no-big-function";
import { convertNoBitwise } from "./ruleConverters/no-bitwise";
import { convertNoBooleanLiteralCompare } from "./ruleConverters/no-boolean-literal-compare";
import { convertNoCollapsibleIf } from "./ruleConverters/no-collapsible-if";
import { convertNoCollectionSizeMischeck } from "./ruleConverters/no-collection-size-mischeck";
import { convertNoConditionalAssignment } from "./ruleConverters/no-conditional-assignment";
import { convertNoConflictingLifecycle } from "./ruleConverters/no-conflicting-lifecycle";
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
import { convertNoDuplicateString } from "./ruleConverters/no-duplicate-string";
import { convertNoDuplicateSuper } from "./ruleConverters/no-duplicate-super";
import { convertNoDuplicateSwitchCase } from "./ruleConverters/no-duplicate-switch-case";
import { convertNoDuplicateVariable } from "./ruleConverters/no-duplicate-variable";
import { convertNoDuplicatedBranches } from "./ruleConverters/no-duplicated-branches";
import { convertNoDynamicDelete } from "./ruleConverters/no-dynamic-delete";
import { convertNoElementOverwrite } from "./ruleConverters/no-element-overwrite";
import { convertNoEmpty } from "./ruleConverters/no-empty";
import { convertNoEmptyDestructuring } from "./ruleConverters/no-empty-destructuring";
import { convertNoEmptyInterface } from "./ruleConverters/no-empty-interface";
import { convertNoEmptyLineAfterOpeningBrace } from "./ruleConverters/no-empty-line-after-opening-brace";
import { convertNoEmptyNestedBlocks } from "./ruleConverters/no-empty-nested-blocks";
import { convertNoEval } from "./ruleConverters/no-eval";
import { convertNoExecScript } from "./ruleConverters/no-exec-script";
import { convertNoExplicitAny } from "./ruleConverters/no-explicit-any";
import { convertNoExtraSemicolon } from "./ruleConverters/no-extra-semicolon";
import { convertNoFloatingPromises } from "./ruleConverters/no-floating-promises";
import { convertNoForIn } from "./ruleConverters/no-for-in";
import { convertNoForInArray } from "./ruleConverters/no-for-in-array";
import { convertNoForwardRef } from "./ruleConverters/no-forward-ref";
import { convertNoFunctionExpression } from "./ruleConverters/no-function-expression";
import { convertNoHostMetadataProperty } from "./ruleConverters/no-host-metadata-property";
import { convertNoIdenticalConditions } from "./ruleConverters/no-identical-conditions";
import { convertNoIdenticalExpressions } from "./ruleConverters/no-identical-expressions";
import { convertNoIdenticalFunctions } from "./ruleConverters/no-identical-functions";
import { convertNoImplicitDependencies } from "./ruleConverters/no-implicit-dependencies";
import { convertNoImportSideEffect } from "./ruleConverters/no-import-side-effect";
import { convertNoInMisuse } from "./ruleConverters/no-in-misuse";
import { convertNoInferrableTypes } from "./ruleConverters/no-inferrable-types";
import { convertNoInputPrefix } from "./ruleConverters/no-input-prefix";
import { convertNoInputRename } from "./ruleConverters/no-input-rename";
import { convertNoInputsMetadataProperty } from "./ruleConverters/no-inputs-metadata-property";
import { convertNoInternalModule } from "./ruleConverters/no-internal-module";
import { convertNoInvalidAwait } from "./ruleConverters/no-invalid-await";
import { convertNoInvalidRegexp } from "./ruleConverters/no-invalid-regexp";
import { convertNoInvalidTemplateStrings } from "./ruleConverters/no-invalid-template-strings";
import { convertNoInvalidThis } from "./ruleConverters/no-invalid-this";
import { convertNoInvertedBooleanCheck } from "./ruleConverters/no-inverted-boolean-check";
import { convertNoIrregularWhitespace } from "./ruleConverters/no-irregular-whitespace";
import { convertNoLifecycleCall } from "./ruleConverters/no-lifecycle-call";
import { convertNoMagicNumbers } from "./ruleConverters/no-magic-numbers";
import { convertNoMisusedNew } from "./ruleConverters/no-misused-new";
import { convertNoMultilineString } from "./ruleConverters/no-multiline-string";
import { convertNoMultilineStringLiterals } from "./ruleConverters/no-multiline-string-literals";
import { convertNoNamespace } from "./ruleConverters/no-namespace";
import { convertNoNonNullAssertion } from "./ruleConverters/no-non-null-assertion";
import { convertNoNullKeyword } from "./ruleConverters/no-null-keyword";
import { convertNoObjectLiteralTypeAssertion } from "./ruleConverters/no-object-literal-type-assertion";
import { convertNoOctalLiteral } from "./ruleConverters/no-octal-literal";
import { convertNoOutputNative } from "./ruleConverters/no-output-native";
import { convertNoOutputOnPrefix } from "./ruleConverters/no-output-on-prefix";
import { convertNoOutputRename } from "./ruleConverters/no-output-rename";
import { convertNoOutputsMetadataProperty } from "./ruleConverters/no-outputs-metadata-property";
import { convertNoParameterProperties } from "./ruleConverters/no-parameter-properties";
import { convertNoParameterReassignment } from "./ruleConverters/no-parameter-reassignment";
import { convertNoPipeImpure } from "./ruleConverters/no-pipe-impure";
import { convertNoQueriesMetadataProperty } from "./ruleConverters/no-queries-metadata-property";
import { convertNoRedundantBoolean } from "./ruleConverters/no-redundant-boolean";
import { convertNoRedundantJsdoc } from "./ruleConverters/no-redundant-jsdoc";
import { convertNoRedundantJump } from "./ruleConverters/no-redundant-jump";
import { convertNoRedundantParentheses } from "./ruleConverters/no-redundant-parentheses";
import { convertNoReference } from "./ruleConverters/no-reference";
import { convertNoReferenceImport } from "./ruleConverters/no-reference-import";
import { convertNoRegexSpaces } from "./ruleConverters/no-regex-spaces";
import { convertNoRequireImports } from "./ruleConverters/no-require-imports";
import { convertNoReturnAwait } from "./ruleConverters/no-return-await";
import { convertNoSameLineConditional } from "./ruleConverters/no-same-line-conditional";
import { convertNoSelfAssignment } from "./ruleConverters/no-self-assignment";
import { convertNoShadowedVariable } from "./ruleConverters/no-shadowed-variable";
import { convertNoSmallSwitch } from "./ruleConverters/no-small-switch";
import { convertNoSparseArrays } from "./ruleConverters/no-sparse-arrays";
import { convertNoStringLiteral } from "./ruleConverters/no-string-literal";
import { convertNoStringThrow } from "./ruleConverters/no-string-throw";
import { convertNoSubmoduleImports } from "./ruleConverters/no-submodule-imports";
import { convertNoSuspiciousComment } from "./ruleConverters/no-suspicious-comment";
import { convertNoSwitchCaseFallThrough } from "./ruleConverters/no-switch-case-fall-through";
import { convertNoThisAssignment } from "./ruleConverters/no-this-assignment";
import { convertNoTrailingWhitespace } from "./ruleConverters/no-trailing-whitespace";
import { convertNoUnboundMethod } from "./ruleConverters/no-unbound-method";
import { convertNoUnconditionalJump } from "./ruleConverters/no-unconditional-jump";
import { convertNoUnnecessaryClass } from "./ruleConverters/no-unnecessary-class";
import { convertNoUnnecessaryFieldInitialization } from "./ruleConverters/no-unnecessary-field-initialization";
import { convertNoUnnecessaryInitializer } from "./ruleConverters/no-unnecessary-initializer";
import { convertNoUnnecessaryQualifier } from "./ruleConverters/no-unnecessary-qualifier";
import { convertNoUnnecessarySemicolons } from "./ruleConverters/no-unnecessary-semicolons";
import { convertNoUnnecessaryTypeAssertion } from "./ruleConverters/no-unnecessary-type-assertion";
import { convertNoUnsafeFinally } from "./ruleConverters/no-unsafe-finally";
import { convertNoUnusedArray } from "./ruleConverters/no-unused-array";
import { convertNoUnusedExpression } from "./ruleConverters/no-unused-expression";
import { convertNoUnusedVariable } from "./ruleConverters/no-unused-variable";
import { convertNoUseBeforeDeclare } from "./ruleConverters/no-use-before-declare";
import { convertNoUseOfEmptyReturnValue } from "./ruleConverters/no-use-of-empty-return-value";
import { convertNoUselessCast } from "./ruleConverters/no-useless-cast";
import { convertNoUselessCatch } from "./ruleConverters/no-useless-catch";
import { convertNoVarKeyword } from "./ruleConverters/no-var-keyword";
import { convertNoVarRequires } from "./ruleConverters/no-var-requires";
import { convertNoVariableUsageBeforeDeclaration } from "./ruleConverters/no-variable-usage-before-declaration";
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
import { convertParametersMaxNumber } from "./ruleConverters/parameters-max-number";
import { convertPipePrefix } from "./ruleConverters/pipe-prefix";
import { convertPossibleTimingAttack } from "./ruleConverters/possible-timing-attack";
import { convertPreferArrayLiteral } from "./ruleConverters/prefer-array-literal";
import { convertPreferConditionalExpression } from "./ruleConverters/prefer-conditional-expression";
import { convertPreferConst } from "./ruleConverters/prefer-const";
import { convertPreferDefaultLast } from "./ruleConverters/prefer-default-last";
import { convertPreferForOf } from "./ruleConverters/prefer-for-of";
import { convertPreferFunctionOverMethod } from "./ruleConverters/prefer-function-over-method";
import { convertPreferImmediateReturn } from "./ruleConverters/prefer-immediate-return";
import { convertPreferInlineDecorator } from "./ruleConverters/prefer-inline-decorator";
import { convertPreferObjectSpread } from "./ruleConverters/prefer-object-spread";
import { convertPreferOnPushComponentChangeDetection } from "./ruleConverters/prefer-on-push-component-change-detection";
import { convertPreferOutputReadonly } from "./ruleConverters/prefer-output-readonly";
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
import { convertReactA11yNoOnchange } from "./ruleConverters/react-a11y-no-onchange";
import { convertReactA11yProps } from "./ruleConverters/react-a11y-props";
import { convertReactA11yProptypes } from "./ruleConverters/react-a11y-proptypes";
import { convertReactA11yRole } from "./ruleConverters/react-a11y-role";
import { convertReactA11yRoleHasRequiredAriaProps } from "./ruleConverters/react-a11y-role-has-required-aria-props";
import { convertReactA11yRoleSupportsAriaProps } from "./ruleConverters/react-a11y-role-supports-aria-props";
import { convertReactA11yTabIndexNoPositive } from "./ruleConverters/react-a11y-tabindex-no-positive";
import { convertReactNoDangerousHtml } from "./ruleConverters/react-no-dangerous-html";
import { convertReactTsxCurlySpacing } from "./ruleConverters/react-tsx-curly-spacing";
import { convertReactUnusedPropsAndState } from "./ruleConverters/react-unused-props-and-state";
import { convertRelativeUrlPrefix } from "./ruleConverters/relative-url-prefix";
import { convertRestrictPlusOperands } from "./ruleConverters/restrict-plus-operands";
import { convertRxjsBanObservables } from "./ruleConverters/rxjs-ban-observables";
import { convertRxjsBanOperators } from "./ruleConverters/rxjs-ban-operators";
import { convertRxjsFinnish } from "./ruleConverters/rxjs-finnish";
import { convertRxjsJust } from "./ruleConverters/rxjs-just";
import { convertRxjsNoAsyncSubscribe } from "./ruleConverters/rxjs-no-async-subscribe";
import { convertRxjsNoCompat } from "./ruleConverters/rxjs-no-compat";
import { convertRxjsNoConnectable } from "./ruleConverters/rxjs-no-connectable";
import { convertRxjsNoCreate } from "./ruleConverters/rxjs-no-create";
import { convertRxjsNoExplicitGenerics } from "./ruleConverters/rxjs-no-explicit-generics";
import { convertRxjsNoExposedSubjects } from "./ruleConverters/rxjs-no-exposed-subjects";
import { convertRxjsNoFinnish } from "./ruleConverters/rxjs-no-finnish";
import { convertRxjsNoIgnoredError } from "./ruleConverters/rxjs-no-ignored-error";
import { convertRxjsNoIgnoredNotifier } from "./ruleConverters/rxjs-no-ignored-notifier";
import { convertRxjsNoIgnoredObservable } from "./ruleConverters/rxjs-no-ignored-observable";
import { convertRxjsNoIgnoredReplayBuffer } from "./ruleConverters/rxjs-no-ignored-replay-buffer";
import { convertRxjsNoIgnoredSubscribe } from "./ruleConverters/rxjs-no-ignored-subscribe";
import { convertRxjsNoIgnoredSubscription } from "./ruleConverters/rxjs-no-ignored-subscription";
import { convertRxjsNoIgnoredTakeWhileValue } from "./ruleConverters/rxjs-no-ignored-takewhile-value";
import { convertRxjsNoImplicitAnyCatch } from "./ruleConverters/rxjs-no-implicit-any-catch";
import { convertRxjsNoIndex } from "./ruleConverters/rxjs-no-index";
import { convertRxjsNoInternal } from "./ruleConverters/rxjs-no-internal";
import { convertRxjsNoNestedSubscribe } from "./ruleConverters/rxjs-no-nested-subscribe";
import { convertRxjsNoRedundantNotify } from "./ruleConverters/rxjs-no-redundant-notify";
import { convertRxjsNoShareReplay } from "./ruleConverters/rxjs-no-sharereplay";
import { convertRxjsNoSubclass } from "./ruleConverters/rxjs-no-subclass";
import { convertRxjsNoSubjectUnubscribe } from "./ruleConverters/rxjs-no-subject-unsubscribe";
import { convertRxjsNoSubjectValue } from "./ruleConverters/rxjs-no-subject-value";
import { convertRxjsNoTap } from "./ruleConverters/rxjs-no-tap";
import { convertRxjsNoToPromise } from "./ruleConverters/rxjs-no-topromise";
import { convertRxjsNoUnboundMethods } from "./ruleConverters/rxjs-no-unbound-methods";
import { convertRxjsNoUnsafeCatch } from "./ruleConverters/rxjs-no-unsafe-catch";
import { convertRxjsNoUnsafeFirst } from "./ruleConverters/rxjs-no-unsafe-first";
import { convertRxjsNoUnsafeSubjectNext } from "./ruleConverters/rxjs-no-unsafe-subject-next";
import { convertRxjsNoUnsafeSwitchmap } from "./ruleConverters/rxjs-no-unsafe-switchmap";
import { convertRxjsNoUnsafeTakeUntil } from "./ruleConverters/rxjs-no-unsafe-takeuntil";
import { convertRxjsPreferAngularAsyncPipe } from "./ruleConverters/rxjs-prefer-angular-async-pipe";
import { convertRxjsPreferAngularComposition } from "./ruleConverters/rxjs-prefer-angular-composition";
import { convertRxjsPreferAngularTakeuntil } from "./ruleConverters/rxjs-prefer-angular-takeuntil";
import { convertRxjsPreferObserver } from "./ruleConverters/rxjs-prefer-observer";
import { convertRxjsSuffixSubjects } from "./ruleConverters/rxjs-suffix-subjects";
import { convertRxjsThrowError } from "./ruleConverters/rxjs-throw-error";
import { convertSemicolon } from "./ruleConverters/semicolon";
import { convertSpaceBeforeFunctionParen } from "./ruleConverters/space-before-function-paren";
import { convertSpaceWithinParens } from "./ruleConverters/space-within-parens";
import { convertStrictBooleanExpressions } from "./ruleConverters/strict-boolean-expressions";
import { convertSwitchDefault } from "./ruleConverters/switch-default";
import { convertTemplateAccessibilityAltText } from "./ruleConverters/template-accessibility-alt-text";
import { convertTemplateAccessibilityElementsContent } from "./ruleConverters/template-accessibility-elements-content";
import { convertTemplateAccessibilityLabelFor } from "./ruleConverters/template-accessibility-label-for";
import { convertTemplateAccessibilityTabindexNoPositive } from "./ruleConverters/template-accessibility-tabindex-no-positive";
import { convertTemplateAccessibilityTableScope } from "./ruleConverters/template-accessibility-table-scope";
import { convertTemplateAccessibilityValidAria } from "./ruleConverters/template-accessibility-valid-aria";
import { convertTemplateBananaInBox } from "./ruleConverters/template-banana-in-box";
import { convertTemplateClickEventsHaveKeyEvents } from "./ruleConverters/template-click-events-have-key-events";
import { convertTemplateConditionalComplexity } from "./ruleConverters/template-conditional-complexity";
import { convertTemplateCyclomaticComplexity } from "./ruleConverters/template-cyclomatic-complexity";
import { convertTemplateI18N } from "./ruleConverters/template-i18n";
import { convertTemplateMouseEventsHaveKeyEvents } from "./ruleConverters/template-mouse-events-have-key-events";
import { convertTemplateNoAny } from "./ruleConverters/template-no-any";
import { convertTemplateNoAutofocus } from "./ruleConverters/template-no-autofocus";
import { convertTemplateNoCallExpression } from "./ruleConverters/template-no-call-expression";
import { convertTemplateNoDistractingElements } from "./ruleConverters/template-no-distracting-elements";
import { convertTemplateNoNegatedAsync } from "./ruleConverters/template-no-negated-async";
import { convertTemplateUseTrackByFunction } from "./ruleConverters/template-use-track-by-function";
import { convertTrailingComma } from "./ruleConverters/trailing-comma";
import { convertTripleEquals } from "./ruleConverters/triple-equals";
import { convertTypeLiteralDelimiter } from "./ruleConverters/type-literal-delimiter";
import { convertTypedefWhitespace } from "./ruleConverters/typedef-whitespace";
import { convertTypeofCompare } from "./ruleConverters/typeof-compare";
import { convertUnderscoreConsistentInvocation } from "./ruleConverters/underscore-consistent-invocation";
import { convertUnifiedSignatures } from "./ruleConverters/unified-signatures";
import { convertUnnecessaryBind } from "./ruleConverters/unnecessary-bind";
import { convertUnnecessaryConstructor } from "./ruleConverters/unnecessary-constructor";
import { convertUseComponentSelector } from "./ruleConverters/use-component-selector";
import { convertUseComponentViewEncapsulation } from "./ruleConverters/use-component-view-encapsulation";
import { convertUseDefaultTypeParameter } from "./ruleConverters/use-default-type-parameter";
import { convertUseInjectableProvidedIn } from "./ruleConverters/use-injectable-provided-in";
import { convertUseIsnan } from "./ruleConverters/use-isnan";
import { convertUseLifecycleInterface } from "./ruleConverters/use-lifecycle-interface";
import { convertUsePipeDecorator } from "./ruleConverters/use-pipe-decorator";
import { convertUsePipeTransformInterface } from "./ruleConverters/use-pipe-transform-interface";
import { convertUsePrimitiveType } from "./ruleConverters/use-primitive-type";
import { convertVariableName } from "./ruleConverters/variable-name";

/**
 * Keys TSLint rule names to their ESLint rule converters.
 */
export const ruleConverters = new Map([
    ["adjacent-overload-signatures", convertAdjacentOverloadSignatures],
    ["align", convertAlign],
    ["angular-whitespace", convertAngularWhitespace],
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
    ["ngrx-action-hygiene", convertNgrxActionHygiene],
    [
        "ngrx-avoid-dispatching-multiple-actions-sequentially",
        convertNgrxAvoidDispatchingMultipleActionsSequentially,
    ],
    ["ngrx-effect-creator-and-decorator", convertNgrxEffectCreatorAndDecorator],
    ["ngrx-no-dispatch-in-effects", convertNgrxNoDispatchInEffects],
    ["ngrx-no-duplicate-action-types", convertNgrxNoDuplicateActionTypes],
    ["ngrx-no-effect-decorator", convertNgrxNoEffectDecorator],
    ["ngrx-no-effects-in-providers", convertNgrxNoEffectsInProviders],
    ["ngrx-no-multiple-actions-in-effects", convertNgrxNoMultipleActionsInEffects],
    ["ngrx-no-reducer-in-key-names", convertNgrxNoReducerInKeyNames],
    ["ngrx-no-typed-store", convertNgrxNoTypedStore],
    ["ngrx-on-reducer-explicit-return-type", convertNgrxOnReducerExplicitReturnType],
    ["ngrx-selector-for-select", convertNgrxSelectorForSelect],
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
    ["no-function-expression", convertNoFunctionExpression],
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
    ["no-unnecessary-field-initialization", convertNoUnnecessaryFieldInitialization],
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
    ["non-literal-fs-path", convertNonLiteralFsPath],
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
    ["react-a11y-no-onchange", convertReactA11yNoOnchange],
    ["react-a11y-props", convertReactA11yProps],
    ["react-a11y-proptypes", convertReactA11yProptypes],
    ["react-a11y-role-has-required-aria-props", convertReactA11yRoleHasRequiredAriaProps],
    ["react-a11y-role-supports-aria-props", convertReactA11yRoleSupportsAriaProps],
    ["react-a11y-role", convertReactA11yRole],
    ["react-a11y-tabindex-no-positive", convertReactA11yTabIndexNoPositive],
    ["react-no-dangerous-html", convertReactNoDangerousHtml],
    ["react-tsx-curly-spacing", convertReactTsxCurlySpacing],
    ["react-unused-props-and-state", convertReactUnusedPropsAndState],
    ["relative-url-prefix", convertRelativeUrlPrefix],
    ["restrict-plus-operands", convertRestrictPlusOperands],
    ["rxjs-add", convertAdd],
    ["rxjs-ban-observables", convertBanObservables],
    ["rxjs-ban-observables", convertRxjsBanObservables],
    ["rxjs-ban-operators", convertBanOperators],
    ["rxjs-ban-operators", convertRxjsBanOperators],
    ["rxjs-deep-operators", convertDeepOperators],
    ["rxjs-finnish", convertFinnish],
    ["rxjs-finnish", convertRxjsFinnish],
    ["rxjs-just", convertJust],
    ["rxjs-just", convertRxjsJust],
    ["rxjs-no-add", convertNoAdd],
    ["rxjs-no-async-subscribe", convertNoAsyncSubscribe],
    ["rxjs-no-async-subscribe", convertRxjsNoAsyncSubscribe],
    ["rxjs-no-compat", convertNoCompat],
    ["rxjs-no-compat", convertRxjsNoCompat],
    ["rxjs-no-connectable", convertNoConnectable],
    ["rxjs-no-connectable", convertRxjsNoConnectable],
    ["rxjs-no-create", convertNoCreate],
    ["rxjs-no-create", convertRxjsNoCreate],
    ["rxjs-no-deep-operators", convertNoDeepOperators],
    ["rxjs-no-do", convertNoTap],
    ["rxjs-no-do", convertRxjsNoTap],
    ["rxjs-no-explicit-generics", convertNoExplicitGenerics],
    ["rxjs-no-explicit-generics", convertRxjsNoExplicitGenerics],
    ["rxjs-no-exposed-subjects", convertNoExposedSubjects],
    ["rxjs-no-exposed-subjects", convertRxjsNoExposedSubjects],
    ["rxjs-no-finnish", convertNoFinnish],
    ["rxjs-no-finnish", convertRxjsNoFinnish],
    ["rxjs-no-ignored-error", convertNoIgnoredError],
    ["rxjs-no-ignored-error", convertRxjsNoIgnoredError],
    ["rxjs-no-ignored-notifier", convertNoIgnoredNotifier],
    ["rxjs-no-ignored-notifier", convertRxjsNoIgnoredNotifier],
    ["rxjs-no-ignored-observable", convertNoIgnoredObservable],
    ["rxjs-no-ignored-observable", convertRxjsNoIgnoredObservable],
    ["rxjs-no-ignored-replay-buffer", convertNoIgnoredReplayBuffer],
    ["rxjs-no-ignored-replay-buffer", convertRxjsNoIgnoredReplayBuffer],
    ["rxjs-no-ignored-subscribe", convertNoIgnoredSubscribe],
    ["rxjs-no-ignored-subscribe", convertRxjsNoIgnoredSubscribe],
    ["rxjs-no-ignored-subscription", convertNoIgnoredSubscription],
    ["rxjs-no-ignored-subscription", convertRxjsNoIgnoredSubscription],
    ["rxjs-no-ignored-takewhile-value", convertNoIgnoredTakewhileValue],
    ["rxjs-no-ignored-takewhile-value", convertRxjsNoIgnoredTakeWhileValue],
    ["rxjs-no-implicit-any-catch", convertNoImplicitAnyCatch],
    ["rxjs-no-implicit-any-catch", convertRxjsNoImplicitAnyCatch],
    ["rxjs-no-index", convertNoIndex],
    ["rxjs-no-index", convertRxjsNoIndex],
    ["rxjs-no-internal", convertNoInternal],
    ["rxjs-no-internal", convertRxjsNoInternal],
    ["rxjs-no-nested-subscribe", convertNoNestedSubscribe],
    ["rxjs-no-nested-subscribe", convertRxjsNoNestedSubscribe],
    ["rxjs-no-operator", convertNoOperator],
    ["rxjs-no-patched", convertNoPatched],
    ["rxjs-no-redundant-notify", convertNoRedundantNotify],
    ["rxjs-no-redundant-notify", convertRxjsNoRedundantNotify],
    ["rxjs-no-sharereplay", convertNoShareReplay],
    ["rxjs-no-sharereplay", convertRxjsNoShareReplay],
    ["rxjs-no-subclass", convertNoSubclass],
    ["rxjs-no-subclass", convertRxjsNoSubclass],
    ["rxjs-no-subject-unsubscribe", convertNoSubjectUnubscribe],
    ["rxjs-no-subject-unsubscribe", convertRxjsNoSubjectUnubscribe],
    ["rxjs-no-subject-value", convertNoSubjectValue],
    ["rxjs-no-subject-value", convertRxjsNoSubjectValue],
    ["rxjs-no-tap", convertNoTap],
    ["rxjs-no-tap", convertRxjsNoTap],
    ["rxjs-no-topromise", convertNoToPromise],
    ["rxjs-no-topromise", convertRxjsNoToPromise],
    ["rxjs-no-unbound-methods", convertNoUnboundMethods],
    ["rxjs-no-unbound-methods", convertRxjsNoUnboundMethods],
    ["rxjs-no-unsafe-catch", convertNoUnsafeCatch],
    ["rxjs-no-unsafe-catch", convertRxjsNoUnsafeCatch],
    ["rxjs-no-unsafe-first", convertNoUnsafeFirst],
    ["rxjs-no-unsafe-first", convertRxjsNoUnsafeFirst],
    ["rxjs-no-unsafe-scope", convertNoUnsafeScope],
    ["rxjs-no-unsafe-subject-next", convertNoUnsafeSubjectNext],
    ["rxjs-no-unsafe-subject-next", convertRxjsNoUnsafeSubjectNext],
    ["rxjs-no-unsafe-switchmap", convertNoUnsafeSwitchmap],
    ["rxjs-no-unsafe-switchmap", convertRxjsNoUnsafeSwitchmap],
    ["rxjs-no-unsafe-takeuntil", convertNoUnsafeTakeuntil],
    ["rxjs-no-unsafe-takeuntil", convertRxjsNoUnsafeTakeUntil],
    ["rxjs-no-unsafe-takewhile", convertNoUnsafeTakewhile],
    ["rxjs-no-unused-add", convertNoUnusedAdd],
    ["rxjs-no-wholesale", convertNoWholesale],
    ["rxjs-prefer-add", convertPreferAdd],
    ["rxjs-prefer-angular-async-pipe", convertPreferAngularAsyncPipe],
    ["rxjs-prefer-angular-async-pipe", convertRxjsPreferAngularAsyncPipe],
    ["rxjs-prefer-angular-composition", convertPreferAngularComposition],
    ["rxjs-prefer-angular-composition", convertRxjsPreferAngularComposition],
    ["rxjs-prefer-angular-takeuntil", convertPreferAngularTakeuntil],
    ["rxjs-prefer-angular-takeuntil", convertRxjsPreferAngularTakeuntil],
    ["rxjs-prefer-observer", convertPreferObserver],
    ["rxjs-prefer-observer", convertRxjsPreferObserver],
    ["rxjs-suffix-subjects", convertRxjsSuffixSubjects],
    ["rxjs-suffix-subjects", convertSuffixSubjects],
    ["rxjs-throw-error", convertRxjsThrowError],
    ["rxjs-throw-error", convertThrowError],
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
