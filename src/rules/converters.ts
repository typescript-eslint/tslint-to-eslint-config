import { convertAdjacentOverloadSignatures } from "./converters/adjacent-overload-signatures";
import { convertArrayType } from "./converters/array-type";
import { convertArrowParens } from "./converters/arrow-parens";
import { convertArrowReturnShorthand } from "./converters/arrow-return-shorthand";
import { convertAwaitPromise } from "./converters/await-promise";
import { convertBanCommaOperator } from "./converters/ban-comma-operator";
import { convertBanTsIgnore } from "./converters/ban-ts-ignore";
import { convertBanTypes } from "./converters/ban-types";
import { convertBinaryExpressionOperandOrder } from "./converters/binary-expression-operand-order";
import { convertCallableTypes } from "./converters/callable-types";
import { convertClassName } from "./converters/class-name";
import { convertCurly } from "./converters/curly";
import { convertCyclomaticComplexity } from "./converters/cyclomatic-complexity";
import { convertEofline } from "./converters/eofline";
import { convertMemberAccess } from "./converters/member-access";
import { convertFileNameCasing } from "./converters/file-name-casing";
import { convertForin } from "./converters/forin";
import { convertFunctionConstructor } from "./converters/function-constructor";
import { convertIncrementDecrement } from "./converters/increment-decrement";
import { convertIndent } from "./converters/indent";
import { convertInterfaceName } from "./converters/interface-name";
import { convertInterfaceOverTypeLiteral } from "./converters/interface-over-type-literal";
import { convertLabelPosition } from "./converters/label-position";
import { convertLinebreakStyle } from "./converters/linebreak-style";
import { convertMaxClassesPerFile } from "./converters/max-classes-per-file";
import { convertMaxFileLineCount } from "./converters/max-file-line-count";
import { convertMaxLineLength } from "./converters/max-line-length";
import { convertMemberOrdering } from "./converters/member-ordering";
import { convertNewlineBeforeReturn } from "./converters/newline-before-return";
import { convertNewlinePerChainedCall } from "./converters/newline-per-chained-call";
import { convertNewParens } from "./converters/new-parens";
import { convertNoAngleBracketTypeAssertion } from "./converters/no-angle-bracket-type-assertion";
import { convertNoArg } from "./converters/no-arg";
import { convertNoBannedTerms } from "./converters/no-banned-terms";
import { convertNoBitwise } from "./converters/no-bitwise";
import { convertNoConditionalAssignment } from "./converters/no-conditional-assignment";
import { convertNoConsecutiveBlankLines } from "./converters/no-consecutive-blank-lines";
import { convertNoConsole } from "./converters/no-console";
import { convertNoConstantCondition } from "./converters/no-constant-condition";
import { convertNoConstruct } from "./converters/no-construct";
import { convertNoControlRegex } from "./converters/no-control-regex";
import { convertNoDebugger } from "./converters/no-debugger";
import { convertNoDuplicateImports } from "./converters/no-duplicate-imports";
import { convertNoDuplicateSuper } from "./converters/no-duplicate-super";
import { convertNoDuplicateSwitchCase } from "./converters/no-duplicate-switch-case";
import { convertNoEmpty } from "./converters/no-empty";
import { convertNoEmptyInterface } from "./converters/no-empty-interface";
import { convertNoEval } from "./converters/no-eval";
import { convertNoExplicitAny } from "./converters/no-explicit-any";
import { convertNoFloatingPromises } from "./converters/no-floating-promises";
import { convertNoForIn } from "./converters/no-for-in";
import { convertNoForInArray } from "./converters/no-for-in-array";
import { convertNoInferrableTypes } from "./converters/no-inferrable-types";
import { convertNoInternalModule } from "./converters/no-internal-module";
import { convertNoInvalidRegexp } from "./converters/no-invalid-regexp";
import { convertNoInvalidTemplateStrings } from "./converters/no-invalid-template-strings";
import { convertNoInvalidThis } from "./converters/no-invalid-this";
import { convertNoIrregularWhitespace } from "./converters/no-irregular-whitespace";
import { convertNoMagicNumbers } from "./converters/no-magic-numbers";
import { convertNoMisusedNew } from "./converters/no-misused-new";
import { convertNoMultilineString } from "./converters/no-multiline-string";
import { convertNoNamespace } from "./converters/no-namespace";
import { convertNoNonNullAssertion } from "./converters/no-non-null-assertion";
import { convertNoObjectLiteralTypeAssertion } from "./converters/no-object-literal-type-assertion";
import { convertNoOctalLiteral } from "./converters/no-octal-literal";
import { convertNoParameterProperties } from "./converters/no-parameter-properties";
import { convertNoParameterReassignment } from "./converters/no-parameter-reassignment";
import { convertNoReference } from "./converters/no-reference";
import { convertNoRegexSpaces } from "./converters/no-regex-spaces";
import { convertNoRequireImports } from "./converters/no-require-imports";
import { convertNoReturnAwait } from "./converters/no-return-await";
import { convertNoSparseArrays } from "./converters/no-sparse-arrays";
import { convertNoStringLiteral } from "./converters/no-string-literal";
import { convertNoStringThrow } from "./converters/no-string-throw";
import { convertNoSwitchCaseFallThrough } from "./converters/no-switch-case-fall-through";
import { convertNoThisAssignment } from "./converters/no-this-assignment";
import { convertNoTrailingWhitespace } from "./converters/no-trailing-whitespace";
import { convertNoUnboundMethod } from "./converters/no-unbound-method";
import { convertNoUnnecessaryClass } from "./converters/no-unnecessary-class";
import { convertNoUnnecessaryInitializer } from "./converters/no-unnecessary-initializer";
import { convertNoUnnecessaryQualifier } from "./converters/no-unnecessary-qualifier";
import { convertNoUnnecessarySemicolons } from "./converters/no-unnecessary-semicolons";
import { convertNoUnnecessaryTypeAssertion } from "./converters/no-unnecessary-type-assertion";
import { convertNoUnsafeFinally } from "./converters/no-unsafe-finally";
import { convertNoUseBeforeDeclare } from "./converters/no-use-before-declare";
import { convertNoVarKeyword } from "./converters/no-var-keyword";
import { convertNoVarRequires } from "./converters/no-var-requires";
import { convertNoVoidExpression } from "./converters/no-void-expression";
import { convertObjectLiteralKeyQuotes } from "./converters/object-literal-key-quotes";
import { convertObjectLiteralShorthand } from "./converters/object-literal-shorthand";
import { convertOneVariablePerDeclaration } from "./converters/one-variable-per-declaration";
import { convertOnlyArrowFunctions } from "./converters/only-arrow-functions";
import { convertPreferConst } from "./converters/prefer-const";
import { convertPreferForOf } from "./converters/prefer-for-of";
import { convertPreferFunctionOverMethod } from "./converters/prefer-function-over-method";
import { convertPreferObjectSpread } from "./converters/prefer-object-spread";
import { convertPreferReadonly } from "./converters/prefer-readonly";
import { convertPreferTemplate } from "./converters/prefer-template";
import { convertPromiseFunctionAsync } from "./converters/promise-function-async";
import { convertRadix } from "./converters/radix";
import { convertRestrictPlusOperands } from "./converters/restrict-plus-operands";
import { convertSpaceBeforeFunctionParen } from "./converters/space-before-function-paren";
import { convertSwitchDefault } from "./converters/switch-default";
import { convertTypedefWhitespace } from "./converters/typedef-whitespace";
import { convertTypeLiteralDelimiter } from "./converters/type-literal-delimiter";
import { convertTypeofCompare } from "./converters/typeof-compare";
import { convertUnifiedSignatures } from "./converters/unified-signatures";
import { convertUnnecessaryBind } from "./converters/unnecessary-bind";
import { convertUnnecessaryConstructor } from "./converters/unnecessary-constructor";
import { convertUseIsnan } from "./converters/use-isnan";
import { convertQuotemark } from "./converters/quotemark";
import { convertTripleEquals } from "./converters/triple-equals";

/**
 * Keys TSLint rule names to their ESLint rule converters.
 */
export const converters = new Map([
    ["adjacent-overload-signatures", convertAdjacentOverloadSignatures],
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
    ["curly", convertCurly],
    ["cyclomatic-complexity", convertCyclomaticComplexity],
    ["eofline", convertEofline],
    ["file-name-casing", convertFileNameCasing],
    ["forin", convertForin],
    ["function-constructor", convertFunctionConstructor],
    ["increment-decrement", convertIncrementDecrement],
    ["indent", convertIndent],
    ["interface-name", convertInterfaceName],
    ["interface-over-type-literal", convertInterfaceOverTypeLiteral],
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
    ["no-banned-terms", convertNoBannedTerms],
    ["no-bitwise", convertNoBitwise],
    ["no-conditional-assignment", convertNoConditionalAssignment],
    ["no-consecutive-blank-lines", convertNoConsecutiveBlankLines],
    ["no-console", convertNoConsole],
    ["no-constant-condition", convertNoConstantCondition],
    ["no-construct", convertNoConstruct],
    ["no-control-regex", convertNoControlRegex],
    ["no-debugger", convertNoDebugger],
    ["no-duplicate-imports", convertNoDuplicateImports],
    ["no-duplicate-super", convertNoDuplicateSuper],
    ["no-duplicate-switch-case", convertNoDuplicateSwitchCase],
    ["no-empty-interface", convertNoEmptyInterface],
    ["no-empty", convertNoEmpty],
    ["no-eval", convertNoEval],
    ["no-floating-promises", convertNoFloatingPromises],
    ["no-for-in-array", convertNoForInArray],
    ["no-for-in", convertNoForIn],
    ["no-inferrable-types", convertNoInferrableTypes],
    ["no-internal-module", convertNoInternalModule],
    ["no-invalid-regexp", convertNoInvalidRegexp],
    ["no-invalid-template-strings", convertNoInvalidTemplateStrings],
    ["no-invalid-this", convertNoInvalidThis],
    ["no-irregular-whitespace", convertNoIrregularWhitespace],
    ["no-magic-numbers", convertNoMagicNumbers],
    ["no-misused-new", convertNoMisusedNew],
    ["no-multiline-string", convertNoMultilineString],
    ["no-namespace", convertNoNamespace],
    ["no-non-null-assertion", convertNoNonNullAssertion],
    ["no-object-literal-type-assertion", convertNoObjectLiteralTypeAssertion],
    ["no-octal-literal", convertNoOctalLiteral],
    ["no-parameter-properties", convertNoParameterProperties],
    ["no-parameter-reassignment", convertNoParameterReassignment],
    ["no-reference", convertNoReference],
    ["no-regex-spaces", convertNoRegexSpaces],
    ["no-require-imports", convertNoRequireImports],
    ["no-return-await", convertNoReturnAwait],
    ["no-sparse-arrays", convertNoSparseArrays],
    ["no-string-literal", convertNoStringLiteral],
    ["no-string-throw", convertNoStringThrow],
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
    ["no-use-before-declare", convertNoUseBeforeDeclare],
    ["no-var-keyword", convertNoVarKeyword],
    ["no-var-requires", convertNoVarRequires],
    ["no-void-expression", convertNoVoidExpression],
    ["object-literal-key-quotes", convertObjectLiteralKeyQuotes],
    ["object-literal-shorthand", convertObjectLiteralShorthand],
    ["one-variable-per-declaration", convertOneVariablePerDeclaration],
    ["only-arrow-functions", convertOnlyArrowFunctions],
    ["prefer-const", convertPreferConst],
    ["prefer-for-of", convertPreferForOf],
    ["prefer-function-over-method", convertPreferFunctionOverMethod],
    ["prefer-object-spread", convertPreferObjectSpread],
    ["prefer-readonly", convertPreferReadonly],
    ["prefer-template", convertPreferTemplate],
    ["promise-function-async", convertPromiseFunctionAsync],
    ["quotemark", convertQuotemark],
    ["radix", convertRadix],
    ["restrict-plus-operands", convertRestrictPlusOperands],
    ["space-before-function-paren", convertSpaceBeforeFunctionParen],
    ["switch-default", convertSwitchDefault],
    ["triple-equals", convertTripleEquals],
    ["type-literal-delimiter", convertTypeLiteralDelimiter],
    ["typedef-whitespace", convertTypedefWhitespace],
    ["typeof-compare", convertTypeofCompare],
    ["unified-signatures", convertUnifiedSignatures],
    ["unnecessary-bind", convertUnnecessaryBind],
    ["unnecessary-constructor", convertUnnecessaryConstructor],
    ["use-isnan", convertUseIsnan],

    // These converters are all for rules that need more complex option conversions.
    // Some of them will likely need to have notices about changed lint behaviors...
    // If you're willing to take on that work, that'd be great! Please send PRs! 💖
    // As these are enabled, they should be added in sorted order to the list above.

    // TSLint core rules:
    // ["ban", convertBan], // no-restricted-properties
    // ["import-blacklist", convertImportBlacklist], // no-restricted-imports
    // ["no-duplicate-variable", convertNoDuplicateVariable], // no-redeclare
    // ["no-shadowed-variable", convertNoShadowedVariable], // no-shadow
    // ["no-unused-expression", convertNoUnusedExpression], // no-unused-expressions
    // ["space-within-parens", convertSpaceWithinParens], // space-in-parens
    // ["variable-name", convertVariableName], // a bunch of rules...

    // tslint-microsoft-contrib rules:
    // ["max-func-body-length", convertMaxFuncBodyLength],
    // ["no-empty-line-after-opening-brace", convertNoEmptyLineAfterOpeningBrace], // padded-blocks
    // ["no-function-expression", convertNoFunctionExpression], // ban-syntax config
    // ["no-suspicious-comment", convertNoSuspiciousComment],
    // ["no-with-statement", convertNoWithStatement],
]);
