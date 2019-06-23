export type TSLintToESLintSettings = {
    config?: string;
};

export enum ResultStatus {
    Succeeded = 0,
    Failed = 1,
    ConfigurationError = 2,
}

export type TSLintToESLintResult = ConfigurationErrorResult | FailedResult | SucceededResult;

export type ConfigurationErrorResult = {
    readonly complaint: string;
    readonly status: ResultStatus.ConfigurationError;
};

export type FailedResult = {
    readonly error: Error;
    readonly status: ResultStatus.Failed;
};

export type SucceededResult = {
    readonly status: ResultStatus.Succeeded;
};
