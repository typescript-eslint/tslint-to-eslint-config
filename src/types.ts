/**
 * Configuration file paths to read from.
 */
export type ConfigurationLocations = {
    /**
     * Output ESLint configuration file path, such as `.eslintrc.js`.
     */
    config: string;

    /*
     * Original Editor configuration file path(s), such as `.vscode/settings.json`.
     */
    editor?: string | string[];

    /**
     * Original ESLint configuration file path, such as `.eslintrc.js`.
     */
    eslint?: string;

    /**
     * Original packages configuration file path, such as `package.json`.
     */
    package?: string;

    /**
     * Original TSLint configuration file path, such as `tslint.json`.
     */
    tslint?: string;

    /**
     * Original TypeScript configuration file path, such as `tsconfig.json`.
     */
    typescript?: string;
};

/**
 * Settings to find and convert configurations to an ESLint configuration.
 */
export type LintConfigConversionSettings = ConfigurationLocations & {
    /**
     * Whether to add `eslint-config-prettier` to the plugins list.
     */
    prettier?: boolean;
};

/**
 * Base settings to run conversions with.
 */
export type TSLintToESLintSettings = LintConfigConversionSettings & {
    /**
     * File globs to convert `tslint:disable` comments within to `eslint-disable`.
     */
    comments?: true | string | string[];

    /**
     * Original Editor configuration file path, such as `.vscode/settings.json`.
     */
    editor?: string;
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

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export type SucceededDataResult<Data> = Data extends void
    ? {
          readonly status: ResultStatus.Succeeded;
      }
    : {
          readonly data: Data;
          readonly status: ResultStatus.Succeeded;
      };
