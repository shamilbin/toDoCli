import readline from "readline-sync";
import fs from "fs/promises";

const dbFile = "/Users/shamiltk/ths/toDoCli/1.final/dataBase.json";

// utils fuctions

//1. get all data from database

async function getAllData() {
  let outPut = await fs.readFile(dbFile, "utf-8");
  return JSON.parse(outPut);
}

// 2. add data

async function saveData(data) {
  await fs.writeFile(dbFile, JSON.stringify(data, null, 2));
}
// register fuction

async function register() {
  try {
    console.clear();
    console.log("=====================");
    console.log("=======register========");
    console.log("=====================");

    let userName = readline.question("Enter your user name  : ");
    let email = readline.question("Enter your email     : ");
    let password = readline.question("Enter your password   : ", {
      hideEchoBack: true,
    });

    let userData = {
      userName,
      email,
      password,
      todo: [],
    };

    console.log(userData);
    let readDB = await getAllData();
    readDB.push(userData);

    await saveData(readDB);
  } catch (error) {
    console.log(error);
  }
}

// login
async function login() {
  try {
   
    console.log("=====================");
    console.log("=======Login========");
    console.log("=====================");

    let userName = readline.question("Enter your user name  : ");
    let email = readline.question("Enter your email     : ");
    let password = readline.question("Enter your password   : ", {
      hideEchoBack: true,
    });

    let dbData = await getAllData();

    let user = dbData.find((x) => {
      return x.email === email && x.password === password;
    });
    console.log(user)

    if (!user) {
      return console.log("Invalid user Details");
    }
    console.log("User logined Succesfully");
    return user;
  } catch (error) {
    console.log(error);
  }
}

// addToDO fuction

async function addTodo(data) {
  try {

    console.log("==========================");
    console.log("==========ADD TODO========");
    console.log("==========================");

    let userTodo = readline.question("ENter your Todod : ");
    let id = Date.now();


    let users = await getAllData()
    const user = users.find((x) => x.email === data.email);
    if (!user) {
      console.log("User not found in data base      : ");
      return ;
    }

    let todoObject = {
      id,
      todo: userTodo,
    };

    user.todo.push(todoObject);
    await saveData(users);
  } catch (error) {
    console.log(error);
  }
}

// main fuction

async function main() {
  try {
    let currentUser = [];
    while(true){



    
        console.log("==========================");
        console.log("==========TODO CLI============");
        console.log("==========================");
    
        let options = [
          "\n\t0.Exit",
          "\t1.Register",
          "\t2.Login",
          "\t3.Add Todo",
          "\t4.Update Todo",
          "\t5.Delete Todo",
          "\t6.Get All Todo",
          "\t7.Delete All Todo",
          "\t8.Get All Users\n",
        ];
        options.map((x) => console.log(x));
    
        let userOption = readline.questionInt("Enter your Option      : ");
    
        switch (userOption) {
          case 0:
            console.log("EXIT BYE BYE");
            process.exit(0);
          case 1:
           await register();
            break;
          case 2:
            currentUser= await login();
            break;
    
          case 3:
            await addTodo(currentUser);
    
            break;
          case 4:
            console.log(chalk.bold.magentaBright("\nThanks for visiting THS TODO"));
            break;
          case 5:
            console.log(chalk.bold.magentaBright("\nThanks for visiting THS TODO"));
            break;
          case 6:
            console.log(chalk.bold.magentaBright("\nThanks for visiting THS TODO"));
            break;
          case 7:
            console.log(chalk.bold.magentaBright("\nThanks for visiting THS TODO"));
            break;
          case 8:
            // console.log(chalk.bold.magentaBright("\nThanks for visiting THS TODO"));
            // getAllUser();
            break;
    
          default:
            console.log("enter a valid opton");
            break;
        }
    }
  } catch (error) {
    console.log(error);
  }
}

main();
