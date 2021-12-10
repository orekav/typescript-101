export default null

type Awaited<T> = T extends Promise<infer R> ?
    (R extends Promise<unknown> ? Awaited<R> : R) :
    T;

type A = Awaited<Promise<number>>
type B = Awaited<Promise<Promise<Promise<Promise<number>>>>>
type C = Awaited<number>
