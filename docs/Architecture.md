# Architecture

## CLI Architecture

1.  CLI usage starts in `bin/tslint-to-eslint-config`, which immediately calls `src/cli/main.ts`.
2.  CLI settings are parsed and read in `src/cli/runCli.ts`.
3.  Application logic is run by `src/conversion/convertConfig.ts`.

## Configuration Conversion

Within `src/conversion/convertConfig.ts`, the following steps occur:

1. Existing configurations are read from disk
2. TSLint rules are converted into their ESLint configurations
3. ESLint configurations are simplified based on extended ESLint presets
4. The simplified configuration is written to the output config file
5. A summary of the results is printed to the user's console

### Rule Converters

Each TSLint rule should output at least one ESLint rule as the equivalent.
"Converters" for TSLint rules are located in `src/rules/converters/`, and keyed under their names by the map in `src/rules/converters.ts`.

Each converter for a TSLint rule takes an arguments object for the rule, and returns an array of objects containing:

-   `ruleName`: Equivalent ESLint rule name that should be enabled
-   `ruleArguments`: Any arguments for that ESLint rule

Multiple objects must be supported because some general-use TSLint rules can only be represented by two or more ESLint rules.
For example, TSLint's `no-banned-terms` is represented by ESLint's `no-caller` and `no-eval`.

### Rule Mergers

It's possible that one ESLint rule will be output by multiple converters.
"Mergers" for those ESLint rules should take in two configurations to the same rule and output the equivalent single configuration.
These are located in `src/rules/mergers/`, and keyed under their names by the map in `src/rules/mergers.ts`.

For example, `@typescript-eslint/ban-types` spreads both arguments' `types` members into one large `types` object.
