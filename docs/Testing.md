# Testing

```
npm run test
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
