# Frequently Asked Questions

## Should I Migrate from TSLint to ESLint?

**Yes**.

[TSLint is deprecated](https://medium.com/palantir/tslint-in-2019-1a144c2317a9) and will [only receive patches](https://github.com/palantir/tslint/issues/4534) for security vulnerabilities and breaking TypeScript changes.
Even if it still works on your project, it will become less useful over time as TypeScript evolves.

## Should I Use `tslint-to-eslint-config`?

`tslint-to-eslint-config` is recommended for use if you require near-identical behavior in transitioning from TSLint to ESLint.
This is most reasonable when your project is large enough that fixing for different linter rules would be a significant time investment.

However, after -or even better, _before_- you're migrated to ESLint, we recommend you take this opportunity to re-evaluate your core lint rules.
TSLint's recommendations were solidified several core TypeScript versions ago and don't always reflect the latest and greatest standards and lint rules.

Our recommended TSLint-to-ESLint configuration migration approach is:

1. Switch your configuration to extend from [typescript-eslint's `recommended` and `recommend-requiring-type-checking` rulesets](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md)
2. [Disable complaints on a line-, file-, or rule basis](https://eslint.org/docs/user-guide/configuring) for any rules you do not want to enable and/or are now giving complaints
3. Add any [community plugins](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md#plugins) relevant to your project, then repeat step 2

> 😉 Consider filing granular tickets to track investigating re-enabling disabled lint rules to make sure the work doesn't get forgotten.

## Should I Use Prettier?

**Yes**.

Formatting responsibilities, such as indentation and line wrapping, are exceedingly difficult to get implement in **linters**, and as such are practically impossible to get correct in them.
**Formatters** such as [Prettier](https://prettier.io) do a [much better job](https://prettier.io/docs/en/why-prettier.html) of formatting your code.
See [this issue](https://github.com/typescript-eslint/typescript-eslint/issues/880) for more explanation.

The maintenance teams at both TSLint and typescript-eslint recommend using a formatter such as Prettier to format your code instead of a linter.

> 🙏 [eslint-plugin-prettier](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md#usage-with-prettier) is an excellent ESLint plugin that disables formatting rules from your configuration.
> Please use it. 🙏
