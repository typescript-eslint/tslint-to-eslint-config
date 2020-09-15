# tslint-to-eslint-config

[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-e72163.svg)](https://prettier.io)
![Coverage: 100%](https://img.shields.io/badge/coverage-100%25-orange.svg)
![TypeScript: Strict](https://img.shields.io/badge/typescript-strict-yellow.svg)
[![NPM version](https://badge.fury.io/js/tslint-to-eslint-config.svg)](http://badge.fury.io/js/tslint-to-eslint-config)
[![Circle CI](https://img.shields.io/circleci/build/github/typescript-eslint/tslint-to-eslint-config.svg)](https://circleci.com/gh/typescript-eslint/tslint-to-eslint-config)
[![Join the chat at https://gitter.im/tslint-to-eslint-config/community](https://img.shields.io/badge/chat-gitter-informational.svg)](https://gitter.im/tslint-to-eslint-config/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Code Style: Prettier](https://img.shields.io/badge/speed-blazingly_fast-blueviolet.svg)](https://prettier.io)

Converts your TSLint configuration to the closest reasonable ESLint equivalent.

👉 Did you know [TSLint is deprecated](https://github.com/palantir/tslint/issues/4534)?
Hooray!
Use `tslint-to-eslint-config` to expedite migrating your project onto ESLint.

Consider taking a peek at the relevant documentation: 🤔

-   [ESLint](https://eslint.org/docs) itself
-   [typescript-eslint](https://typescript-eslint.io), which allows TypeScript files to be linted by ESLint

## Usage

```shell
npx tslint-to-eslint-config
```

_⚡ (wow, so simple!) ⚡_

The `tslint-to-eslint-config` command reads in any existing linter, TypeScript, and package configuration files, then creates an `.eslintrc.js` result based on them.

For any TSLint rules with corresponding ESLint equivalents, those equivalents will be used in the new configuration.
TSLint rules without ESLint equivalents will be wrapped with [eslint-plugin-tslint](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin-tslint).

> Requires Node 10+ (LTS) and TSLint 5.18+

### FAQs

We **strongly** advise reading [docs/FAQs.md](./docs/FAQs.md) before planning your conversion from TSLint to ESLint.

### CLI Flags

Each of these flags is optional:

-   **[`comments`](#comments)**: TypeScript configuration or file glob path(s) to convert TSLint rule flags to ESLint within.
-   **[`config`](#config)**: Path to print the generated ESLint configuration file to.
-   **[`editor`](#editor)**: Path to an editor configuration file to convert linter settings within.
-   **[`eslint`](#eslint)**: Path to an ESLint configuration file to read settings from.
-   **[`package`](#package)**: Path to a package.json file to read dependencies from.
-   **[`prettier`](#prettier)**: Add `eslint-config-prettier` to the plugins list.
-   **[`tslint`](#tslint)**: Path to a TSLint configuration file to read settings from.
-   **[`typescript`](#typescript)**: Path to a TypeScript configuration file to read TypeScript compiler options from.

#### `comments`

```shell
npx tslint-to-eslint-config --comments
```

_Default: none_

Indicates to convert from [TSLint rule flags](https://palantir.github.io/tslint/usage/rule-flags) to [ESLint inline comments](https://eslint.org/docs/user-guide/configuring#disabling-rules-with-inline-comments).
Comments such as `// tslint:disable: tslint-rule-name` will be converted to equivalents like `// eslint-disable eslint-rule-name`.

If passed without arguments, respects the `excludes`, `files`, and `includes` in your TypeScript configuration.

If passed a single file path ending with `.json`, that is treated as a TypeScript configuration file describing with files to convert.

```shell
npx tslint-to-eslint-config --comments tsconfig.json
```

If passed any other arguments, those are treated as glob paths for file paths to convert:

```shell
npx tslint-to-eslint-config --comments 'src/**/*.ts'
```

#### `config`

```shell
npx tslint-to-eslint-config --config .eslintrc.json
```

_Default: `.eslintrc.js`_

Path to print the generated ESLint configuration file to.

The file extension of this path will be used to determine the format of the created file:

-   `.js` file paths will be written `module.exports = ...` JavaScript
-   Other file paths will default to JSON

#### `editor`

```shell
npx tslint-to-eslint-config --editor ./path/to/.vscode/settings.json
```

_Default: `.vscode/settings.json`_

Path to an editor configuration file to convert settings settings within.
Any VS Code style editor settings for TSLint will be converted to their ESLint equivalents.

#### `eslint`

```shell
npx tslint-to-eslint-config --eslint ./path/to/eslintrc.js
```

_Default: `--config`'s value_

Path to an ESLint configuration file to read settings from.
The generated ESLint configuration file will include any settings `import`ed from this file.

#### `package`

```shell
npx tslint-to-eslint-config --package ./path/to/package.json
```

_Default: `package.json`_

Path to a `package.json` file to read dependencies from.
This will help inform the generated ESLint configuration file's [env](https://eslint.org/docs/user-guide/configuring#specifying-parser-options) settings.

#### `prettier`

```shell
npx tslint-to-eslint-config --prettier
```

_Default: `false`_

Add [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) to the list of ESLint plugins.
We [highly recommend](./docs/FAQs.md#should-i-use-prettier) you use [Prettier](http://prettier.io) for code formatting.

When `--prettier` isn't enabled:

-   If the output configuration already doesn't enable any formatting rules, it'll extend from `eslint-config-prettier`.
-   Otherwise, a CLI message will suggest running with `--prettier`.

#### `tslint`

```shell
npx tslint-to-eslint-config --tslint ./path/to/tslint.json
```

_Default: `tslint.json`_

Path to a TSLint configuration file to read settings from.
This file is piped into TSLint's `--print-config` to generate the list of rules to enable in the generated ESLint configuration file.

#### `typescript`

```shell
npx tslint-to-eslint-config --typescript ./path/to/tsconfig.json
```

_Default: `tsconfig.json`_

Path to a TypeScript configuration file to read TypeScript compiler options from.
This will help inform the generated ESLint configuration file's [env](https://eslint.org/docs/user-guide/configuring#specifying-parser-options) settings.

## Development

See the [Code of Conduct](./.github/CODE_OF_CONDUCT.md) and [general development docs](./docs/Development.md). 💖
