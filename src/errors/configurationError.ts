import { EOL } from "os";

import { ErrorSummary } from "./errorSummary.js";

export class ConfigurationError implements ErrorSummary {
    public constructor(private readonly error: Error, private readonly complaint: string) {}

    public getSummary(): string {
        return `${this.complaint}: ${this.error.stack}${EOL}`;
    }
}
