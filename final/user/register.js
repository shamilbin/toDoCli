import chalk from "chalk";
import { write, writeFile } from "fs";
import fs from "fs/promises";
import readline from "readline-sync";

async function register() {
  try {
    console.clear();
    let userName = readline.question(
      chalk.bold.bgBlueBright("Enter Your Your User Nmae     :")
    );
    let email = readline.question(
      chalk.bold.bgBlueBright("Enter your emanil             :")
    );
    let pass = readline.question(
      chalk.bold.bgBlueBright("Enter your password           :")
    );

    let outData = await fs.readFile(
      "/Users/shamiltk/ths/toDoCli/final/bd.json",
      "utf-8"
    );
    let strToObj = JSON.parse(outData);
    let user = {
      userName,
      email,
      pass,
      todo: [],
    };

    strToObj.push(user);
    await fs.writeFile(
      "/Users/shamiltk/ths/toDoCli/final/bd.json",
      JSON.stringify(strToObj)
    );
    console.log(chalk.bold.redBright("\nYour Login Successfully   :\n"));
  } catch (error) {
    console.log(error);
  }
}
export default register;
