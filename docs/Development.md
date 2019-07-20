# Development

Thanks for looking at tslint-to-eslint-config!
It's very new and I very much would appreciate your help.

Any issue marked as [accepting prs](https://github.com/typescript-eslint/tslint-to-eslint-config/issues?q=is%3Aissue+is%3Aopen+label%3A%22accepting+prs%22) on the issue tracker is fair game to take on.

Please do file issues if you find bugs or lacking features!

## Local Setup

After installing [Node >=10](https://nodejs.org/en/download), clone and install packages locally with:

```shell
git clone https://github.com/typescript-eslint/tslint-to-eslint-config
cd tslint-to-eslint-config
npm i
```

Compile with `npm run tsc` and run tests with `npm run test:unit`.

## Further Reading

-   [Architecture](./Architecture.md): How the general app structure operates
-   [Dependencies](./Dependencies.md): How functions pass and receive static dependencies
-   [Testing](./Testing.md): Unit and end-to-end tests
