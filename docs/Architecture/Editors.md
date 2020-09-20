# Editors

Editor lint configurations are converted by `src/converters/editorConfigs/convertEditorConfig.ts`.
Any setting that matches a known built-in TSLint setting will be replaced with the ESLint equivalent.

For now, only VS Code editor settings are accounted for.
Eventually this will be refactored to allow other editors such as Atom.

1. An existing editor configuration is read from disk.
2. If the existing configuration is not found or errored, nothing else needs to be done.
3. Configuration settings are converted to their ESLint equivalents.
4. Those ESLint equivalents are written to the configuration file.
5. Results from converting are reported to the user.
