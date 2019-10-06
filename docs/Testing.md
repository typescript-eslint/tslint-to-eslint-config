# Testing

## Unit Tests

```
npm run test:unit
```

Each `src/**/*.ts` source file should have an equivalent `*.test.ts` next to it.
Tests should include comments above each section of the "AAA" testing format:

-   `// Arrange`: Set up dependencies for the code under test
-   `// Act`: Perform the logic under test
-   `// Assert`: Check the results of the acted logic

`tslint-to-eslint-config` requires 100% unit test coverage, excluding the following:

-   `src/cli/main.ts`
-   `src/adapters/*.ts`
-   `src/**/*.stubs.ts`

See [Dependencies](./Dependencies.md) for how static dependencies are stubbed out in functions.
That system is how functions can receive stubs and spies during unit tests.

## End-to-End Tests

```shell
npm run test:end-to-end
```

End-to-end tests that execute the `bin/tslint-to-eslint` command and validate outputs are generated from the directories in `test/tests/`.
Each directory there contains:

-   `test.ts`: Test file that runs `createTests(__dirname);` to set up tests in that directory
-   `.eslintrc.js`: `.gitignore`d output from the most recent test run
-   `expected.txt`: Expected output ESLint configuration
-   `stderr.txt`: Expected output written to the process `stderr`
-   `stdout.txt`: Expected output written to the process `stdout`
-   `tslint.json`: Original TSLint configuration file to convert

Within each directory, a test suite will execute `bin/tslint-to-eslint` and validate the outputs match what's on disk.

Use `npm run test:end-to-end:accept` to overwrite the expected contents of files with what is actually written.
These behave similarly to updating snapshots in snapshot testing.

> Note: these end-to-end tests use the compiled result of `npm run tsc`, so if you update source code, re-run `npm run tsc` before `npm run test:end-to-end`.
