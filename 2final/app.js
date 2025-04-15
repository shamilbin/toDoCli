import readline from "readline-sync";
import chalk from "chalk";
import fs from "fs/promises";

// call database

const dbFile = "dataBase.json";

// UTILS

// 1. gett All Data from database

async function getAllData() {
  let outPut = await fs.readFile(dbFile, "utf-8");
  return JSON.parse(outPut);
}

// 2. ADD TO DATABASE

async function saveData(data) {
  await fs.writeFile(dbFile, JSON.stringify(data, null, 2));
}

// FS READ FILE ==> OUTPUT => STRING FORMAT
// FS WRITE FILE ==> ACCEPT ==> IN STRING FORMAT

// USER FUCTION

// 1. REGISTER

async function register() {
  try {
    console.clear();
    console.log(
      chalk.bold.greenBright("=====================================")
    );
    console.log(
      chalk.bold.greenBright("============== Register ==============")
    );
    console.log(
      chalk.bold.greenBright("=====================================\n")
    );

    let userName = readline.question(
      chalk.bold.bgMagentaBright("Enter your User Name    : ")
    );
    let email = readline.question(
      chalk.bold.bgMagentaBright("Enter your E-mail       : ")
    );
    let password = readline.question(
      chalk.bold.bgMagentaBright("Enter your Password     : "),
      {
        hideEchoBack: true,
      }
    );

    let userData = {
      userName,
      email,
      password,
      todo: [],
    };

    // console.log(userData)
    let readDB = await getAllData();
    readDB.push(userData);

    await saveData(readDB);

    console.log(chalk.bold.cyanBright("\nAccount created Succesfully  🚀  \n"));
  } catch (error) {
    console.log(error);
  }
}

//. 2. LODIN

async function login() {
  try {
    console.log(
      chalk.bold.greenBright("=====================================")
    );
    console.log(
      chalk.bold.greenBright("============= LOGIN PAGE =============")
    );
    console.log(
      chalk.bold.greenBright("=====================================\n")
    );

    let userName = readline.question(
      chalk.bold.bgMagentaBright("Enter your User Name    : ")
    );
    let email = readline.question(
      chalk.bold.bgMagentaBright("Enter your E-mail       : ")
    );
    let password = readline.question(
      chalk.bold.bgMagentaBright("Enter your Password     : "),
      {
        hideEchoBack: true,
      }
    );
    let dbData = await getAllData();
    let user = dbData.find((x) => {
      x.email === email && x.password === password;
    });

    if (!user) {
      return console.log(
        chalk.bold.redBright("Invalid E-mail or Password  🫣  ")
      );
    }

    console.log(chalk.bold.greenBright("User  Logged in Succesfulyy 💻  "));

    return user;
  } catch (error) {
    console.log(error);
  }
}
//  USER

// 1. ADD TODO

async function addTodo() {
  try {
    console.log(
      chalk.bold.greenBright("=====================================")
    );
    console.log(chalk.bold.greenBright("============= ADD TODO ============="));
    console.log(
      chalk.bold.greenBright("=====================================\n")
    );

    let userTodo = readline.question("ENter the todo  : ");
    let id = Date.now();

    let users = await getAllData;
    const user = users.find((x) => {
      return x.email === data.email;
    });
    if (!users) {
      console.log(chalk.bold.redBright("User not found in DataBase"));
      return;
    }
    let todoOBject = {
      id,
      todo: userTodo,
    };

    user.todo.push(todoOBject);
    await saveData(users);

    console.log(chalk.bold.cyanBright("TODO TASK ADDED SUCCSESFULLY"))






  } catch (error) {
    console.log(error);
  }
}

//  main fuction
async function main() {
  try {
    while (true) {
      let currentUser = [];
      //   console.clear();
      console.log(
        chalk.bold.greenBright("=====================================")
      );
      console.log(
        chalk.bold.greenBright("============== TODO CLI==============")
      );
      console.log(
        chalk.bold.greenBright("=====================================\n")
      );

      let options = [
        "0.Exit",
        "1.Register",
        "2.Login",
        "3.Add TODO",
        "4.Edit TODO",
        "5.Delete TODO",
        "6.Delete All TODO",
        "7.Gett All User",
      ];

      options.map((x) => console.log(chalk.bold.redBright(x)));

      let userOption = readline.questionInt(
        chalk.bold.yellowBright("\n\nEnter your choice   : ")
      );

      switch (userOption) {
        case 0:
          console.log(
            chalk.bold.bgCyanBright(
              "\nThank You For Visiting CLI\n\tCome Again\n"
            )
          );
          process.exit(0);

        case 1:
          await register();
          break;
        case 2:
          currentUser = await login();

          break;
        case 3:
          break;
        case 4:
          break;
        case 5:
          break;
        case 6:
          break;
        case 7:
          break;

        default:
          break;
      }
    }
  } catch (error) {
    console.log(error);
  }
}
main();
