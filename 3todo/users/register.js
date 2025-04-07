import readFile from "../utils/read.js"
import readline from "readline-sync";
import fs from "fs/promises"



async function register() {
    try {



        let userName = readline.question("Enter your username : ")

        let password = readline.question("Enter your password : ")

        // console.log(userName, password)

        let users = await readFile(); // [] arr  
        // let users = []

        // we already converted string to arr in readfile func


        let person = {
            fname: userName,
            pass: password
        }

        users.push(person) // variable format

        // users.push(userObj) // 
       

        await fs.writeFile('/home/suhail/THSCohortA-2025-suhail/Phase2/node/7thApril2025/data.json', JSON.stringify(users))

        // [{username:"shamil",password:"847384"}]





        // readfile ==> string
        // writefile ==> pass data in string







    } catch (error) {
        console.log(error);

    }

}

export default register


/*




1.Read the data json file ==> [] (string)
2.Parse the fileData JSON.parse([]) ==> string to Object
3.as its in object [] ==> you can use the array to store data
4.now as you are storing data its just in a variable object
5.so use writefile to convert that variable into a file content
6. when you are writing in a file ...you need to make sure its in string 


*/


// 