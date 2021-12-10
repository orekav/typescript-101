export default null

type Animal<T extends string, U extends {}> = {
    name: string
    type: T
} & U


type Cat = Animal<"Cat", { meow: () => void, doMore: () => string }>
type Bird = Animal<"Bird", { fly: () => void }>

const doYourTrick = (animal: Cat | Bird) => {
    switch (animal.type) {
        case "Cat":
            animal.meow()
            break
        case "Bird":
            animal.fly()
            break
        default:
            animal.type; // Guess the type
    }
}

type AbstractAnimal = Animal<string, {}>
const isCat = (animal: AbstractAnimal): animal is Cat => animal.type === "Cat";
const isBird = (animal: AbstractAnimal): animal is Bird => animal.type === "Bird";

const guessTheType = (animal: Cat | Bird) => {
    if (isCat(animal)) {
        animal.type // cat
    } else if (isBird(animal)) {
        animal.type // bird
    } else {
        animal.type // ??
    }
}
