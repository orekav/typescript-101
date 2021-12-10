export default null

const greet = (name: string) => {
    return `Hello, ${name.toUpperCase()}!!`
}

greet("Nicolas") // "Hello, Nicolas!!"
greet(29)

let sayHi = (name: string) => console.log(name)
let sayHiWithAge = (name: string, age: number) => console.log(name, age)

sayHiWithAge = sayHi // It works because `sayHi` is a subset of sayHiWithAge (example when we use forEach, map, etc)
sayHi = sayHiWithAge // Would work if age is optional


type InputParametersAsTuple = [name: string, age: number]
type SayHiV2 = (...x: InputParametersAsTuple) => void

const sayHiv2: SayHiV2 = (x, y) => console.log(x, y)
sayHiv2("name", 1)

const input: InputParametersAsTuple = ["surname", 2]
sayHiv2(...input)

const identity = <T>(anything: T) => anything
const x = identity(1)