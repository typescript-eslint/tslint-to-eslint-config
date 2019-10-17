import { RuleConverter } from "../converter";

export const convertTrailingComma: RuleConverter = tslintRule => {
    const eslintArgs =
        tslintRule.ruleArguments.length !== 0
            ? collectArguments(tslintRule.ruleArguments)
            : undefined;

    return {
        rules: [
            {
                ruleName: "comma-dangle",
                ...(eslintArgs && { ruleArguments: [eslintArgs] }),
            },
        ],
    };
};

function collectArguments(args: any[]) {
    const tslintArg: any = args[0];
    const { multiline, singleline } = tslintArg;

    if (typeof multiline === "object" || typeof singleline === "object") {
        const fields = mergePropertyKeys(singleline, multiline);
        const single = getFieldValue(singleline);
        const multi = getFieldValue(multiline);

        return fields.reduce(
            (acc, field) => ({
                ...acc,
                ...collectFields(field, single, multi),
            }),
            {},
        );
    }

    if (
        multiline === TSLintValue.Always &&
        (singleline === undefined || singleline === TSLintValue.Never)
    ) {
        return ESLintValue.AlwaysMultiline;
    }

    if (multiline === TSLintValue.Always && singleline === TSLintValue.Always) {
        return ESLintValue.Always;
    }

    return;
}

function mergePropertyKeys(singleline: any, multiline: any) {
    const getKeysIfObject = (field: any) => (typeof field === "object" ? Object.keys(field) : []);
    const singlelineKeys = getKeysIfObject(singleline);
    const multilineKeys = getKeysIfObject(multiline);

    const uniqueKeys = [...new Set([...singlelineKeys, ...multilineKeys])];
    const unsupportedKeyInEsLint = "typeLiterals";

    return uniqueKeys.filter(field => field !== unsupportedKeyInEsLint);
}

function collectFields(fieldName: string, singleline: any, multiline: any) {
    const hasSingleline = Boolean(singleline);
    const hasSinglelineAndFieldExist = Boolean(singleline && singleline[fieldName]);
    const hasSinglelineAlways = Boolean(singleline && singleline[fieldName] === TSLintValue.Always);
    const hasMultilineAlways = Boolean(multiline && multiline[fieldName] === TSLintValue.Always);

    if (!hasSingleline && hasMultilineAlways) {
        return {
            [fieldName]: ESLintValue.AlwaysMultiline,
        };
    }

    if (!hasSinglelineAndFieldExist && hasMultilineAlways) {
        return {
            [fieldName]: ESLintValue.AlwaysMultiline,
        };
    }

    if (!hasSinglelineAlways && hasMultilineAlways) {
        return {
            [fieldName]: ESLintValue.AlwaysMultiline,
        };
    }

    if (hasSinglelineAlways && hasMultilineAlways) {
        return {
            [fieldName]: ESLintValue.Always,
        };
    }

    return {
        [fieldName]: ESLintValue.Never,
    };
}

function getFieldValue(value: string | object) {
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

enum TSLintValue {
    Always = "always",
    Never = "never",
}

enum ESLintValue {
    Never = "never",
    Always = "always",
    AlwaysMultiline = "always-multiline",
    OnlyMultiline = "only-multiline",
    Ignore = "ignore",
}
