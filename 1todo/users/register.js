import readLine from "readline-sync";

function register() {
  try {
    // console.log("Register")

    let userName = readLine.question("Enter your user Name :");
    let userPass = readLine.question("Enter your Password  :");
    console.log(
      `\nUser User Name is ${userName}\nyour Password is ${userPass}`
    );
  } catch (error) {
    console.log(error);
  }
}
export default register;
