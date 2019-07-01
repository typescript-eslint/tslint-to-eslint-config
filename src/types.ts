export type TSLintToESLintSettings = {
    /**
     * Original ESLint configuration file path, such as `.eslintrc.js`.
     */
    eslintConfig?: string;

    /**
     * Original packages configuration file path, such as `package.json`.
     */
    packages?: string;

    /**
     * Original TSLint configuration file path, such as `tslint.json`.
     */
    tslintConfig?: string;

    /**
     * Original TypeScript configuration file path, such as `tsconfig.json`.
     */
    typescriptConfig?: string;
};

export type TSLintToESLintResult = ResultWithStatus;

export enum ResultStatus {
    Succeeded = 0,
    Failed = 1,
    ConfigurationError = 2,
}

export type ResultWithStatus = ConfigurationErrorResult | FailedResult | SucceededResult;

export type ResultWithDataStatus<Data> =
    | ConfigurationErrorResult
    | FailedResult
    | SucceededDataResult<Data>;

export type ConfigurationErrorResult = {
    readonly complaints: string[];
    readonly status: ResultStatus.ConfigurationError;
};

export type FailedResult = {
    readonly errors: Error[];
    readonly status: ResultStatus.Failed;
};

export type SucceededResult = {
    readonly status: ResultStatus.Succeeded;
};

export type SucceededDataResult<Data> = {
    readonly data: Data;
    readonly status: ResultStatus.Succeeded;
};
