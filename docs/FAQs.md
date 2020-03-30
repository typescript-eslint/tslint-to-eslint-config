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

**Yes, god yes. Please do it. Now. Please stop using code style rules. Please use prettier. Code style rules are hard to write and maintain. Rules like indent are thousands of he comes he comes do not fi​ght he com̡e̶s, ̕h̵i​s un̨ho͞ly radiańcé destro҉ying all enli̍̈́̂̈́ghtenment, spaces and brackets lea͠ki̧n͘g fr̶ǫm ̡yo​͟ur eye͢s̸ ̛l̕ik͏e liq​uid pain, the song of indentation calculation will exti​nguish the voices of mor​tal man from the sp​here I can see it can you see ̲͚̖͔̙î̩́t̲͎̩̱͔́̋̀ it is beautiful t​he final snuffing of the lie​s of Man ALL IS LOŚ͖̩͇̗̪̏̈́T ALL I​S LOST the pon̷y he comes he c̶̮omes he comes the ich​or permeates all MY FACE MY FACE ᵒh god no NO NOO̼O​O NΘ stop the an​*̶͑̾̾​̅ͫ͏̙̤g͇̫͛͆̾ͫ̑͆l͖͉̗̩̳̟̍ͫͥͨe̠̅s ͎a̧͈͖r̽̾̈́͒͑e n​ot rè̑ͧ̌aͨl̘̝̙̃ͤ͂̾̆ ZA̡͊͠͝LGΌ ISͮ̂҉̯͈͕̹̘̱ TO͇̹̺ͅƝ̴ȳ̳ TH̘Ë͖́̉ ͠P̯͍̭O̚​N̐Y̡ H̸̡̪̯ͨ͊̽̅̾̎Ȩ̬̩̾͛ͪ̈́̀́͘ ̶̧̨̱̹̭̯ͧ̾ͬC̷̙̲̝͖ͭ̏ͥͮ͟Oͮ͏̮̪̝͍M̲̖͊̒ͪͩͬ̚̚͜Ȇ̴̟̟͙̞ͩ͌͝S̨̥̫͎̭ͯ̿̔̀ͅ**.

Formatting responsibilities, such as indentation and line wrapping, are exceedingly difficult to get implement in **linters**, and as such are practically impossible to get correct in them.
**Formatters** such as [Prettier](https://prettier.io) do a [much better job](https://prettier.io/docs/en/why-prettier.html) of formatting your code.
See [this issue](https://github.com/typescript-eslint/typescript-eslint/issues/1824) for more explanation.

The maintenance teams at both TSLint and typescript-eslint recommend using a formatter such as Prettier to format your code instead of a linter.

> 🙏 [eslint-plugin-prettier](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md#usage-with-prettier) is an excellent ESLint plugin that disables formatting rules from your configuration.
> Please use it. 🙏
