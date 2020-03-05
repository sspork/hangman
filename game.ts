import inquirer from "inquirer";

import {words} from "./words";

const word = words[Math.floor(Math.random ()*words.length)]

let stuff = "";

for (let i = 0; i<word.length; i++) {
    stuff += "_ "
}
console.log (stuff)
