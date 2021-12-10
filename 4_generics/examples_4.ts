type TODO = {
    a?: number;
    b?: string;
    c: bigint;
    d: boolean;
}

type RequiredProperties<T, U extends keyof T> = {
    [P in U]-?: T[P];
} & Omit<T, U>

type X = RequiredProperties<TODO, "a">

const x: X = {
    
}


type GetRequiredPropertiesOf<T> = {
    [K in keyof T]: T extends Required<Record<K, T[K]>> ? K : never
}[keyof T]

type RequiredPropertyOf<T extends Record<PropertyKey, unknown>> = {
    [K in GetRequiredPropertiesOf<T>]-?: T[K];
}

type R = RequiredPropertyOf<TODO>;


type GetOptionalPropertiesOf<T> = {
    [K in keyof T]: T extends Required<Record<K, T[K]>> ? never : K
}[keyof T]


type OptionalPropertyOf<T extends Record<PropertyKey, unknown>> = {
    [K in GetOptionalPropertiesOf<T>]+?: T[K];
}

type O = OptionalPropertyOf<TODO>