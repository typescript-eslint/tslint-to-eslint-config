import { ESLintRuleOptions, ESLintRuleOptionsWithArguments } from "../rules/types";
import { removeExtendsDuplicatedRules } from "./removeExtendsDuplicatedRules";

const prepareTestRule = (
    ruleOptions: Partial<ESLintRuleOptions>,
    extensionConfiguration: Partial<ESLintRuleOptionsWithArguments> = {},
) => {
    const ruleName = "rule-a";
    const createSingleRuleMap = (overrides: Partial<ESLintRuleOptionsWithArguments>) => {
        return new Map<string, ESLintRuleOptionsWithArguments>([
            [
                ruleName,
                {
                    ruleArguments: [],
                    ruleName,
                    ruleSeverity: "off",
                    ...overrides,
                },
            ],
        ]);
    };
    const allRules = createSingleRuleMap(ruleOptions);
    const extensions = createSingleRuleMap(extensionConfiguration);

    return { ruleName, allRules, extensions };
};

describe("removeExtendsDuplicatedRules", () => {
    it("keeps a rule when it doesn't match an extended rule", () => {
        // Arrange
        const { allRules } = prepareTestRule({
            ruleName: "mismatched",
        });

        // Act
        const { differentRules } = removeExtendsDuplicatedRules(allRules, new Map());

        // Assert
        expect(differentRules.size).toBe(1);
    });

    it("keeps a rule when its severity doesn't match its extended rule", () => {
        // Arrange
        const { allRules, extensions } = prepareTestRule(
            {
                ruleSeverity: "warn",
            },
            {
                ruleSeverity: "error",
            },
        );

        // Act
        const { differentRules } = removeExtendsDuplicatedRules(allRules, extensions);

        // Assert
        expect(differentRules.size).toBe(1);
    });

    it("keeps a rule when its arguments don't match its extended arguments", () => {
        // Arrange
        const { allRules, extensions } = prepareTestRule(
            {
                ruleSeverity: "warn",
            },
            {
                ruleSeverity: "error",
            },
        );

        // Act
        const { differentRules } = removeExtendsDuplicatedRules(allRules, extensions);

        // Assert
        expect(differentRules.size).toBe(1);
    });

    it("keeps a rule when its arguments don't match its extended arguments", () => {
        // Arrange
        const ruleArguments = [{ value: true }];
        const { allRules, extensions } = prepareTestRule(
            {
                ruleArguments,
                ruleSeverity: "warn",
            },
            {
                ruleArguments,
                ruleSeverity: "error",
            },
        );

        // Act
        const { differentRules } = removeExtendsDuplicatedRules(allRules, extensions);

        // Assert
        expect(differentRules.size).toBe(1);
    });

    it("keeps a rule when its arguments don't exist and the extended rule has arguments", () => {
        // Arrange
        const { allRules, extensions } = prepareTestRule(
            {
                ruleArguments: undefined,
                ruleSeverity: "warn",
            },
            {
                ruleArguments: [{ value: true }],
                ruleSeverity: "warn",
            },
        );

        // Act
        const { differentRules } = removeExtendsDuplicatedRules(allRules, extensions);

        // Assert
        expect(differentRules.size).toBe(1);
    });

    it("removes a rule when it matches its extended rule", () => {
        // Arrange
        const { allRules, extensions } = prepareTestRule(
            {
                ruleSeverity: "warn",
            },
            {
                ruleSeverity: "warn",
            },
        );

        // Act
        const { differentRules } = removeExtendsDuplicatedRules(allRules, extensions);

        // Assert
        expect(differentRules.size).toBe(0);
    });

    // it("keeps a rule when there are no rules in the extension", () => {
    //     // Arrange
    //     const { allRules } = prepareTestRule(
    //         {
    //             ruleName: "mismatched",
    //         },
    //         2,
    //     );

    //     // Act
    //     const { differentRules } = removeExtendsDuplicatedRules(allRules, [{}]);

    //     // Assert
    //     expect(differentRules.size).toBe(1);
    // });

    // it("keeps a rule when it doesn't match any existing rule", () => {
    //     // Arrange
    //     const { allRules, extensions } = prepareTestRule(
    //         {
    //             ruleName: "mismatched",
    //         },
    //         2,
    //     );

    //     // Act
    //     const { differentRules } = removeExtendsDuplicatedRules(allRules, extensions);

    //     // Assert
    //     expect(differentRules.size).toBe(1);
    // });

    // it("removes a rule when it matches an existing rule as numbers", () => {
    //     // Arrange
    //     const { allRules, extensions } = prepareTestRule(
    //         {
    //             ruleSeverity: "warn",
    //         },
    //         1,
    //     );

    //     // Act
    //     const { differentRules } = removeExtendsDuplicatedRules(allRules, extensions);

    //     // Assert
    //     expect(differentRules.size).toBe(0);
    // });

    // it("removes a rule when it has no arguments and matches an extended rule with an empty arguments array", () => {
    //     // Arrange
    //     const { allRules, extensions } = prepareTestRule(
    //         {
    //             ruleArguments: undefined,
    //             ruleSeverity: "error",
    //         },
    //         ["error"],
    //     );

    //     // Act
    //     const { differentRules } = removeExtendsDuplicatedRules(allRules, extensions);

    //     // Assert
    //     expect(differentRules.size).toBe(0);
    // });

    // it("removes a rule when it has an empty arguments array and matches an extended rule with no arguments", () => {
    //     // Arrange
    //     const { allRules, extensions } = prepareTestRule(
    //         {
    //             ruleArguments: [],
    //             ruleSeverity: "error",
    //         },
    //         ["error"],
    //     );

    //     // Act
    //     const { differentRules } = removeExtendsDuplicatedRules(allRules, extensions);

    //     // Assert
    //     expect(differentRules.size).toBe(0);
    // });

    // it("keeps a rule when it conflicts with an existing rule as numbers", () => {
    //     // Arrange
    //     const { allRules, extensions } = prepareTestRule(
    //         {
    //             ruleSeverity: "warn",
    //         },
    //         2,
    //     );

    //     // Act
    //     const { differentRules } = removeExtendsDuplicatedRules(allRules, extensions);

    //     // Assert
    //     expect(differentRules.size).toBe(1);
    // });

    // it("removes a rule when it matches an existing rule as strings", () => {
    //     // Arrange
    //     const { allRules, extensions } = prepareTestRule(
    //         {
    //             ruleSeverity: "warn",
    //         },
    //         "warn",
    //     );

    //     // Act
    //     const { differentRules } = removeExtendsDuplicatedRules(allRules, extensions);

    //     // Assert
    //     expect(differentRules.size).toBe(0);
    // });

    // it("keeps a rule when it conflicts with an existing rule as strings", () => {
    //     // Arrange
    //     const { allRules, extensions } = prepareTestRule(
    //         {
    //             ruleSeverity: "warn",
    //         },
    //         "error",
    //     );

    //     // Act
    //     const { differentRules } = removeExtendsDuplicatedRules(allRules, extensions);

    //     // Assert
    //     expect(differentRules.size).toBe(1);
    // });

    // it("removes a rule when it matches an existing rule as objects", () => {
    //     // Arrange
    //     const { allRules, extensions } = prepareTestRule(
    //         {
    //             ruleArguments: ["some-argument"],
    //             ruleSeverity: "warn",
    //         },
    //         ["warn", "some-argument"],
    //     );

    //     // Act
    //     const { differentRules } = removeExtendsDuplicatedRules(allRules, extensions);

    //     // Assert
    //     expect(differentRules.size).toBe(0);
    // });

    // it("keeps a rule when it conflicts with an existing rule as objects", () => {
    //     // Arrange
    //     const { allRules, extensions } = prepareTestRule(
    //         {
    //             ruleArguments: ["some-argument-one"],
    //             ruleSeverity: "warn",
    //         },
    //         ["warn", "some-argument-modified"],
    //     );

    //     // Act
    //     const { differentRules } = removeExtendsDuplicatedRules(allRules, extensions);

    //     // Assert
    //     expect(differentRules.size).toBe(1);
    // });
});
