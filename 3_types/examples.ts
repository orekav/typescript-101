export default null

type Animal = {
    name: string
    type: "Cat" | "Bird"
}

type Cat = Animal & {
    type: "Cat"
    meow: () => void
}

type Bird = Animal & {
    type: "Bird"
    fly: () => void
}

const kitty: Cat = {
    name: "Kitty",
    type: "Cat",
    meow: () => console.log("Some sound")
}

// Narrowing
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

const guessTheType = (animal: Cat | Bird) => {
    if ("meow" in animal) {
        animal.type // cat
    } else if ("fly" in animal) {
        animal.type // bird
    } else {
        animal.type // ??
    }
}
