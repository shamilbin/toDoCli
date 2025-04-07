import readline from "readline-sync";
import login from "./users/login.js";
import deleteUser from "./users/delete.js";
import register from "./users/register.js";

function main() {
  console.clear();
  console.log("===================================");
  console.log("============ TO DO ================");
  console.log("===================================");

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

  let userOption = readline.questionInt("\n\nPlease select an Option  : ");

  switch (userOption) {
    case 0:
      console.log("Thank You for using TODO CLI");
      process.exit(); //     cntrl + c
    case 1:
      register();

      break;

    case 2:
      login();
      break;

    case 3:
      console.log("Add TODO");
      break;

    case 4:
      console.log("Edit TODO");
      break;

    case 5:
      "Delete TODO";
      break;

    case 6:
      console.log("Delete all TODO");
      break;
    case 7:
      deleteUser();
      break;

    case 8:
      console.log("Get all TODO");
      break;

    default:
      console.log("Invalid Input ,select from Options\n\t\tBye Bye");
      break;
  }
}
main();
