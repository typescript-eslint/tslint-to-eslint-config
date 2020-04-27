export type TSLintToESLintSettings = {
    /**
     * Output ESLint configuration file path, such as `.eslintrc.js`.
     */
    config: string;

    /**
     * File globs to convert `tslint:disable` comments within to `eslint-disable`.
     */
    comments?: string | string[];

    /**
     * Original Editor configuration file path, such as `.vscode/settings.json`.
     */
    editor?: string;

    /**
     * Original ESLint configuration file path, such as `.eslintrc.js`.
     */
    eslint?: string;

    /**
     * Original packages configuration file path, such as `package.json`.
     */
    package?: string;

    /**
     * Add `eslint-config-prettier` to the plugins list.
     */
    prettier?: boolean;

    /**
     * Original TSLint configuration file path, such as `tslint.json`.
     */
    tslint?: string;

    /**
     * Original TypeScript configuration file path, such as `tsconfig.json`.
     */
    typescript?: string;
};

export type TSLintToESLintResult = ResultWithStatus;

export enum ResultStatus {
    Succeeded = 0,
    Failed = 1,
    ConfigurationError = 2,
}

export type ResultWithStatus = ConfigurationErrorResult | FailedResult | SucceededResult;

export type ResultWithDataStatus<Data> = FailedResult | SucceededDataResult<Data>;

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
