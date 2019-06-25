import { emptyConversionResults } from "../stubs";
import { createNewConfiguration } from "./createNewConfiguration";
import { ConfigConversionResults } from "../rules/convertRules";

describe("createNewConfiguration", () => {
    it("excludes the tslint plugin when there are no missing rules", async () => {
        // Arrange
        const conversionResults: ConfigConversionResults = {
            ...emptyConversionResults,
            converted: new Map(),
        };
        const writeFile = jest.fn().mockReturnValue(Promise.resolve());

        // Act
        await createNewConfiguration(conversionResults, writeFile);

        // Assert
        expect(writeFile).toHaveBeenLastCalledWith(
            ".eslintrc.json",
            JSON.stringify(
                {
                    parser: "@typescript-eslint/parser",
                    parserOptions: {
                        project: "tsconfig.json",
                    },
                    rules: {},
                },
                undefined,
                4,
            ),
        );
    });

    it("includes typescript-eslint plugin settings when there are missing rules", async () => {
        // Arrange
        const conversionResults: ConfigConversionResults = {
            ...emptyConversionResults,
            converted: new Map(),
            missing: [
                {
                    ruleArguments: [],
                    ruleName: "tslint-rule-one",
                    ruleSeverity: "error",
                },
            ],
        };
        const writeFile = jest.fn().mockReturnValue(Promise.resolve());

        // Act
        await createNewConfiguration(conversionResults, writeFile);

        // Assert
        expect(writeFile).toHaveBeenLastCalledWith(
            ".eslintrc.json",
            JSON.stringify(
                {
                    parser: "@typescript-eslint/parser",
                    parserOptions: {
                        project: "tsconfig.json",
                    },
                    plugins: ["@typescript-eslint/tslint"],
                    rules: {
                        "@typescript-eslint/tslint/config": [
                            "error",
                            {
                                rules: {
                                    "tslint-rule-one": true,
                                },
                            },
                        ],
                    },
                },
                undefined,
                4,
            ),
        );
    });
});
