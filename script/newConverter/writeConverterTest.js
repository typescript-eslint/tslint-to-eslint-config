const { promises: fs } = require("fs");

module.exports.writeConverterTest = async ({ args, tslintPascalCase, plugins }) => {
    const ruleArgumentsTest = args.sameArguments
        ? `
        
    test("conversion with an argument", () => {
        const result = convert${tslintPascalCase}({
            ruleArguments: ["TODO"],
        });

        expect(result).toEqual({${plugins.replace("\n", "\n    ")}
            rules: [
                {
                    ruleArguments: ["TODO"],
                    ruleName: "${args.eslint}",
                },
            ],
        });
    });
        `
        : "";

    const body = args.eslint
        ? `
            rules: [
                {
                    ruleName: "${args.eslint}",
                },
            ],
        `
        : "";

    await fs.writeFile(
        `./src/converters/lintConfigs/rules/ruleConverters/tests/${args.tslint}.test.ts`,
        `
import { convert${tslintPascalCase} } from "../${args.tslint}";

describe(convert${tslintPascalCase}, () => {
    test("conversion without arguments", () => {
        const result = convert${tslintPascalCase}({
            ruleArguments: [],
        });

        expect(result).toEqual({${plugins.replace("\n", "\n    ")}${body}});
    });${ruleArgumentsTest}
});
`.trimLeft(),
    );
};
