const { promises: fs } = require("fs");
const { EOL } = require("os");

const filePath = "./src/converters/lintConfigs/rules/ruleConverters.ts";

module.exports.rewriteConvertersMap = async ({ args, tslintPascalCase }) => {
    const lines = (await fs.readFile(filePath)).toString().split(/\r\n|\r|\n/);

    /**
     * Inserts a new line alphabetically into the file lines.
     *
     * @param {string} insertion Line to be added.
     * @param {number} start Starting point to begin comparing at.
     * @param {number} end Last line to compare at, and add just after as a fallback.
     * @param {(line: string) => string} [mapLine] Transforms lines to be sorted.
     * @remarks In theory this could use binary search, but... why bother?
     */
    const insertAlphabetically = (insertion, start, end, mapLine = (line) => line) => {
        const sorter = mapLine(insertion);

        for (let i = start; i < lines.length; i += 1) {
            if (mapLine(lines[i]) > sorter) {
                lines.splice(i, 0, insertion);
                return;
            }
        }

        lines.splice(end, 0, insertion);
    };

    insertAlphabetically(
        `import { convert${tslintPascalCase} } from "./ruleConverters/${args.tslint}";`,
        0,
        lines.indexOf(""),
        (line) => line.split(" from ")[1],
    );

    insertAlphabetically(
        `    ["${args.tslint}", convert${tslintPascalCase}],`,
        lines.indexOf("export const ruleConverters = new Map([") + 1,
        lines.indexOf("]);"),
    );

    await fs.writeFile(filePath, lines.join(EOL));
};
