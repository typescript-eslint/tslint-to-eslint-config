# Linters

TSLint-to-ESLint linter configuration conversion is the first root-level converter run.
Within `src/converters/lintConfigs/convertLintConfig.ts`, the following steps occur:

1. Deduplicated ESLint rules and metadata are generated from raw TSLint rules.
    1a. Raw TSLint rules are mapped to their ESLint equivalents.
    1b. Those ESLint equivalents are deduplicated and relevant preset(s) detected.
2. Those deduplicated rules and metadata are written to the output configuration file.
3. A summary of conversion results is printed, along with any now-missing packages.

> Stepss 1 and 2 are the logic exported by the [Node API](../API.md) as [`convertTSLintConfig`](../API.md#convertTSLintConfig).

## Rule Conversion

The parts of linter configurations most users focus on are the rule converters.
Those are run by `src/converters/lintConfigs/rules/convertRules.ts`, which takes the following steps on each original TSLint rule:

1. The raw TSLint rule is converted to a standardized format.
2. The appropriate converter is run for the rule.
3. If the rule is missing or the conversion failed, this is marked.
4. For each output rule equivalent given by the conversion:
    * The output rule name is added to the TSLint rule's equivalency set.
    * The TSLint rule's config severity is mapped to its ESLint equivalent.
    * If this is the first time the output ESLint rule is seen, it's directly marked as converted.
    * If not, a rule merger is run to combine it with its existing output settings.

### Rule Converters

Each TSLint rule should output at least one ESLint rule as the equivalent.
"Converters" for TSLint rules are located in `src/rules/converters/`, and keyed under their names by the map in `src/rules/converters.ts`.

Each converter for a TSLint rule takes an arguments object for the rule, and returns an array of objects containing:

-   `rules`: At least one equivalent ESLint rule and options
-   `notices`: Any extra info that should be printed after conversion
-   `plugins`: Any plugins that should now be installed if not already

The `rules` output is an array of objects containing:

-   `ruleName`: Equivalent ESLint rule name that should be enabled
-   `ruleArguments`: Any arguments for that ESLint rule

Multiple objects must be supported because some general-use TSLint rules can only be represented by two or more ESLint rules.
For example, TSLint's `no-banned-terms` is represented by ESLint's `no-caller` and `no-eval`.

### Rule Mergers

It's possible that one ESLint rule will be output by multiple converters.
"Mergers" for those ESLint rules should take in two configurations to the same rule and output the equivalent single configuration.
These are located in `src/rules/mergers/`, and keyed under their names by the map in `src/rules/mergers.ts`.

For example, `@typescript-eslint/ban-types` spreads both arguments' `types` members into one large `types` object.

> A merger does not need to be created if the rule does not accept any configuration or all converters output exactly the same configuration.

## Package Summaries

ESLint configurations are summarized based on extended ESLint and TSLint presets.

- If no output rules conflict with `eslint-config-prettier`, it's added in.
- Any ESLint rules that are configured the same as an extended preset are trimmed.
