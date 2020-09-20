# Architecture

tslint-to-eslint-config is a heavily tested CLI app with application flow starting in `bin/tslint-to-eslint-config`:

1. `src/cli/main.ts`'s `main` is called with `process.argv` as the program arguments.
    * This file sets up all function dependencies and bound functions that call to each other.
2. `src/cli/runCli.ts`'s `runCli` is called with those bound dependencies and raw arguments.

> See [Dependencies.md](./Dependencies.md) for more info on functions and their dependencies are bound together.

## CLI Runner

Within `runCli`:

1. CLI options are parsed from the raw arguments into a commands object.
2. If the version should be printed, we do that and stop execution.
3. Any existing linter and TypeScript configurations are read from disk.
4. Each converter is run, halting execution if it fails.

### Converters

Within that flow, there are three "root-level" converters directly called by `runCli`, in order:

1. **[Linters.md](./Linters.md)**: Converting from an original TSLint configuration to the equivalent TSLint configuration.
2. **[Editors.md](./Editors.md)**: Creating new IDE settings for ESLint equivalent to any existing TSLint settings.
3. **[Comments.md](./Comments.md)**: Converting inline `tslint:disable` lint disable comments to their `eslint-disable` equivalents.
