import readline from "readline-sync";
import fs from "fs/promises";
import chalk from "chalk";

async function login() {
  try {
    console.clear();
    console.log(
      chalk.bold.redBright(
        "====================================================="
      )
    );
    console.log(
      chalk.bold.redBright(
        `=====================${chalk.bold.yellowBright(
          "-THS TODO-"
        )}======================`
      )
    );
    console.log(
      chalk.bold.redBright(
        "====================================================="
      )
    );

    let userEmail = readline.questionEMail("ENter your email     :");
    let userPassword = readline.question("Enter your password   :");

    let dbFile = await fs.readFile(
      "/Users/shamiltk/ths/toDoCli/final/db.json",
      "utf-8"
    );
    let strToArr = JSON.parse(dbFile);

    // console.log(strToArr);
    let myUser = strToArr.find(
      (x) => x.email == userEmail && x.pass == userPassword
    );

    if (!myUser) {
      return console.log("Ivalid Details");
    }
    console.log("Login succesfull");
  } catch (error) {
    console.log(error);
  }
}

export default login;
