# Dependencies

Functions are created using a variant of [Dependency Injection](http://en.wikipedia.org/wiki/Dependency_Injection).
Any method with dependencies that should be stubbed out during tests, such as file system bindings, logging, or other functions,
takes in a first argument of name `dependencies`.
Its dependencies object is manually created in `src/cli/main.ts` and bound to the method with `bind`.

## When to Use Dependencies

Most functions don't need a `dependencies` object.
Only add one if something should be stubbed out during tests _or_ should be available to multiple callers.

## How to Use Dependencies

Suppose your method `myMethod`, should take in a `fileSystem`, a `string`, and a `number`:

1. Create a `MyMethodDependencies` type in `myMethod.ts`:

    ```ts
    // ~~~/myMethod.ts
    export type MyMethodDependencies = {
        fileSystem: FileSystem;
    };
    ```

2. Add `dependencies: MyMethodDependencies` as the first argument to `myMethod`:

    ```ts
    // ~~~/myMethod.ts
    export const myMethod = async (
        dependencies: MyMethodDependencies,
        argumentOne: string,
        argumentTwo: number,
    ) => {
        // ...
    };
    ```

3. In `src/cli/main.ts`, create a `myMethodDependencies: MyMethodDependencies`:

    ```ts
    // src/cli/main.ts
    const myMethodDependencies: MyMethodDependencies = {
        fileSystem,
    };
    ```

4. In `src/cli/main.ts`, include `myMethod: bind(mymethod, myMethodDependencies)` in any dependencies object that requires `myMethod`:

    ```ts
    // src/cli/main.ts
    const otherMethodDependencies: OtherMethodDependencies = {
        myMethod: bind(myMethod, myMethodDependencies),
    };
    ```

5. In the types of any dependencies that include `myMethod`, add `myMethod: SansDependencies<typeof myMethod>` to require the result of `bind`ing `myMethod`:

    ```ts
    // ~~~/otherMethod.ts
    export type OtherMethodDependencies = {
        myMethod: SansDependencies<typeof myMethod>;
    };
    ```

### Adapters

Global Node constructs as `console` are never written to directly by functions; instead, "adapter" wrappers are set up in `src/adapters/*.ts` and provided as dependencies to functions.
This enables native calls to be directly tested in tests without stubbing out their global equivalents.