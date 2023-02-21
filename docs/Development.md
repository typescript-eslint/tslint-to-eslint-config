# Development

Thanks for looking at tslint-to-eslint-config!

Any issue marked as [accepting prs](https://github.com/typescript-eslint/tslint-to-eslint-config/issues?q=is%3Aissue+is%3Aopen+label%3A%22status:+accepting+prs%22) on the issue tracker is fair game to take on.

Please do file issues if you find bugs or lacking features!

## Local Setup

After installing [Node >= 14 (latest LTS)](https://nodejs.org/en/download), clone and install packages locally with:

```shell
git clone https://github.com/typescript-eslint/tslint-to-eslint-config
cd tslint-to-eslint-config
npm i
```

Compile with `npm run compile` and run tests with `npm run test`.

## Further Reading

-   [Architecture](./Architecture/README.md): How the general app structure operates
-   [Creating a Rule Converter](./Creating%20a%20Rule%20Converter.md): How to quickly add a missing converter for a TSLint rule
-   [Dependencies](./Dependencies.md): How functions pass and receive static dependencies
-   [Testing](./Testing.md): Unit tests
