# API

You can use `tslint-to-eslint-config` programmatically in your Node apps.
It provides a **[`convertTSLintConfig`](#convertTSLintConfig)** function to find relevant configurations on disk and output the generated ESLint configuration.

## `convertTSLintConfig`

```ts
import { convertTSLintConfig } from "tslint-to-eslint-config";

const result = await convertTSLintConfig();
```

Finds relevant configurations on disk and outputs the generated ESLint configuration.

Optionally takes in the same settings you can provide via the CLI:

* `config`: Output ESLint configuration file path _(default: `.eslintrc.js`)_.
* `eslint`: Original ESLint configuration file path _(default: `.eslintrc.js`)_.
* `package`: Original packages configuration file path _(default: `package.json`)_.
* `prettier`: Whether to add `eslint-config-prettier` to the plugins list.
* `tslint`: Original TSLint configuration file path _(default: `tslint.json`)_.
* `typescript`: Original TypeScript configuration file path _(default: `tsconfig.json`)_.

```ts
import { convertTSLintConfig } from "tslint-to-eslint-config";

const result = await convertTSLintConfig({
    config: "./path/to/output/eslintrc.js",
    eslint: "./path/to/input/eslintrc.js",
    package: "./path/to/package.json", 
    prettier: true, // Prettier: highly recommended!
    tslint: "./path/to/tslint.json", 
    typescript: "./path/to/tsconfig.json", 
});
```

If the TSLint configuration or any manually specified configurations fail to read from disk, the result will contain:

* `complaints`: String complaints describing the errors.
* `status`: `ResultStatus.ConfigurationError` (`2`).

If no error is detected, the result will contain:

* `data`: Resultant ESLint configuration as:
    * `formatted`: Stringified result per the output config path's file type.
    * `raw`: Plain old JavaScript object.
* `status`: `ResultStatus.Succeeded` (`0`).

```ts
import { convertTSLintConfig, ResultStatus } from "tslint-to-eslint-config";

const result = await convertTSLintConfig({ /* ... */ });

if (result.status !== ResultStatus.Succeeded) {
    console.info("Oh no!");
    console.error(result.complaints.join("\n"));
} else {
    console.info("Hooray!");
    console.log(result.data.formatted);
    console.log(result.data.raw);
}
```

> See the provided `.d.ts` TypeScript typings for full descriptions of inputs and outputs.

## Standalone API

> ⚠ This area of code is still considered experimental.
> Use at your own risk.

The individual steps within `convertTSLintConfig` are each available as exported functions as well.

1. **[`findOriginalConfigurationsStandalone`](#findOriginalConfigurationsStandalone)** takes in an object of original configuration locations and retrieves their raw and computed contents.
2. **[`createESLintConfiguration`](#createESLintConfiguration)** creates an raw output ESLint configuration summary from those input configuration values.
3. `joinConfigConversionResults` turns a raw ESLint configuration summary into  ESLint's configuration shape.
4. `formatOutput` prints that formatted output into a string per the output file extension.

> Read the docs also dts yo
> Please file an issue on GitHub if you'd like to see changes.

### `findOriginalConfigurationsStandalone`

Reading in from the default file locations, including `.eslintrc.js`:

```ts
import { findOriginalConfigurations } from "tslint-to-eslint-config";

const originalConfigurations = await findOriginalConfigurations();
```

Overriding some configuration file locations to read from:

```ts
import { findOriginalConfigurations } from "tslint-to-eslint-config";

const originalConfigurations = await findOriginalConfigurations({
    config: "./path/to/.eslintrc.json",
    tslint: "./another/path/to/tslint.custom.json",
});
```

### `createESLintConfiguration`

Generating an ESLint configuration from the contents of a local `tslint.json`:

```ts
import { createESLintConfiguration } from "tslint-to-eslint-config";

const summarizedConfiguration = await createESLintConfiguration({
    tslint: {
        raw: require("./tslint.json"),
    },
});
```

Using the full configuration values from disk:

```ts
import { createESLintConfiguration, findOriginalConfigurations } from "tslint-to-eslint-config";

const originalConfigurations = await findOriginalConfigurations();
const summarizedConfiguration = await createESLintConfiguration(originalConfigurations);

const raw = joinConfigConversionResults(summarizedConfiguration, originalConfigurations.data);

const formatted = formatOutput("eslintrc.js", raw);
```
