import * as CsonParser from "cson-parser";

import { convertAtomConfig } from "./convertAtomConfig";

describe("convertAtomConfig", () => {
    it("preserves the original config when no linter-tslint settings exist", () => {
        // Arrange
        const editorSettings = { unrelated: true };

        // Act
        const result = convertAtomConfig(CsonParser.stringify(editorSettings));

        // Assert
        expect(result).toEqual(CsonParser.stringify(editorSettings));
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
        expect(result).toEqual(
            CsonParser.stringify({
                "linter-tslint": {
                    useLocalTslint: true,
                },
                unrelated: true,
                "linter-eslint": {
                    global: {
                        useGlobalEslint: false,
                    },
                },
            }),
        );
    });
});
