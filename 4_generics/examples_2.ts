export default null

type A = {
    a?: number;
    b?: string;
    c: bigint;
    d: boolean;
}

type X = Required<A>;
type Y = RequiredPropertyOf<A>;
type Z = OptionalPropertyOf<A>

type GetOptionalPropertiesOf<T> = {
    [K in keyof T]: T extends Required<Record<K, T[K]>> ? never : K
}[keyof T]

type GetRequiredPropertiesOf<T> = {
    [K in keyof T]: T extends Required<Record<K, T[K]>> ? K : never
}[keyof T]

type OptionalPropertyOf<T extends Record<PropertyKey, unknown>> = {
    [K in GetOptionalPropertiesOf<T>]?: T[K];
}

type RequiredPropertyOf<T extends Record<PropertyKey, unknown>> = {
    [K in GetRequiredPropertiesOf<T>]-?: T[K];
}

