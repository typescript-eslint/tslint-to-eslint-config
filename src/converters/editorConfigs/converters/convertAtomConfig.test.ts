import { describe, expect, it } from "@jest/globals";
import * as CsonParser from "cson-parser";

import { convertAtomConfig } from "./convertAtomConfig";

describe("convertAtomConfig", () => {
    it("preserves the original config when no linter-tslint settings exist", () => {
        // Arrange
        const editorSettings = { unrelated: true };

        // Act
        const result = convertAtomConfig(CsonParser.stringify(editorSettings));

        // Assert
        expect(result).toEqual({
            contents: CsonParser.stringify(editorSettings, null, 4),
            missing: [],
        });
    });

    it("includes useGlobalEslint when useLocalTslint exists", () => {
        // Arrange
        const editorSettings = {
            "linter-tslint": {
                useLocalTslint: true,
            },
            unrelated: true,
        };

        // Act
        const result = convertAtomConfig(CsonParser.stringify(editorSettings));

        // Assert
        expect(result).toEqual({
            contents: CsonParser.stringify(
                {
                    "linter-tslint": {
                        useLocalTslint: true,
                    },
                    unrelated: true,
                    "linter-eslint": {
                        global: {
                            useGlobalEslint: false,
                        },
                    },
                },
                null,
                4,
            ),
            missing: [],
        });
    });

    it("includes missing notices when known missing settings are included", () => {
        // Arrange
        const editorSettings = {
            "linter-tslint": {
                enableSemanticRules: true,
                rulesDirectory: true,
            },
        };

        // Act
        const result = convertAtomConfig(CsonParser.stringify(editorSettings));

        // Assert
        expect(result).toEqual({
            contents: CsonParser.stringify(editorSettings, null, 4),
            missing: ["enableSemanticRules", "rulesDirectory"],
        });
    });
});
