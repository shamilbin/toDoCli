import readline from "readline-sync";
import chalk from "chalk";
import register from "/Users/shamiltk/ths/toDoCli/2todo/users/register.js";

//      addTodo.js       deleteAllToDO.js deleteToDo.js    editToDo.js      getAllToDo.js

function main() {
  console.clear();
  console.log("=========================================");
  console.log("=================TO-DO===================");
  console.log("=========================================");

  let option = [
    "\n0.Exit",
    "1.Register",
    "2.Login",
    "3.Add TODO",
    "4.Edit TODO",
    "5. Delete TODO",
    "6.Delete All TODO",
    "7.Delete User",
    "8.Get all TODO",
  ];
  option.map((x) => {
    console.log(x);
  });

  let choice = readline.questionInt("\n\nChoose your operation  :");

  switch (choice) {
    case 0:
      console.log("Thank your for visiting the website        :");
      break;
    case 1:
      register()
      break;
    case 2:
      console.log("login       :");
      break;
    case 3:
      console.log("ADD to do");
      break;
    case 4:
      console.log("Edit todo   :");
      break;
    case 5:
      console.log("delet todo");
      break;
    case 6:
      console.log("Delete all todo");
      break;
    case 7:
      console.log("delete user");
      break;
    case 8:
      console.log("Get all todo");
      break;
    default:
      console.log("\n\nPlease enter a valid input");
      break;
  }
}

main();
