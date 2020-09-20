import { RuleConverter } from "../ruleConverter";

const unsupportedKeyInEsLint = "typeLiterals";

export const convertTrailingComma: RuleConverter = (tslintRule) => {
    const eslintArgs = tslintRule.ruleArguments.length
        ? collectArguments(tslintRule.ruleArguments)
        : undefined;

    const notices = tslintRule.ruleArguments.length
        ? collectNotices(tslintRule.ruleArguments)
        : undefined;

    return {
        rules: [
            {
                ruleName: "comma-dangle",
                ...(eslintArgs && { ruleArguments: [eslintArgs] }),
                ...(notices?.length && { notices }),
            },
        ],
    };
};

function collectArguments(args: TSLintArg[]): ESLintArgValue | undefined {
    const tslintArg = args[0];
    const { singleline, multiline } = tslintArg;

    if (typeof singleline === "object" || typeof multiline === "object") {
        const keys = mergePropertyKeys(singleline, multiline);
        const single = singleline && mapToObjectConfig(singleline);
        const multi = multiline && mapToObjectConfig(multiline);

        return keys.reduce(
            (acc, key) => ({
                ...acc,
                ...collectKeys(key as TSLintObjectKey, single, multi),
            }),
            {},
        );
    }

    if ((singleline === undefined || singleline === "never") && multiline === "always") {
        return "always-multiline";
    }

    if (singleline === "always" && multiline === "always") {
        return "always";
    }

    return;
}

function mergePropertyKeys(
    singleline: TSLintArgValue | undefined,
    multiline: TSLintArgValue | undefined,
): string[] {
    const getKeysIfObject = (field: TSLintArgValue | undefined): string[] =>
        typeof field === "object" ? Object.keys(field) : [];
    const singlelineKeys = getKeysIfObject(singleline);
    const multilineKeys = getKeysIfObject(multiline);

    const uniqueKeys = [...new Set([...singlelineKeys, ...multilineKeys])];

    return uniqueKeys.filter((field) => field !== unsupportedKeyInEsLint);
}

function collectKeys(
    key: TSLintObjectKey,
    singleline: TSLintObject | undefined,
    multiline: TSLintObject | undefined,
): { [key: string]: ESLintStringValue } {
    const hasSingleline = Boolean(singleline);
    const hasSinglelineAndFieldExist = Boolean(singleline?.[key]);
    const hasSinglelineAlways = Boolean(singleline && singleline[key] === "always");
    const hasMultilineAlways = Boolean(multiline && multiline[key] === "always");

    if (!hasSingleline && hasMultilineAlways) {
        return {
            [key]: "always-multiline",
        };
    }

    if (!hasSinglelineAndFieldExist && hasMultilineAlways) {
        return {
            [key]: "always-multiline",
        };
    }

    if (!hasSinglelineAlways && hasMultilineAlways) {
        return {
            [key]: "always-multiline",
        };
    }

    if (hasSinglelineAlways && hasMultilineAlways) {
        return {
            [key]: "always",
        };
    }

    return {
        [key]: "never",
    };
}

function mapToObjectConfig(value: TSLintArgValue): TSLintObject {
    return typeof value === "string"
        ? {
              arrays: value,
              objects: value,
              functions: value,
              imports: value,
              exports: value,
          }
        : value;
}

function collectNotices(args: TSLintArg[]): string[] {
    const tslintArg = args[0];

    return [buildNoticeForEsSpecCompliant(tslintArg), buildNoticeForTypeLiterals(tslintArg)].filter(
        Boolean,
    );
}

function buildNoticeForEsSpecCompliant(arg: TSLintArg): string {
    if (arg.esSpecCompliant === false) {
        return `ESLint only supports esSpecCompliant enabled`;
    }

    return "";
}

function buildNoticeForTypeLiterals(arg: TSLintArg): string {
    const { singleline, multiline } = arg;
    const hasTypeLiterals = (field: any) =>
        typeof field === "object" && Object.keys(field).includes(unsupportedKeyInEsLint);

    if (hasTypeLiterals(singleline) || hasTypeLiterals(multiline)) {
        return `ESLint does not support config property ${unsupportedKeyInEsLint}`;
    }

    return "";
}

type TSLintArg = {
    singleline?: TSLintArgValue;
    multiline?: TSLintArgValue;
    esSpecCompliant?: boolean;
};

type TSLintArgValue = TSLintStringValue | TSLintObject;
type TSLintObjectKey = keyof TSLintObject;

type TSLintObject = {
    arrays?: TSLintStringValueForObject;
    objects?: TSLintStringValueForObject;
    functions?: TSLintStringValueForObject;
    imports?: TSLintStringValueForObject;
    exports?: TSLintStringValueForObject;
    typeLiterals?: TSLintStringValueForObject;
};
type TSLintStringValue = "always" | "never";
type TSLintStringValueForObject = TSLintStringValue | "ignore";

// ESLint
type ESLintArgValue = ESLintStringValue | ESLintObject;
type ESLintStringValue = "never" | "always" | "always-multiline" | "only-multiline" | "ignore";
type ESLintObject = {
    arrays?: ESLintStringValue;
    objects?: ESLintStringValue;
    functions?: ESLintStringValue;
    imports?: ESLintStringValue;
    exports?: ESLintStringValue;
};
