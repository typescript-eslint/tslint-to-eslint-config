# Editors

Editor lint configurations are converted by `src/converters/editorConfigs/convertEditorConfigs.ts`, which calls to a neighboring `convertEditorConfig.ts` on each file path.

1. Requested `--editor` paths are deduplicated into the list of file paths to convert.
2. Each path is mapped, if possible, to its editor's converter function.
3. Results from calling `convertEditorConfig` on that file and configuration are stored.
    a. The requested path's contents are read from disk.
    b. That converter function is run on the file path.
    c. If no error occurred, the description of changed settings is reported.
3. Results of converting are reported to the console and back to the calling code.
