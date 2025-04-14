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
          "-LOGIN-"
        )}======================`
      )
    );
    console.log(
      chalk.bold.redBright(
        "====================================================="
      )
    );
    let userEmail = readline.question("\n\nEnter your Email     :");
    let userPassword = readline.question("Enter your password   :");
    // console.log(userEmail, userPassword);
    // read db file

    let dbFile = await fs.readFile(
      "/Users/shamiltk/ths/toDoCli/final/bd.json",
      "utf-8"
    );
    let strToArr = JSON.parse(dbFile);
    // console.log(strToArr);

    let myUser = strToArr.find((x) => {
      return x.email == userEmail && x.pass == userPassword;
    });
    // console.log(myUser);

    if (!myUser) {
      return console.log("\nInvalid Details");
    }
    console.log("\nUser logged in Successfull");
  } catch (error) {
    console.log(error);
  }
}
// export login
export default login;
