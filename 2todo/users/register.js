import redline from "readline-sync";

function register() {
  try {
    let fname = redline.question("Enter your Name       :");
    let uPass = redline.question("Enter your password       :");
  } catch (error) {
    console.log(error);
  }
}

export default register;


