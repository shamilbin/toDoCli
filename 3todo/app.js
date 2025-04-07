import readline from "readline-sync"
import register from "./users/register.js"

function main() {

    console.clear()
    console.log("=============================")
    console.log("========TODO CLI ===========")
    console.log("=============================")

    let options = ["\n0.Exit", "1.Register", "2.Login", "3.Add Todo", "4.Edit Todo", "5.Delete Todo", "6.Delete All Todo", "7.Delete User", "8.Get All Todo\n"]

    options.map((option) => {
        console.log(option)
    })

    // What is CRUD Operations 
    // Create
    // Read 
    // Update
    // Delete

    let userOption = readline.questionInt("Please Select the Option : ");

    switch (userOption) {
        case 0:
            console.log("Thank You for Using Todo CLI\n Bye bye");
            process.exit(0); // Ctrl + C 

        case 1:
            register()
            break;
        case 2:
            console.log("Login");
            break;
        case 3:
            console.log("Add Todo");
            break;
        case 4:
            console.log("Edit Todo");
            break;
        case 5:
            console.log("Delete Todo");
            break;
        case 6:
            console.log("Delete All Todo");
            break;
        case 7:
            console.log("Delete User");
            break;
        case 8:
            console.log("Get All Todo");
            break;
        default:
            console.log("Invalid Input, Please Select from Options");
            break;

    }
}






main()