const { promises: fs } = require("fs");

module.exports.writeConverter = async ({ args, plugins, tslintPascalCase }) => {
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
};
