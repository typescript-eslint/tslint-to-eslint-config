export type WithDependencies<Args extends any[] = any[], Return = any> = (
    dependencies: any,
    ...args: Args
) => Return;

export type SansDependencies<Method> =
    Method extends WithDependencies<infer Args, infer Return> ? (...args: Args) => Return : never;

export const bind = <Dependencies = any, Args extends any[] = any[], Return = any>(
    method: WithDependencies<Args, Return>,
    dependencies: Dependencies,
): SansDependencies<WithDependencies<Args, Return>> => method.bind(undefined, dependencies);
