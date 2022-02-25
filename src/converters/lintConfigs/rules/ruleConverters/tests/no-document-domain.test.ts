import { describe, expect, test } from "@jest/globals";

import { convertNoDocumentDomain } from "../no-document-domain.js";

describe("convertNoDocumentDomain", () => {
    test("conversion without arguments", () => {
        const result = convertNoDocumentDomain({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleArguments: [
                        {
                            message: "Forbidden write to document.domain.",
                            selector:
                                'AssignmentExpression[left.type="MemberExpression"][left.object.name="document"][left.property.name="domain"]',
                        },
                        {
                            message: "Forbidden write to document.domain.",
                            selector:
                                'AssignmentExpression[left.type="MemberExpression"][left.object.type="MemberExpression"][left.object.object.name="window"][left.object.property.name="document"][left.property.name="domain"]',
                        },
                    ],
                    ruleName: "no-restricted-syntax",
                },
            ],
        });
    });
});
