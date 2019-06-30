export type Exec = (command: string) => Promise<{ stderr: string; stdout: string }>;
