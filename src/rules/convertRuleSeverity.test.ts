import { convertTSLintRuleSeverity, convertRawESLintRuleSeverity } from "./convertRuleSeverity";

describe("convertRuleSeverity", () => {
    it("returns error when the severity is error", () => {
        // Arrange
        const tslintSeverity = "error";

        // Act
        const eslintSeverity = convertTSLintRuleSeverity(tslintSeverity);

        // Assert
        expect(eslintSeverity).toEqual("error");
    });

    it("returns off when the severity is off", () => {
        // Arrange
        const tslintSeverity = "off";

        // Act
        const eslintSeverity = convertTSLintRuleSeverity(tslintSeverity);

        // Assert
        expect(eslintSeverity).toEqual("off");
    });

    it("returns warn when the severity is warning", () => {
        // Arrange
        const tslintSeverity = "warning";

        // Act
        const eslintSeverity = convertTSLintRuleSeverity(tslintSeverity);

        // Assert
        expect(eslintSeverity).toEqual("warn");
    });
});

describe("convertRawESLintRuleSeverity", () => {
    it("returns off when the severity is 0", () => {
        // Arrange
        const rawSeverity = 0;

        // Act
        const converted = convertRawESLintRuleSeverity(rawSeverity);

        // Assert
        expect(converted).toEqual("off");
    });

    it("returns warn when the severity is 1", () => {
        // Arrange
        const rawSeverity = 1;

        // Act
        const converted = convertRawESLintRuleSeverity(rawSeverity);

        // Assert
        expect(converted).toEqual("warn");
    });

    it("returns error when the severity is 2", () => {
        // Arrange
        const rawSeverity = 2;

        // Act
        const converted = convertRawESLintRuleSeverity(rawSeverity);

        // Assert
        expect(converted).toEqual("error");
    });

    it("returns the original severity when it's a string", () => {
        // Arrange
        const rawSeverity = "warn";

        // Act
        const converted = convertRawESLintRuleSeverity(rawSeverity);

        // Assert
        expect(converted).toEqual("warn");
    });
});
