import { describe, expect, it, jest } from "@jest/globals";

import { bind } from "./binding";

describe("bind", () => {
    it("calls the original method with bound dependencies when called", () => {
        // Arrange
        const dependencies = { original: true };
        const method = jest.fn<undefined, [unknown, string, string]>();
        const bound = bind(method, dependencies);

        // Act
        bound("first", "second");

        // Assert
        expect(method).toHaveBeenLastCalledWith(dependencies, "first", "second");
    });
});
