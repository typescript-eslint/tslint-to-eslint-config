const { Command } = require("commander");
const { promises: fs } = require("fs");
const { upperFirst, camelCase } = require("lodash");

(async () => {
    const command = new Command()
        .option("--eslint [eslint]", "name of the original ESLint rule")
        .option("--sameArguments [sameArguments]", "whether to copy over ruleArguments")
        .option("--tslint [tslint]", "name of the original TSLint rule");

    const args = command.parse(process.argv).opts();

    for (const arg of ["eslint", "tslint"]) {
        if (!args[arg]) {
            throw new Error(`Missing --${arg} option.`);
        }
    }

    const tslintPascalCase = upperFirst(camelCase(args.tslint));
    const plugins = args.eslint.includes("/")
        ? `
        plugins: ["${args.eslint.split("/")[0]}"],`
        : "";
    const [functionArguments, ruleArguments] = args.sameArguments
        ? [
              "tslintRule",
              `
                ...(tslintRule.ruleArguments.length !== 0 && {
                    ruleArguments: tslintRule.ruleArguments,
                }),`,
          ]
        : ["", ""];

    await fs.writeFile(
        `./src/converters/lintConfigs/rules/ruleConverters/${args.tslint}.ts`,
        `
    import { RuleConverter } from "../ruleConverter";

export const convert${tslintPascalCase}: RuleConverter = (${functionArguments}) => {
    return {${plugins}
        rules: [
            {${ruleArguments}
                ruleName: "${args.eslint}",
            },
        ],
    };
};
`.trimLeft(),
    );

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

    await fs.writeFile(
        `./src/converters/lintConfigs/rules/ruleConverters/tests/${args.tslint}.test.ts`,
        `
import { convert${tslintPascalCase} } from "../${args.tslint}";

describe(convert${tslintPascalCase}, () => {
    test("conversion without arguments", () => {
        const result = convert${tslintPascalCase}({
            ruleArguments: [],
        });

        expect(result).toEqual({${plugins.replace("\n", "\n    ")}
            rules: [
                {
                    ruleName: "${args.eslint}",
                },
            ],
        });
    });${ruleArgumentsTest}
});
`.trimLeft(),
    );
})();
