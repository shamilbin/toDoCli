import chalk from "chalk";
import readline from "readline-sync";
import register from "./user/register.js";
import getAllUser from "./user/getAllUser.js";
function main() {
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
    options.map((x) => {
      console.log(chalk.bold.greenBright(x));
    });

    let option = readline.questionInt(chalk.bold.bgBlackBright("Select your choice  :"));

    switch (option) {
      case 0:
        console.log(chalk.bold.magentaBright("\nThanks for visiting THS TODO\n\tBYE BYE"));
        break;
      case 1:
        // console.log(chalk.bold.magentaBright("\nThanks for visiting THS TODO"));
        register()
        break;
      case 2:
        console.log(chalk.bold.magentaBright("\nThanks for visiting THS TODO"));
        break;
      case 3:
        console.log(chalk.bold.magentaBright("\nThanks for visiting THS TODO"));
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
        getAllUser()
        break;

      default:
        console.log(chalk.bold.redBright("\nPlease enter a valid option "));
        break;
    }
  } catch (error) {
    console.log(error);
  }
}

main();
