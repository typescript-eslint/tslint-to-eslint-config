import { isDefined } from "./utils";

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
