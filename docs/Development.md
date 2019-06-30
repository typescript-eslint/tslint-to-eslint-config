# Development

Thanks for looking at tslint-to-eslint-config!
It's very new and I very much would appreciate your help.

Any issue marked as [accepting prs](https://github.com/JoshuaKGoldberg/tslint-to-eslint-config/issues?q=is%3Aissue+is%3Aopen+label%3A%22accepting+prs%22) on the issue tracker is fair game to take on.

Please do file issues if you find bugs or lacking features!

## Local Setup

After installing [Node >=10](https://nodejs.org/en/download), clone and install packages locally with:

```shell
git clone https://github.com/joshuakgoldberg/tslint-to-eslint-config
cd tslint-to-eslint-config
npm i
```

Compile with `npm run tsc` and run tests with `npm run test`.

### CLI Architecture

-   CLI usage starts in `bin/tslint-to-eslint-config`, which immediately calls `src/cli/main.ts`.
-   CLI settings are parsed and read in `src/cli/runCli.ts`.
-   Application logic is run by `src/conversion/convertConfig.ts`.

### Dependencies

Methods are created using a variant of [Dependency Injection](http://en.wikipedia.org/wiki/Dependency_Injection).
Any method with dependencies that should be stubbed out during tests, such as file system bindings, logging, or other methods,
takes in a first argument of name `dependencies`.
Its dependencies object is manually created in `src/cli/main.ts` and bound to the method with `bind`.

### Unit Tests

Each `src/**/*.ts` source file should have an equivalent `*.test.ts` next to it.
Tests should include comments above each section of the "AAA" testing format:

-   `// Arrange`: Set up dependencies for the code under test
-   `// Act`: Perform the logic under test
-   `// Assert`: Check the results of the acted logic

`tslint-to-eslint-config` requires 100% unit test coverage, excluding the following:

-   `src/cli/main.ts`
-   `src/adapters/*.ts`
-   `src/**/*.stubs.ts`
