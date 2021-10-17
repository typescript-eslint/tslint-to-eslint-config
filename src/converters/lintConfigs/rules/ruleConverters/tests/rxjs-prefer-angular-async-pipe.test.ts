import { convertRxjsPreferAngularAsyncPipe } from "../rxjs-prefer-angular-async-pipe";

describe(convertRxjsPreferAngularAsyncPipe, () => {
    test("conversion without arguments", () => {
        const result = convertRxjsPreferAngularAsyncPipe({
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
