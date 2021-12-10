export type MyPick<T extends {}, K extends keyof T> = {
    [P in K]: T[P]
}
