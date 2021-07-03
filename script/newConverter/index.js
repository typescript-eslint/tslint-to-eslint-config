const { Command } = require("commander");
const { upperFirst, camelCase } = require("lodash");

const { rewriteConvertersMap } = require("./rewriteConvertersMap");
const { writeConverter } = require("./writeConverter");
const { writeConverterTest } = require("./writeConverterTest");

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

    await rewriteConvertersMap({ args, tslintPascalCase });
    await writeConverter({ args, plugins, tslintPascalCase });
    await writeConverterTest({ args, plugins, tslintPascalCase });
})();
