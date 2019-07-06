export class ConfigurationError {
    public constructor(public readonly error: Error, public readonly complaint: string) {}
}
