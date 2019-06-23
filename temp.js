const fs = require("fs").promises;
const sourceDir = `./src/rules/converters`;
const testsDir = `./src/rules/converters/tests`;

const main = async () => {
    const fileNames = await fs.readdir(sourceDir);

    for (const fileName of fileNames) {
        if (!fileName.endsWith(".ts") || fileName.endsWith(".d.ts")) continue;

        const ruleName = fileName.replace(".ts", "");
        const newPath = testsDir + "/" + ruleName + ".test.ts";
        const camelCase = convertToCamelCase(ruleName);
        const converter = "convert" + camelCase[0].toUpperCase() + camelCase.slice(1);

        const actualConverter = require(sourceDir + "/" + ruleName)[converter];
        let result;

        try {
            result = actualConverter();
        } catch (error) {
            result = actualConverter({ ruleArguments: [] });
        }

        await fs.writeFile(
            newPath,
            `import { ${converter} } from "../${ruleName}";

describe(${converter}, () => {
    test("conversion", () => {
        const result = ${converter}({
            ruleArguments: [],
        });

        expect(result).toEqual(${JSON.stringify(result, undefined, 4)});
    });
});
`,
        );
    }
};

const convertToCamelCase = text => {
    let result = "";

    for (const part of text.split("-")) {
        result += part[0].toUpperCase() + part.slice(1);
    }

    return result[0].toLowerCase() + result.slice(1);
};

main().catch(error => {
    console.error({ error });
});
