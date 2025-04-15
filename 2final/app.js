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

//. 2. LOGIN

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
      return x.email === email && x.password === password;
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

async function addTodo(data) {
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

    let users = await getAllData();
    const user = users.find((x) => x.email === data.email);
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

    console.log(chalk.bold.cyanBright("TODO TASK ADDED SUCCSESFULLY"));
  } catch (error) {
    console.log(error);
  }
}
// 2. edit  TODO

async function editTodo(data) {

  try {
    console.log(
      chalk.bold.greenBright("=====================================")
    );
    console.log(chalk.bold.greenBright("============= Edit TODO ============="));
    console.log(
      chalk.bold.greenBright("=====================================\n")
    );



    let users = await getAllData(); // Get all users from db

    const user = users.find((x) => x.email === data.email);
    
    if (!user) return console.log(chalk.bold.redBright("User not found."));

    if (user.todo.length === 0) {
      return console.log(chalk.bold.redBright("No todos to edit."));
    }

    user.todo.forEach((todo, index) => {
      console.log(`${index + 1}. ${todo.todo}`);
    });

    let todoIndex = readline.questionInt(chalk.bold.cyanBright("Enter Todo Number to Edit: ")) - 1;
    if (todoIndex < 0 || todoIndex >= user.todo.length) {
      return console.log(chalk.bold.redBright("Invalid Todo Number."));
    }

    let newTodo = readline.question(chalk.bold.cyanBright("Enter new Todo: "));
    user.todo[todoIndex].todo = newTodo;

    await saveData(users);
    console.log(chalk.bold.greenBright("Todo updated successfully!"));
    
  } catch (error) {
    console.log(error)
  }
  
}







// 3. delete todo

async function deleteTodo(data) {
  try {
    console.log("===================");
    console.log("==== DELETE TODO ====");
    console.log("===================");

    let users = await getallData();
    const user = users.find((x) => x.email === data.email);
    if (!user) return console.log("User not found.");

    if (user.todo.length === 0) {
      return console.log("No todos to delete.");
    }

    user.todo.forEach((todo, index) => {
      console.log(`${index + 1}. ${todo.todo}`);
    });

    let todoIndex = readline.questionInt("Enter Todo Number to Delete: ") - 1;
    if (todoIndex < 0 || todoIndex >= user.todo.length) {
      return console.log("Invalid Todo Number.");
    }

    user.todo.splice(todoIndex, 1);

    await saveData(users);
    console.log("Todo deleted successfully!");
  } catch (error) {
    console.log(error);
  }
}


//. 4. delete all todo


async function deleteAllTodos(data) {
  try {
    console.log("========================");
    console.log("=== DELETE ALL TODOS ===");
    console.log("========================");

    let users = await getallData();
    const user = users.find((x) => x.email === data.email);
    if (!user) return console.log("User not found.");

    if (user.todo.length === 0) {
      return console.log("No todos to delete.");
    }

    const confirm = readline.question("Are you sure? (yes/no): ");
    if (confirm.toLowerCase() !== "yes") {
      return console.log("Cancelled.");
    }

    user.todo = [];
    await saveData(users);
    console.log("All todos deleted successfully!");
  } catch (error) {
    console.log(error);
  }
}























//  main fuction
async function main() {
  try {
    let currentUser = [];
    while (true) {
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
          await addTodo(currentUser);
          break;
        case 4:
          await editTodo(currentUser)
          break;
        case 5:
          await deleteTodo(currentUser)
          break;
        case 6:
          await deleteAllTodos(currentUser)
          break;
        case 7:
          break;

        default:
          console.log(chalk.bold.redBright("INVALID INPUT     : "))
          break;
      }
    }
  } catch (error) {
    console.log(error);
  }
}
main();
