import fs from "fs/promises";


async function readFile() {
  try {
    let dataPath = "/Users/shamiltk/ths/toDoCli/server/user.json";
    let userFile = await fs.readFile(dataPath, "utf-8");
    console.log(userFile,typeof userFile)
    return userFile;

  } catch (error) {
    console.log(error);
  }
}
// readFile()
export default readFile;
