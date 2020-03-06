import * as Inquirer from "inquirer";

import { words } from "./words";

const word = words[Math.floor(Math.random() * words.length)]
const parts = word.split("")
let failsCounter = 0
const maxFails = 3

const guessedLetters = []
async function main() {
    while (true) {
        const wordGuessed = printCurrentState()
        if (wordGuessed) {
            console.log("yes, the word has been guessed")
            break
        }
        const letter = await askForLetter()
        if (parts.includes(letter)) {
            console.log("yes :)")
            guessedLetters.push(letter)
        } else {
            failsCounter++
            if (failsCounter > maxFails) {
                console.log("you lost.")
                break
            }
            console.log("no :( you have " + (maxFails - failsCounter) + " fails left")


        }
    }
}
function printCurrentState() {
    let stuff = "";
    let wordGuessed = true

    for (let i = 0; i < word.length; i++) {
        if (guessedLetters.includes(parts[i])) {
            stuff += parts[i]
        } else {
            stuff += "_"
            wordGuessed = false
        }
        stuff += " "
    }
    console.log(stuff)
    return wordGuessed
}

async function askForLetter() {
    const answer = await Inquirer.prompt([{ message: "Guess a letter", type: "input", name: "letter" }])
    return answer.letter

}
main()