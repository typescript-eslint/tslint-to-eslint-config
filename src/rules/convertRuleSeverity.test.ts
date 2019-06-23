import { convertRuleSeverity } from "./convertRuleSeverity";

describe("convertRuleSeverity", () => {
    it("returns error when the severity is error", () => {
        // Arrange
        const tslintSeverity = "error";

        // Act
        const eslintSeverity = convertRuleSeverity(tslintSeverity);

        // Assert
        expect(eslintSeverity).toEqual("error");
    });

    it("returns off when the severity is off", () => {
        // Arrange
        const tslintSeverity = "off";

        // Act
        const eslintSeverity = convertRuleSeverity(tslintSeverity);

        // Assert
        expect(eslintSeverity).toEqual("off");
    });

    it("returns warn when the severity is warning", () => {
        // Arrange
        const tslintSeverity = "warning";

        // Act
        const eslintSeverity = convertRuleSeverity(tslintSeverity);

        // Assert
        expect(eslintSeverity).toEqual("warn");
    });
});
