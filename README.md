# tslint-to-eslint-config

[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-e72163.svg)](https://prettier.io)
![Coverage: 100%](https://img.shields.io/badge/coverage-100%25-orange.svg)
![TypeScript: Strict](https://img.shields.io/badge/typescript-strict-yellow.svg)
[![NPM version](https://badge.fury.io/js/tslint-to-eslint-config.svg)](http://badge.fury.io/js/tslint-to-eslint-config)
[![Circle CI](https://img.shields.io/circleci/build/github/JoshuaKGoldberg/tslint-to-eslint-config.svg)](https://circleci.com/gh/JoshuaKGoldberg/tslint-to-eslint-config)
[![Join the chat at https://gitter.im/tslint-to-eslint-config/community](https://img.shields.io/badge/chat-gitter-informational.svg)](https://gitter.im/tslint-to-eslint-config/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Code Style: Prettier](https://img.shields.io/badge/speed-blazingly_fast-blueviolet.svg)](https://prettier.io)

Converts your TSLint configuration to the closest possible ESLint equivalent.

👉 Did you know [TSLint is being deprecated this year](https://github.com/palantir/tslint/issues/4534)?
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

### CLI Flags

Each of these flags is optional.

#### `eslint`

```shell
npx tslint-to-eslint-config --eslint ./path/to/seslintrc.json
```

_Default: `.eslintrc.js`_

Path to an ESLint configuration file to read settings from.
This isn't yet used for anything, but will eventually inform settings for the generated ESLint configuration file.

#### `package`

```shell
npx tslint-to-eslint-config --package ./path/to/package.json
```

_Default: `package.json`_

Path to a `package.json` file to read dependencies from.
This will help inform the generated ESLint configuration file's [env](https://eslint.org/docs/user-guide/configuring#specifying-parser-options) settings.

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

Path to a `tsconfig.json` file to read TypeScript compiler options from.
This will help inform the generated ESLint configuration file's [env](https://eslint.org/docs/user-guide/configuring#specifying-parser-options) settings.

## Development

See the [Code of Conduct](./.github/CODE_OF_CONDUCT.md) and [general development docs](./docs/Development.md). 💖
