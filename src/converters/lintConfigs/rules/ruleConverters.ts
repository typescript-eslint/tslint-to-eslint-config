import { convertAdjacentOverloadSignatures } from "./ruleConverters/adjacent-overload-signatures.js";
import { convertAlign } from "./ruleConverters/align.js";
import { convertAngularWhitespace } from "./ruleConverters/angular-whitespace.js";
import { convertArrayType } from "./ruleConverters/array-type.js";
import { convertArrowParens } from "./ruleConverters/arrow-parens.js";
import { convertArrowReturnShorthand } from "./ruleConverters/arrow-return-shorthand.js";
import { convertAwaitPromise } from "./ruleConverters/await-promise.js";
import { convertBanCommaOperator } from "./ruleConverters/ban-comma-operator.js";
import { convertBanTsIgnore } from "./ruleConverters/ban-ts-ignore.js";
import { convertBanTypes } from "./ruleConverters/ban-types.js";
import { convertBinaryExpressionOperandOrder } from "./ruleConverters/binary-expression-operand-order.js";
import { convertCallableTypes } from "./ruleConverters/callable-types.js";
import { convertClassMethodNewlines } from "./ruleConverters/class-method-newlines.js";
import { convertClassName } from "./ruleConverters/class-name.js";
import { convertCognitiveComplexity } from "./ruleConverters/cognitive-complexity.js";
import { convertCommentFormat } from "./ruleConverters/comment-format.js";
import { convertComponentClassSuffix } from "./ruleConverters/component-class-suffix.js";
import { convertComponentMaxInlineDeclarations } from "./ruleConverters/component-max-inline-declarations.js";
import { convertComponentSelector } from "./ruleConverters/component-selector.js";
import { convertConsecutiveOverloads } from "./ruleConverters/consecutive-overloads.js";
import { convertContextualDecorator } from "./ruleConverters/contextual-decorator.js";
import { convertContextualLifecycle } from "./ruleConverters/contextual-lifecycle.js";
import { convertCurly } from "./ruleConverters/curly.js";
import { convertCyclomaticComplexity } from "./ruleConverters/cyclomatic-complexity.js";
import { convertDeprecation } from "./ruleConverters/deprecation.js";
import { convertDirectiveClassSuffix } from "./ruleConverters/directive-class-suffix.js";
import { convertDirectiveSelector } from "./ruleConverters/directive-selector.js";
import { convertEofline } from "./ruleConverters/eofline.js";
import { convertFileNameCasing } from "./ruleConverters/file-name-casing.js";
import { convertForin } from "./ruleConverters/forin.js";
import { convertFunctionConstructor } from "./ruleConverters/function-constructor.js";
import { convertImportBlacklist } from "./ruleConverters/import-blacklist.js";
import { convertImportDestructuringSpacing } from "./ruleConverters/import-destructuring-spacing.js";
import { convertIncrementDecrement } from "./ruleConverters/increment-decrement.js";
import { convertIndent } from "./ruleConverters/indent.js";
import { convertInterfaceName } from "./ruleConverters/interface-name.js";
import { convertInterfaceOverTypeLiteral } from "./ruleConverters/interface-over-type-literal.js";
import { convertJSDocFormat } from "./ruleConverters/jsdoc-format.js";
import { convertJsxBanProps } from "./ruleConverters/jsx-ban-props.js";
import { convertJsxBooleanValue } from "./ruleConverters/jsx-boolean-value.js";
import { convertJsxCurlySpacing } from "./ruleConverters/jsx-curly-spacing.js";
import { convertJsxEqualsSpacing } from "./ruleConverters/jsx-equals-spacing.js";
import { convertJsxKey } from "./ruleConverters/jsx-key.js";
import { convertJsxNoBind } from "./ruleConverters/jsx-no-bind.js";
import { convertJsxNoLambda } from "./ruleConverters/jsx-no-lambda.js";
import { convertJsxSelfClose } from "./ruleConverters/jsx-self-close.js";
import { convertJsxSpaceBeforeTrailingSlash } from "./ruleConverters/jsx-space-before-trailing-slash.js";
import { convertJsxWrapMultiline } from "./ruleConverters/jsx-wrap-multiline.js";
import { convertLabelPosition } from "./ruleConverters/label-position.js";
import { convertLinebreakStyle } from "./ruleConverters/linebreak-style.js";
import { convertMaxClassesPerFile } from "./ruleConverters/max-classes-per-file.js";
import { convertMaxFileLineCount } from "./ruleConverters/max-file-line-count.js";
import { convertMaxFuncBodyLength } from "./ruleConverters/max-func-body-length.js";
import { convertMaxLineLength } from "./ruleConverters/max-line-length.js";
import { convertMaxSwitchCases } from "./ruleConverters/max-switch-cases.js";
import { convertMemberAccess } from "./ruleConverters/member-access.js";
import { convertMemberOrdering } from "./ruleConverters/member-ordering.js";
import { convertMochaAvoidOnly } from "./ruleConverters/mocha-avoid-only.js";
import { convertNewParens } from "./ruleConverters/new-parens.js";
import { convertNewlineBeforeReturn } from "./ruleConverters/newline-before-return.js";
import { convertNewlinePerChainedCall } from "./ruleConverters/newline-per-chained-call.js";
import { convertNgrxActionHygiene } from "./ruleConverters/ngrx-action-hygiene.js";
import { convertNgrxAvoidDispatchingMultipleActionsSequentially } from "./ruleConverters/ngrx-avoid-dispatching-multiple-actions-sequentially.js";
import { convertNgrxEffectCreatorAndDecorator } from "./ruleConverters/ngrx-effect-creator-and-decorator.js";
import { convertNgrxNoDispatchInEffects } from "./ruleConverters/ngrx-no-dispatch-in-effects.js";
import { convertNgrxNoDuplicateActionTypes } from "./ruleConverters/ngrx-no-duplicate-action-types.js";
import { convertNgrxNoEffectDecorator } from "./ruleConverters/ngrx-no-effect-decorator.js";
import { convertNgrxNoEffectsInProviders } from "./ruleConverters/ngrx-no-effects-in-providers.js";
import { convertNgrxNoMultipleActionsInEffects } from "./ruleConverters/ngrx-no-multiple-actions-in-effects.js";
import { convertNgrxNoReducerInKeyNames } from "./ruleConverters/ngrx-no-reducer-in-key-names.js";
import { convertNgrxNoTypedStore } from "./ruleConverters/ngrx-no-typed-store.js";
import { convertNgrxOnReducerExplicitReturnType } from "./ruleConverters/ngrx-on-reducer-explicit-return-type.js";
import { convertNgrxSelectorForSelect } from "./ruleConverters/ngrx-selector-for-select.js";
import { convertNoAllDuplicatedBranches } from "./ruleConverters/no-all-duplicated-branches.js";
import { convertNoAlphabeticalSort } from "./ruleConverters/no-alphabetical-sort.js";
import { convertNoAngleBracketTypeAssertion } from "./ruleConverters/no-angle-bracket-type-assertion.js";
import { convertNoArg } from "./ruleConverters/no-arg.js";
import { convertNoAsyncWithoutAwait } from "./ruleConverters/no-async-without-await.js";
import { convertNoAttributeDecorator } from "./ruleConverters/no-attribute-decorator.js";
import { convertNoBannedTerms } from "./ruleConverters/no-banned-terms.js";
import { convertNoBigFunction } from "./ruleConverters/no-big-function.js";
import { convertNoBitwise } from "./ruleConverters/no-bitwise.js";
import { convertNoBooleanLiteralCompare } from "./ruleConverters/no-boolean-literal-compare.js";
import { convertNoCollapsibleIf } from "./ruleConverters/no-collapsible-if.js";
import { convertNoCollectionSizeMischeck } from "./ruleConverters/no-collection-size-mischeck.js";
import { convertNoConditionalAssignment } from "./ruleConverters/no-conditional-assignment.js";
import { convertNoConflictingLifecycle } from "./ruleConverters/no-conflicting-lifecycle.js";
import { convertNoConsecutiveBlankLines } from "./ruleConverters/no-consecutive-blank-lines.js";
import { convertNoConsole } from "./ruleConverters/no-console.js";
import { convertNoConstantCondition } from "./ruleConverters/no-constant-condition.js";
import { convertNoConstruct } from "./ruleConverters/no-construct.js";
import { convertNoControlRegex } from "./ruleConverters/no-control-regex.js";
import { convertNoCookies } from "./ruleConverters/no-cookies.js";
import { convertNoDebugger } from "./ruleConverters/no-debugger.js";
import { convertNoDefaultExport } from "./ruleConverters/no-default-export.js";
import { convertNoDeleteExpression } from "./ruleConverters/no-delete-expression.js";
import { convertNoDocumentDomain } from "./ruleConverters/no-document-domain.js";
import { convertNoDocumentWrite } from "./ruleConverters/no-document-write.js";
import { convertNoDuplicateImports } from "./ruleConverters/no-duplicate-imports.js";
import { convertNoDuplicateString } from "./ruleConverters/no-duplicate-string.js";
import { convertNoDuplicateSuper } from "./ruleConverters/no-duplicate-super.js";
import { convertNoDuplicateSwitchCase } from "./ruleConverters/no-duplicate-switch-case.js";
import { convertNoDuplicateVariable } from "./ruleConverters/no-duplicate-variable.js";
import { convertNoDuplicatedBranches } from "./ruleConverters/no-duplicated-branches.js";
import { convertNoDynamicDelete } from "./ruleConverters/no-dynamic-delete.js";
import { convertNoElementOverwrite } from "./ruleConverters/no-element-overwrite.js";
import { convertNoEmpty } from "./ruleConverters/no-empty.js";
import { convertNoEmptyDestructuring } from "./ruleConverters/no-empty-destructuring.js";
import { convertNoEmptyInterface } from "./ruleConverters/no-empty-interface.js";
import { convertNoEmptyLineAfterOpeningBrace } from "./ruleConverters/no-empty-line-after-opening-brace.js";
import { convertNoEmptyNestedBlocks } from "./ruleConverters/no-empty-nested-blocks.js";
import { convertNoEval } from "./ruleConverters/no-eval.js";
import { convertNoExecScript } from "./ruleConverters/no-exec-script.js";
import { convertNoExplicitAny } from "./ruleConverters/no-explicit-any.js";
import { convertNoExtraSemicolon } from "./ruleConverters/no-extra-semicolon.js";
import { convertNoFloatingPromises } from "./ruleConverters/no-floating-promises.js";
import { convertNoForIn } from "./ruleConverters/no-for-in.js";
import { convertNoForInArray } from "./ruleConverters/no-for-in-array.js";
import { convertNoForwardRef } from "./ruleConverters/no-forward-ref.js";
import { convertNoFunctionExpression } from "./ruleConverters/no-function-expression.js";
import { convertNoHostMetadataProperty } from "./ruleConverters/no-host-metadata-property.js";
import { convertNoIdenticalConditions } from "./ruleConverters/no-identical-conditions.js";
import { convertNoIdenticalExpressions } from "./ruleConverters/no-identical-expressions.js";
import { convertNoIdenticalFunctions } from "./ruleConverters/no-identical-functions.js";
import { convertNoImplicitDependencies } from "./ruleConverters/no-implicit-dependencies.js";
import { convertNoImportSideEffect } from "./ruleConverters/no-import-side-effect.js";
import { convertNoInMisuse } from "./ruleConverters/no-in-misuse.js";
import { convertNoInferrableTypes } from "./ruleConverters/no-inferrable-types.js";
import { convertNoInputPrefix } from "./ruleConverters/no-input-prefix.js";
import { convertNoInputRename } from "./ruleConverters/no-input-rename.js";
import { convertNoInputsMetadataProperty } from "./ruleConverters/no-inputs-metadata-property.js";
import { convertNoInternalModule } from "./ruleConverters/no-internal-module.js";
import { convertNoInvalidAwait } from "./ruleConverters/no-invalid-await.js";
import { convertNoInvalidRegexp } from "./ruleConverters/no-invalid-regexp.js";
import { convertNoInvalidTemplateStrings } from "./ruleConverters/no-invalid-template-strings.js";
import { convertNoInvalidThis } from "./ruleConverters/no-invalid-this.js";
import { convertNoInvertedBooleanCheck } from "./ruleConverters/no-inverted-boolean-check.js";
import { convertNoIrregularWhitespace } from "./ruleConverters/no-irregular-whitespace.js";
import { convertNoLifecycleCall } from "./ruleConverters/no-lifecycle-call.js";
import { convertNoMagicNumbers } from "./ruleConverters/no-magic-numbers.js";
import { convertNoMisusedNew } from "./ruleConverters/no-misused-new.js";
import { convertNoMultilineString } from "./ruleConverters/no-multiline-string.js";
import { convertNoMultilineStringLiterals } from "./ruleConverters/no-multiline-string-literals.js";
import { convertNoNamespace } from "./ruleConverters/no-namespace.js";
import { convertNoNonNullAssertion } from "./ruleConverters/no-non-null-assertion.js";
import { convertNoNullKeyword } from "./ruleConverters/no-null-keyword.js";
import { convertNoObjectLiteralTypeAssertion } from "./ruleConverters/no-object-literal-type-assertion.js";
import { convertNoOctalLiteral } from "./ruleConverters/no-octal-literal.js";
import { convertNoOutputNative } from "./ruleConverters/no-output-native.js";
import { convertNoOutputOnPrefix } from "./ruleConverters/no-output-on-prefix.js";
import { convertNoOutputRename } from "./ruleConverters/no-output-rename.js";
import { convertNoOutputsMetadataProperty } from "./ruleConverters/no-outputs-metadata-property.js";
import { convertNoParameterProperties } from "./ruleConverters/no-parameter-properties.js";
import { convertNoParameterReassignment } from "./ruleConverters/no-parameter-reassignment.js";
import { convertNoPipeImpure } from "./ruleConverters/no-pipe-impure.js";
import { convertNoQueriesMetadataProperty } from "./ruleConverters/no-queries-metadata-property.js";
import { convertNoRedundantBoolean } from "./ruleConverters/no-redundant-boolean.js";
import { convertNoRedundantJsdoc } from "./ruleConverters/no-redundant-jsdoc.js";
import { convertNoRedundantJump } from "./ruleConverters/no-redundant-jump.js";
import { convertNoRedundantParentheses } from "./ruleConverters/no-redundant-parentheses.js";
import { convertNoReference } from "./ruleConverters/no-reference.js";
import { convertNoReferenceImport } from "./ruleConverters/no-reference-import.js";
import { convertNoRegexSpaces } from "./ruleConverters/no-regex-spaces.js";
import { convertNoRequireImports } from "./ruleConverters/no-require-imports.js";
import { convertNoReturnAwait } from "./ruleConverters/no-return-await.js";
import { convertNoSameLineConditional } from "./ruleConverters/no-same-line-conditional.js";
import { convertNoSelfAssignment } from "./ruleConverters/no-self-assignment.js";
import { convertNoShadowedVariable } from "./ruleConverters/no-shadowed-variable.js";
import { convertNoSmallSwitch } from "./ruleConverters/no-small-switch.js";
import { convertNoSparseArrays } from "./ruleConverters/no-sparse-arrays.js";
import { convertNoStringLiteral } from "./ruleConverters/no-string-literal.js";
import { convertNoStringThrow } from "./ruleConverters/no-string-throw.js";
import { convertNoSubmoduleImports } from "./ruleConverters/no-submodule-imports.js";
import { convertNoSuspiciousComment } from "./ruleConverters/no-suspicious-comment.js";
import { convertNoSwitchCaseFallThrough } from "./ruleConverters/no-switch-case-fall-through.js";
import { convertNoThisAssignment } from "./ruleConverters/no-this-assignment.js";
import { convertNoTrailingWhitespace } from "./ruleConverters/no-trailing-whitespace.js";
import { convertNoUnboundMethod } from "./ruleConverters/no-unbound-method.js";
import { convertNoUnconditionalJump } from "./ruleConverters/no-unconditional-jump.js";
import { convertNoUnnecessaryClass } from "./ruleConverters/no-unnecessary-class.js";
import { convertNoUnnecessaryFieldInitialization } from "./ruleConverters/no-unnecessary-field-initialization.js";
import { convertNoUnnecessaryInitializer } from "./ruleConverters/no-unnecessary-initializer.js";
import { convertNoUnnecessaryQualifier } from "./ruleConverters/no-unnecessary-qualifier.js";
import { convertNoUnnecessarySemicolons } from "./ruleConverters/no-unnecessary-semicolons.js";
import { convertNoUnnecessaryTypeAssertion } from "./ruleConverters/no-unnecessary-type-assertion.js";
import { convertNoUnsafeFinally } from "./ruleConverters/no-unsafe-finally.js";
import { convertNoUnusedArray } from "./ruleConverters/no-unused-array.js";
import { convertNoUnusedExpression } from "./ruleConverters/no-unused-expression.js";
import { convertNoUnusedVariable } from "./ruleConverters/no-unused-variable.js";
import { convertNoUseBeforeDeclare } from "./ruleConverters/no-use-before-declare.js";
import { convertNoUseOfEmptyReturnValue } from "./ruleConverters/no-use-of-empty-return-value.js";
import { convertNoUselessCast } from "./ruleConverters/no-useless-cast.js";
import { convertNoUselessCatch } from "./ruleConverters/no-useless-catch.js";
import { convertNoVarKeyword } from "./ruleConverters/no-var-keyword.js";
import { convertNoVarRequires } from "./ruleConverters/no-var-requires.js";
import { convertNoVariableUsageBeforeDeclaration } from "./ruleConverters/no-variable-usage-before-declaration.js";
import { convertNoVoidExpression } from "./ruleConverters/no-void-expression.js";
import { convertNoWithStatement } from "./ruleConverters/no-with-statement.js";
import { convertNonLiteralFsPath } from "./ruleConverters/non-literal-fs-path.js";
import { convertNonLiteralRequire } from "./ruleConverters/non-literal-require.js";
import { convertObjectLiteralKeyQuotes } from "./ruleConverters/object-literal-key-quotes.js";
import { convertObjectLiteralShorthand } from "./ruleConverters/object-literal-shorthand.js";
import { convertOneLine } from "./ruleConverters/one-line.js";
import { convertOneVariablePerDeclaration } from "./ruleConverters/one-variable-per-declaration.js";
import { convertOnlyArrowFunctions } from "./ruleConverters/only-arrow-functions.js";
import { convertOrderedImports } from "./ruleConverters/ordered-imports.js";
import { convertParametersMaxNumber } from "./ruleConverters/parameters-max-number.js";
import { convertPipePrefix } from "./ruleConverters/pipe-prefix.js";
import { convertPossibleTimingAttack } from "./ruleConverters/possible-timing-attack.js";
import { convertPreferArrayLiteral } from "./ruleConverters/prefer-array-literal.js";
import { convertPreferConditionalExpression } from "./ruleConverters/prefer-conditional-expression.js";
import { convertPreferConst } from "./ruleConverters/prefer-const.js";
import { convertPreferDefaultLast } from "./ruleConverters/prefer-default-last.js";
import { convertPreferForOf } from "./ruleConverters/prefer-for-of.js";
import { convertPreferFunctionOverMethod } from "./ruleConverters/prefer-function-over-method.js";
import { convertPreferImmediateReturn } from "./ruleConverters/prefer-immediate-return.js";
import { convertPreferInlineDecorator } from "./ruleConverters/prefer-inline-decorator.js";
import { convertPreferObjectSpread } from "./ruleConverters/prefer-object-spread.js";
import { convertPreferOnPushComponentChangeDetection } from "./ruleConverters/prefer-on-push-component-change-detection.js";
import { convertPreferOutputReadonly } from "./ruleConverters/prefer-output-readonly.js";
import { convertPreferReadonly } from "./ruleConverters/prefer-readonly.js";
import { convertPreferSwitch } from "./ruleConverters/prefer-switch.js";
import { convertPreferTemplate } from "./ruleConverters/prefer-template.js";
import { convertPromiseFunctionAsync } from "./ruleConverters/promise-function-async.js";
import { convertQuotemark } from "./ruleConverters/quotemark.js";
import { convertRadix } from "./ruleConverters/radix.js";
import { convertReactA11yAccessibleHeadings } from "./ruleConverters/react-a11y-accessible-headings.js";
import { convertReactA11yAnchors } from "./ruleConverters/react-a11y-anchors.js";
import { convertReactA11yAriaUnsupportedElements } from "./ruleConverters/react-a11y-aria-unsupported-elements.js";
import { convertReactA11yEventHasRole } from "./ruleConverters/react-a11y-event-has-role.js";
import { convertReactA11yImageButtonHasAlt } from "./ruleConverters/react-a11y-image-button-has-alt.js";
import { convertReactA11yImgHasAlt } from "./ruleConverters/react-a11y-img-has-alt.js";
import { convertReactA11yLang } from "./ruleConverters/react-a11y-lang.js";
import { convertReactA11yNoOnchange } from "./ruleConverters/react-a11y-no-onchange.js";
import { convertReactA11yProps } from "./ruleConverters/react-a11y-props.js";
import { convertReactA11yProptypes } from "./ruleConverters/react-a11y-proptypes.js";
import { convertReactA11yRole } from "./ruleConverters/react-a11y-role.js";
import { convertReactA11yRoleHasRequiredAriaProps } from "./ruleConverters/react-a11y-role-has-required-aria-props.js";
import { convertReactA11yRoleSupportsAriaProps } from "./ruleConverters/react-a11y-role-supports-aria-props.js";
import { convertReactA11yTabIndexNoPositive } from "./ruleConverters/react-a11y-tabindex-no-positive.js";
import { convertReactNoDangerousHtml } from "./ruleConverters/react-no-dangerous-html.js";
import { convertReactTsxCurlySpacing } from "./ruleConverters/react-tsx-curly-spacing.js";
import { convertReactUnusedPropsAndState } from "./ruleConverters/react-unused-props-and-state.js";
import { convertRelativeUrlPrefix } from "./ruleConverters/relative-url-prefix.js";
import { convertRestrictPlusOperands } from "./ruleConverters/restrict-plus-operands.js";
import { convertRxjsAdd } from "./ruleConverters/rxjs-add.js";
import { convertRxjsBanObservables } from "./ruleConverters/rxjs-ban-observables.js";
import { convertRxjsBanOperators } from "./ruleConverters/rxjs-ban-operators.js";
import { convertRxjsDeepOperators } from "./ruleConverters/rxjs-deep-operators.js";
import { convertRxjsFinnish } from "./ruleConverters/rxjs-finnish.js";
import { convertRxjsJust } from "./ruleConverters/rxjs-just.js";
import { convertRxjsNoAdd } from "./ruleConverters/rxjs-no-add.js";
import { convertRxjsNoAsyncSubscribe } from "./ruleConverters/rxjs-no-async-subscribe.js";
import { convertRxjsNoCompat } from "./ruleConverters/rxjs-no-compat.js";
import { convertRxjsNoConnectable } from "./ruleConverters/rxjs-no-connectable.js";
import { convertRxjsNoCreate } from "./ruleConverters/rxjs-no-create.js";
import { convertRxjsNoDeepOperators } from "./ruleConverters/rxjs-no-deep-operators.js";
import { convertRxjsNoExplicitGenerics } from "./ruleConverters/rxjs-no-explicit-generics.js";
import { convertRxjsNoExposedSubjects } from "./ruleConverters/rxjs-no-exposed-subjects.js";
import { convertRxjsNoFinnish } from "./ruleConverters/rxjs-no-finnish.js";
import { convertRxjsNoIgnoredError } from "./ruleConverters/rxjs-no-ignored-error.js";
import { convertRxjsNoIgnoredNotifier } from "./ruleConverters/rxjs-no-ignored-notifier.js";
import { convertRxjsNoIgnoredObservable } from "./ruleConverters/rxjs-no-ignored-observable.js";
import { convertRxjsNoIgnoredReplayBuffer } from "./ruleConverters/rxjs-no-ignored-replay-buffer.js";
import { convertRxjsNoIgnoredSubscribe } from "./ruleConverters/rxjs-no-ignored-subscribe.js";
import { convertRxjsNoIgnoredSubscription } from "./ruleConverters/rxjs-no-ignored-subscription.js";
import { convertRxjsNoIgnoredTakeWhileValue } from "./ruleConverters/rxjs-no-ignored-takewhile-value.js";
import { convertRxjsNoImplicitAnyCatch } from "./ruleConverters/rxjs-no-implicit-any-catch.js";
import { convertRxjsNoIndex } from "./ruleConverters/rxjs-no-index.js";
import { convertRxjsNoInternal } from "./ruleConverters/rxjs-no-internal.js";
import { convertRxjsNoNestedSubscribe } from "./ruleConverters/rxjs-no-nested-subscribe.js";
import { convertRxjsNoOperator } from "./ruleConverters/rxjs-no-operator.js";
import { convertRxjsNoPatched } from "./ruleConverters/rxjs-no-patched.js";
import { convertRxjsNoRedundantNotify } from "./ruleConverters/rxjs-no-redundant-notify.js";
import { convertRxjsNoShareReplay } from "./ruleConverters/rxjs-no-sharereplay.js";
import { convertRxjsNoSubclass } from "./ruleConverters/rxjs-no-subclass.js";
import { convertRxjsNoSubjectUnubscribe } from "./ruleConverters/rxjs-no-subject-unsubscribe.js";
import { convertRxjsNoSubjectValue } from "./ruleConverters/rxjs-no-subject-value.js";
import { convertRxjsNoTap } from "./ruleConverters/rxjs-no-tap.js";
import { convertRxjsNoToPromise } from "./ruleConverters/rxjs-no-topromise.js";
import { convertRxjsNoUnboundMethods } from "./ruleConverters/rxjs-no-unbound-methods.js";
import { convertRxjsNoUnsafeCatch } from "./ruleConverters/rxjs-no-unsafe-catch.js";
import { convertRxjsNoUnsafeFirst } from "./ruleConverters/rxjs-no-unsafe-first.js";
import { convertRxjsNoUnsafeScope } from "./ruleConverters/rxjs-no-unsafe-scope.js";
import { convertRxjsNoUnsafeSubjectNext } from "./ruleConverters/rxjs-no-unsafe-subject-next.js";
import { convertRxjsNoUnsafeSwitchmap } from "./ruleConverters/rxjs-no-unsafe-switchmap.js";
import { convertRxjsNoUnsafeTakeUntil } from "./ruleConverters/rxjs-no-unsafe-takeuntil.js";
import { convertRxjsNoUnsafeTakewhile } from "./ruleConverters/rxjs-no-unsafe-takewhile.js";
import { convertRxjsNoUnusedAdd } from "./ruleConverters/rxjs-no-unused-add.js";
import { convertRxjsNoWholesale } from "./ruleConverters/rxjs-no-wholesale.js";
import { convertRxjsPreferAdd } from "./ruleConverters/rxjs-prefer-add.js";
import { convertRxjsPreferAngularAsyncPipe } from "./ruleConverters/rxjs-prefer-angular-async-pipe.js";
import { convertRxjsPreferAngularComposition } from "./ruleConverters/rxjs-prefer-angular-composition.js";
import { convertRxjsPreferAngularTakeuntil } from "./ruleConverters/rxjs-prefer-angular-takeuntil.js";
import { convertRxjsPreferObserver } from "./ruleConverters/rxjs-prefer-observer.js";
import { convertRxjsSuffixSubjects } from "./ruleConverters/rxjs-suffix-subjects.js";
import { convertRxjsThrowError } from "./ruleConverters/rxjs-throw-error.js";
import { convertSemicolon } from "./ruleConverters/semicolon.js";
import { convertSpaceBeforeFunctionParen } from "./ruleConverters/space-before-function-paren.js";
import { convertSpaceWithinParens } from "./ruleConverters/space-within-parens.js";
import { convertStrictBooleanExpressions } from "./ruleConverters/strict-boolean-expressions.js";
import { convertSwitchDefault } from "./ruleConverters/switch-default.js";
import { convertTemplateAccessibilityAltText } from "./ruleConverters/template-accessibility-alt-text.js";
import { convertTemplateAccessibilityElementsContent } from "./ruleConverters/template-accessibility-elements-content.js";
import { convertTemplateAccessibilityLabelFor } from "./ruleConverters/template-accessibility-label-for.js";
import { convertTemplateAccessibilityTabindexNoPositive } from "./ruleConverters/template-accessibility-tabindex-no-positive.js";
import { convertTemplateAccessibilityTableScope } from "./ruleConverters/template-accessibility-table-scope.js";
import { convertTemplateAccessibilityValidAria } from "./ruleConverters/template-accessibility-valid-aria.js";
import { convertTemplateBananaInBox } from "./ruleConverters/template-banana-in-box.js";
import { convertTemplateClickEventsHaveKeyEvents } from "./ruleConverters/template-click-events-have-key-events.js";
import { convertTemplateConditionalComplexity } from "./ruleConverters/template-conditional-complexity.js";
import { convertTemplateCyclomaticComplexity } from "./ruleConverters/template-cyclomatic-complexity.js";
import { convertTemplateI18N } from "./ruleConverters/template-i18n.js";
import { convertTemplateMouseEventsHaveKeyEvents } from "./ruleConverters/template-mouse-events-have-key-events.js";
import { convertTemplateNoAny } from "./ruleConverters/template-no-any.js";
import { convertTemplateNoAutofocus } from "./ruleConverters/template-no-autofocus.js";
import { convertTemplateNoCallExpression } from "./ruleConverters/template-no-call-expression.js";
import { convertTemplateNoDistractingElements } from "./ruleConverters/template-no-distracting-elements.js";
import { convertTemplateNoNegatedAsync } from "./ruleConverters/template-no-negated-async.js";
import { convertTemplateUseTrackByFunction } from "./ruleConverters/template-use-track-by-function.js";
import { convertTrailingComma } from "./ruleConverters/trailing-comma.js";
import { convertTripleEquals } from "./ruleConverters/triple-equals.js";
import { convertTypeLiteralDelimiter } from "./ruleConverters/type-literal-delimiter.js";
import { convertTypedefWhitespace } from "./ruleConverters/typedef-whitespace.js";
import { convertTypeofCompare } from "./ruleConverters/typeof-compare.js";
import { convertUnderscoreConsistentInvocation } from "./ruleConverters/underscore-consistent-invocation.js";
import { convertUnifiedSignatures } from "./ruleConverters/unified-signatures.js";
import { convertUnnecessaryBind } from "./ruleConverters/unnecessary-bind.js";
import { convertUnnecessaryConstructor } from "./ruleConverters/unnecessary-constructor.js";
import { convertUseComponentSelector } from "./ruleConverters/use-component-selector.js";
import { convertUseComponentViewEncapsulation } from "./ruleConverters/use-component-view-encapsulation.js";
import { convertUseDefaultTypeParameter } from "./ruleConverters/use-default-type-parameter.js";
import { convertUseInjectableProvidedIn } from "./ruleConverters/use-injectable-provided-in.js";
import { convertUseIsnan } from "./ruleConverters/use-isnan.js";
import { convertUseLifecycleInterface } from "./ruleConverters/use-lifecycle-interface.js";
import { convertUsePipeDecorator } from "./ruleConverters/use-pipe-decorator.js";
import { convertUsePipeTransformInterface } from "./ruleConverters/use-pipe-transform-interface.js";
import { convertUsePrimitiveType } from "./ruleConverters/use-primitive-type.js";
import { convertVariableName } from "./ruleConverters/variable-name.js";

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
    ["class-method-newlines", convertClassMethodNewlines],
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
    ["rxjs-add", convertRxjsAdd],
    ["rxjs-ban-observables", convertRxjsBanObservables],
    ["rxjs-ban-operators", convertRxjsBanOperators],
    ["rxjs-deep-operators", convertRxjsDeepOperators],
    ["rxjs-finnish", convertRxjsFinnish],
    ["rxjs-just", convertRxjsJust],
    ["rxjs-no-add", convertRxjsNoAdd],
    ["rxjs-no-async-subscribe", convertRxjsNoAsyncSubscribe],
    ["rxjs-no-compat", convertRxjsNoCompat],
    ["rxjs-no-connectable", convertRxjsNoConnectable],
    ["rxjs-no-create", convertRxjsNoCreate],
    ["rxjs-no-deep-operators", convertRxjsNoDeepOperators],
    ["rxjs-no-do", convertRxjsNoTap],
    ["rxjs-no-explicit-generics", convertRxjsNoExplicitGenerics],
    ["rxjs-no-exposed-subjects", convertRxjsNoExposedSubjects],
    ["rxjs-no-finnish", convertRxjsNoFinnish],
    ["rxjs-no-ignored-error", convertRxjsNoIgnoredError],
    ["rxjs-no-ignored-notifier", convertRxjsNoIgnoredNotifier],
    ["rxjs-no-ignored-observable", convertRxjsNoIgnoredObservable],
    ["rxjs-no-ignored-replay-buffer", convertRxjsNoIgnoredReplayBuffer],
    ["rxjs-no-ignored-subscribe", convertRxjsNoIgnoredSubscribe],
    ["rxjs-no-ignored-subscription", convertRxjsNoIgnoredSubscription],
    ["rxjs-no-ignored-takewhile-value", convertRxjsNoIgnoredTakeWhileValue],
    ["rxjs-no-implicit-any-catch", convertRxjsNoImplicitAnyCatch],
    ["rxjs-no-index", convertRxjsNoIndex],
    ["rxjs-no-internal", convertRxjsNoInternal],
    ["rxjs-no-nested-subscribe", convertRxjsNoNestedSubscribe],
    ["rxjs-no-operator", convertRxjsNoOperator],
    ["rxjs-no-patched", convertRxjsNoPatched],
    ["rxjs-no-redundant-notify", convertRxjsNoRedundantNotify],
    ["rxjs-no-sharereplay", convertRxjsNoShareReplay],
    ["rxjs-no-subclass", convertRxjsNoSubclass],
    ["rxjs-no-subject-unsubscribe", convertRxjsNoSubjectUnubscribe],
    ["rxjs-no-subject-value", convertRxjsNoSubjectValue],
    ["rxjs-no-tap", convertRxjsNoTap],
    ["rxjs-no-topromise", convertRxjsNoToPromise],
    ["rxjs-no-unbound-methods", convertRxjsNoUnboundMethods],
    ["rxjs-no-unsafe-catch", convertRxjsNoUnsafeCatch],
    ["rxjs-no-unsafe-first", convertRxjsNoUnsafeFirst],
    ["rxjs-no-unsafe-scope", convertRxjsNoUnsafeScope],
    ["rxjs-no-unsafe-subject-next", convertRxjsNoUnsafeSubjectNext],
    ["rxjs-no-unsafe-switchmap", convertRxjsNoUnsafeSwitchmap],
    ["rxjs-no-unsafe-takeuntil", convertRxjsNoUnsafeTakeUntil],
    ["rxjs-no-unsafe-takewhile", convertRxjsNoUnsafeTakewhile],
    ["rxjs-no-unused-add", convertRxjsNoUnusedAdd],
    ["rxjs-no-wholesale", convertRxjsNoWholesale],
    ["rxjs-prefer-add", convertRxjsPreferAdd],
    ["rxjs-prefer-angular-async-pipe", convertRxjsPreferAngularAsyncPipe],
    ["rxjs-prefer-angular-composition", convertRxjsPreferAngularComposition],
    ["rxjs-prefer-angular-takeuntil", convertRxjsPreferAngularTakeuntil],
    ["rxjs-prefer-observer", convertRxjsPreferObserver],
    ["rxjs-suffix-subjects", convertRxjsSuffixSubjects],
    ["rxjs-throw-error", convertRxjsThrowError],
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
