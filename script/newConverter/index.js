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

    if (!args.tslint) {
        throw new Error(`Missing --tslint option.`);
    }

    if (args.sameArguments && !args.eslint) {
        throw new Error(`Cannot use --sameArguments without --eslint.`);
    }

    const tslintPascalCase = upperFirst(camelCase(args.tslint)).replace("A11Y", "A11y");
    const plugins =
        args.eslint && args.eslint.includes("/")
            ? `
        plugins: ["${args.eslint.split("/")[0]}"],`
            : "";

    await rewriteConvertersMap({ args, tslintPascalCase });
    await writeConverter({ args, plugins, tslintPascalCase });
    await writeConverterTest({ args, plugins, tslintPascalCase });
})();
