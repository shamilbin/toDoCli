import readline from "readline-sync";
import fs from "fs/promises";

const dbFile = "./database.json";

// Utils Functions

// Get All Data from database

async function getallData() {
  let output = await fs.readFile(dbFile, "utf-8");
  return JSON.parse(output);
}

// Add Data in Database

async function saveData(data) {
  await fs.writeFile(dbFile, JSON.stringify(data, null, 2));
}

// FS READ FILE ==> OUTPUT => STRING FORMAT
// FS WRITE FILE ==> ACCEPT ==> IN STRING FORMAT

// User Function

async function register() {
  try {
    console.clear();
    console.log("=================");
    console.log("=====REGISTER======");
    console.log("=================");

    let email = readline.question("Enter your Email : ");
    let password = readline.question("Enter your password : ", {
      hideEchoBack: true,
    });

    let userData = {
      email,
      password,
      todo: [],
    };

    console.log(userData);
    let readDB = await getallData(); // [] in object array
    // let readDb = []
    readDB.push(userData);

    await saveData(readDB);
  } catch (error) {
    console.log(error);
  }
}

async function login() {
  try {
    console.clear();
    console.log("=================");
    console.log("=====LOGIN======");
    console.log("=================");
    let email = readline.question("Enter your Email : ");
    let password = readline.question("Enter your password : ", {
      hideEchoBack: true,
    });

    let dbData = await getallData();
    // let dbData = [
    //   { email: "suhail@code.in", password: "1234", todo: [] },
    //   { email: "shamil@gmail.com", password: "457489", todo: [] },
    // ];

    let user = dbData.find((x) => {
      return x.email === email && x.password === password;
    });
    if (!user) {
      return console.log("Invalid Email or Password");
    }
    console.log("User Logged In Successfully");
    return user; // { "email": "suhail@code.in", "password": "1234", "todo": [] }
  } catch (error) {
    console.log(error);
  }
}

async function addTodo(data) {
  try {
    // data = {email:"suhail@code.in",password:"1234",todo:[]}
    console.log("===================");
    console.log("==== ADD TODO =====");
    console.log("===================");

    let userTodo = readline.question("Enter your Todo: ");
    let id = Date.now();

    let users = await getallData(); // ALL USERS FROM DB
    /*
    let users = [
  {
    "email": "suhail@code.in",
    "password": "1234",
    "todo": [{
    id:1279832,
    todo:"Learn JS "
    }]
  },
  {
    "email": "shamil@gmail.com",
    "password": "457489",
    "todo": []
  },
  {
    "email": "suhail@gmail.com",
    "password": "4973947",
    "todo": []
  }
]

    */

    const user = users.find((x) => x.email === data.email);

    if (!user) {
      console.log("User not found in database.");
      return;
    }

    let todoObject = {
      id,
      todo: userTodo,
    };
    // user = {email:"suhail@code.in",password:"1234",todo:[]}

    user.todo.push(todoObject);
    await saveData(users);

    console.log("Todo added successfully!");
  } catch (error) {
    console.log(error);
  }
}

async function editTodo(data) {
  try {
    console.log("===================");
    console.log("==== EDIT TODO =====");
    console.log("===================");

    let users = await getallData(); // Get all users from db

    const user = users.find((x) => x.email === data.email);
    
    if (!user) return console.log("User not found.");

    if (user.todo.length === 0) {
      return console.log("No todos to edit.");
    }

    user.todo.forEach((todo, index) => {
      console.log(`${index + 1}. ${todo.todo}`);
    });

    let todoIndex = readline.questionInt("Enter Todo Number to Edit: ") - 1;
    if (todoIndex < 0 || todoIndex >= user.todo.length) {
      return console.log("Invalid Todo Number.");
    }

    let newTodo = readline.question("Enter new Todo: ");
    user.todo[todoIndex].todo = newTodo;

    await saveData(users);
    console.log("Todo updated successfully!");
  } catch (error) {
    console.log(error);
  }
}

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

// Main Function

async function main() {
  try {
    let currentUser = []; // temp variable
    while (true) {
      console.clear();
      console.log("================");
      console.log("====TODO CLI=====");
      console.log("================");

      // let currentUser = [{ "email": "suhail@code.in", "password": "1234", "todo": [] }]

      let options = [
        "0.Exit",
        "1.Register",
        "2.Login",
        "3.Add Todo",
        "4.Edit Todo",
        "5.Delete Todo",
        "6.Delete All Todo",
      ];

      options.map((x) => console.log(x));

      let userOption = readline.questionInt("Enter your Option : ");

      switch (userOption) {
        case 0:
          // console.log("Exit");
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
          await editTodo(currentUser);
          break;
        case 5:
          await deleteTodo(currentUser);
          break;
        case 6:
          await deleteAllTodos(currentUser);
          break;

        default:
          console.log("Invalid Option");
          break;
      }
      // readline.question("Please Enter to go to Next Option : ");
    }
  } catch (error) {
    console.log(error);
  }
}

main();