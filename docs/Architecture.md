# Architecture

## CLI Architecture

-   CLI usage starts in `bin/tslint-to-eslint-config`, which immediately calls `src/cli/main.ts`.
-   CLI settings are parsed and read in `src/cli/runCli.ts`.
-   Application logic is run by `src/conversion/convertConfig.ts`.

## Dependencies

Methods are created using a variant of [Dependency Injection](http://en.wikipedia.org/wiki/Dependency_Injection).
Any method with dependencies that should be stubbed out during tests, such as file system bindings, logging, or other methods,
takes in a first argument of name `dependencies`.
Its dependencies object is manually created in `src/cli/main.ts` and bound to the method with `bind`.
