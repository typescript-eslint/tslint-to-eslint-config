import { promises as fs } from "fs";
import { resolve, join } from "path";

describe("@typescript-eslint rules that require another rule be disabled", () => {
    let converterFiles: string[] = [];

    beforeAll(async () => {
        const rootDirToSearch = join(__dirname, "ruleConverters");
        const converterFilePaths = (await getFiles(rootDirToSearch)).filter(
            (filePath) => filePath.endsWith(".ts") && !filePath.endsWith(".test.ts"),
        );
        converterFiles = await Promise.all(
            converterFilePaths.map(async (filePath) => (await fs.readFile(filePath)).toString()),
        );
    });

    // Source: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/README.md#extension-rules
    test.each([
        ["@typescript-eslint/brace-style", "brace-style"],
        ["@typescript-eslint/comma-dangle", "comma-dangle"],
        ["@typescript-eslint/comma-spacing", "comma-spacing"],
        ["@typescript-eslint/default-param-last", "default-param-last"],
        ["@typescript-eslint/dot-notation", "dot-notation"],
        ["@typescript-eslint/func-call-spacing", "func-call-spacing"],
        ["@typescript-eslint/indent", "indent"],
        ["@typescript-eslint/init-declarations", "init-declarations"],
        ["@typescript-eslint/keyword-spacing", "keyword-spacing"],
        ["@typescript-eslint/lines-between-class-members", "lines-between-class-members"],
        ["@typescript-eslint/no-array-constructor", "no-array-constructor"],
        ["@typescript-eslint/no-dupe-class-members", "no-dupe-class-members"],
        ["@typescript-eslint/no-duplicate-imports", "no-duplicate-imports"],
        ["@typescript-eslint/no-empty-function", "no-empty-function"],
        ["@typescript-eslint/no-extra-parens", "no-extra-parens"],
        ["@typescript-eslint/no-extra-semi", "no-extra-semi"],
        ["@typescript-eslint/no-implied-eval", "no-implied-eval"],
        ["@typescript-eslint/no-invalid-this", "no-invalid-this"],
        ["@typescript-eslint/no-loop-func", "no-loop-func"],
        ["@typescript-eslint/no-loss-of-precision", "no-loss-of-precision"],
        ["@typescript-eslint/no-magic-numbers", "no-magic-numbers"],
        ["@typescript-eslint/no-redeclare", "no-redeclare"],
        ["@typescript-eslint/no-shadow", "no-shadow"],
        ["@typescript-eslint/no-throw-literal", "no-throw-literal"],
        ["@typescript-eslint/no-unused-expressions", "no-unused-expressions"],
        ["@typescript-eslint/no-unused-vars", "no-unused-vars"],
        ["@typescript-eslint/no-use-before-define", "no-use-before-define"],
        ["@typescript-eslint/no-useless-constructor", "no-useless-constructor"],
        ["@typescript-eslint/object-curly-spacing", "object-curly-spacing"],
        ["@typescript-eslint/quotes", "quotes"],
        ["@typescript-eslint/require-await", "require-await"],
        ["@typescript-eslint/return-await", "no-return-await"],
        ["@typescript-eslint/semi", "semi"],
        ["@typescript-eslint/space-before-function-paren", "space-before-function-paren"],
        ["@typescript-eslint/space-infix-ops", "space-infix-ops"],
    ])(
        '"%s" requires to disable "%s" but it is not disabled in the converter.',
        (rule, disabledRule) => {
            converterFiles.forEach((content) => {
                checkFile(content, rule, disabledRule);
            });
        },
    );
});

function checkFile(content: string, rule: string, disabledRule: string) {
    if (
        content.includes(`ruleName: "${rule}"`) &&
        !content.includes(`ruleName: "${disabledRule}"`) &&
        !content.includes('ruleSeverity: "off"')
    ) {
        fail();
    }
}

async function getFiles(dir: string): Promise<string[]> {
    const dirents = await fs.readdir(dir, { withFileTypes: true });

    const filePromises = dirents.map(async (dirent) => {
        const res = resolve(dir, dirent.name);
        return dirent.isDirectory() ? getFiles(res) : Promise.resolve([res]);
    });

    const files = await Promise.all(filePromises);
    return Array.prototype.concat(...files);
}
