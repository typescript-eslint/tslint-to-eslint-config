import { isDefined, isError } from "./utils";

describe("isDefined", () => {
    it("returns true when the item is defined", () => {
        // Arrange
        const item = true;

        // Act
        const defined = isDefined(item);

        // Assert
        expect(defined).toBe(true);
    });

    it("returns false when the item is not defined", () => {
        // Arrange
        const item = undefined;

        // Act
        const defined = isDefined(item);

        // Assert
        expect(defined).toBe(false);
    });
});

describe("isError", () => {
    it("returns true when the item is an error", () => {
        // Arrange
        const item = new Error();

        // Act
        const result = isError(item);

        // Assert
        expect(result).toBe(true);
    });

    it("returns false when the item is not an error", () => {
        // Arrange
        const item = {};

        // Act
        const result = isError(item);

        // Assert
        expect(result).toBe(false);
    });
});
