# Creating a Rule Converter

> If you're not familiar with this project's rule converters work, please read the [Architecture docs](./Architecture/README.md) first.

Adding a new rule converter to `tslint-to-eslint-config` is a relatively straightforward task.
For your convenience, a starter script is included that sets up the files:

```shell
node ./script/new-converter --eslint output-name --tslint input-name
```

If the lint rule includes arguments, add the `--sameArguments` flag above to have starter code generated for that as well.

```shell
node ./script/new-converter --eslint output-name --tslint input-name --sameArguments
```
