# Comments

Comment conversions in `src/converters/comments/convertComments.ts` are the last root-level converter to be run.
The `ruleEquivalents` map it receives is filled out with the rule equivalents from earlier converters, i.e. lint rule converters.

In general, its flow is:

1. If no comments are requested to be converted, immediately report it out and mark this as passed.
2. Create the list of include and possibly exclude globs to search on.
3. Search for files matching those globs to have their comments converted.
4. Convert comments in the contents of each file, storing equivalents in a cache.
5. Report out the results of converting the unique globbed file paths.

## File Manipulations

Source files are parsed into TypeScript files by `src/comments/parseFileComments.ts`, which then extracts their comment nodes.
Those comments are parsed for TSLint rule disable or enable comments.

Comments that match will be rewritten in their their file to their new ESLint rule equivalent in `src/comments/replaceFileComments.ts`, as determined by:

1. First, if the `ruleEquivalents` cache received from configuration convertion has the TSLint rule's ESLint equivalents listed, those are used.
2. Failing that, a comment-specific `ruleCommentsCache` is populated with rules converted ad-hoc with no arguments.
