import { convertPreferAngularAsyncPipe } from "../prefer-angular-async-pipe";

describe(convertPreferAngularAsyncPipe, () => {
    test("conversion without arguments", () => {
        const result = convertPreferAngularAsyncPipe({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "prefer-async-pipe",
                },
            ],
            plugins: ["rxjs-angular"],
        });
    });
});
