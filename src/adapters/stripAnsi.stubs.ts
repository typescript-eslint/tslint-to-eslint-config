// This file shamelessly copied from:
// * https://github.com/chalk/ansi-regex/blob/a28b8e7/index.js
// * https://github.com/chalk/strip-ansi/blob/7cda68d/index.js
// Both are under MIT license.
// See my ESM struggles here: https://github.com/typescript-eslint/tslint-to-eslint-config/pull/1205

const ansiRegex = () => {
    const pattern = [
        "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
        "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))",
    ].join("|");

    return new RegExp(pattern, "g");
};

export const stripAnsi = (text: string) => {
    return text.replace(ansiRegex(), "");
};
