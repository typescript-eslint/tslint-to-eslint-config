import { TSLintRuleOptions } from "./types";

export class ConversionError {
    public constructor(
        public readonly error: Error,
        public readonly tslintRule: TSLintRuleOptions,
    ) {}
}
