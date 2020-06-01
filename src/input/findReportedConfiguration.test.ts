import { createStubExec, createStubThrowingExec } from "../adapters/exec.stubs";
import { findReportedConfiguration, DeepPartial } from "./findReportedConfiguration";

describe("findReportedConfiguration", () => {
    it("returns stderr as an error when the command fails with a zero exit code", async () => {
        // Arrange
        const stderr = "error";
        const exec = createStubExec({ stderr });

        // Act
        const result = await findReportedConfiguration(exec, "command", "sample.json");

        // Assert
        expect(result).toEqual(new Error(stderr));
    });

    it("returns stderr as an error when the command fails with a non-zero exit code", async () => {
        // Arrange
        const stderr = "error";
        const exec = createStubThrowingExec({ stderr });

        // Act
        const result = await findReportedConfiguration(exec, "command", "sample.json");

        // Assert
        expect(result).toEqual(new Error(stderr));
    });

    it("returns a parse error when the command returns invalid JSON", async () => {
        // Arrange
        const stdout = "invalid";
        const exec = createStubExec({ stdout });

        // Act
        const result = await findReportedConfiguration(exec, "command", "sample.json");

        // Assert
        expect(result).toEqual(
            new Error(
                "Error parsing configuration: SyntaxError: Unexpected token i in JSON at position 0",
            ),
        );
    });

    it("returns parsed JSON when the command returns valid JSON", async () => {
        // Arrange
        const rules = { "rule-a": true };
        const stdout = JSON.stringify({ rules });
        const exec = createStubExec({ stdout });

        // Act
        const result = await findReportedConfiguration(exec, "command", "sample.json");

        // Assert
        expect(result).toEqual({
            rules,
        });
    });

    it("declares a correct DeepPartial type", () => {
        type RulesType = {
            "rule-a": boolean;
            "rule-b": { component: string; deeper: { key: boolean } };
        };
        type PartialRules = DeepPartial<RulesType>;

        type Expected = {
            "rule-a"?: boolean;
            "rule-b"?: { component?: string; deeper?: { key?: boolean } };
        };

        type Equals<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
            ? true
            : false;
        const assertion: Equals<PartialRules, Expected> = true;
        expect(assertion).toBeTruthy();
    });
});
