import * as Inquirer from "inquirer";

import { words } from "./words";

const word = words[Math.floor(Math.random() * words.length)]
const parts = word.split("")

const guessedLetters = []
async function main() {
    while (true) {
        printCurrentState()
        const letter = await askForLetter()
        if (parts.includes(letter)) {
            console.log("yes :)")
            guessedLetters.push(letter)
        } else {
            console.log("no :(")
        }
    }
}
function printCurrentState() {
    let stuff = "";

    for (let i = 0; i < word.length; i++) {
        if (guessedLetters.includes(parts[i])) {
            stuff += parts[i]
        } else {
            stuff += "_"

        }
        stuff += " "
    }
    console.log(stuff)
}

async function askForLetter() {
    const answer = await Inquirer.prompt([{ message: "Guess a letter", type: "input", name: "letter" }])
    return answer.letter

}
main()