import * as Inquirer from "inquirer";
import { words } from "./words";
import * as chalk from "chalk";
import * as figlet from "figlet";

const word = words[Math.floor(Math.random() * words.length)]
const parts = word.split("")
let failsCounter = 0
const maxFails = 20

const guessedLetters = []
async function main() {
    console.log (chalk.magenta(figlet.textSync("Hangman!")))
    while (true) {
        const wordGuessed = printCurrentState()
        if (wordGuessed) {
            console.log(chalk.green ("yes, the word has been guessed"))
            break
        }
        let letter = await askForLetter()
        letter = letter.toLowerCase ()
        if (parts.includes(letter)) {
            console.log(chalk.blue("yes :)"))
            guessedLetters.push(letter)
        } else {
            failsCounter++
            if (failsCounter > maxFails) {
                console.log(chalk.red("you lost."))
                break
            }
            console.log(chalk.red("no :( you have " + (maxFails - failsCounter) + " fails left"))
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