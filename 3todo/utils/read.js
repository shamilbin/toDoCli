import fs from "fs/promises";

async function readFile() {
    try {
        let dataPath = "/Users/shamiltk/ths/toDoCli/3todo/suhail.json"
        let userFile = await fs.readFile(dataPath, "utf-8");
        return JSON.parse(userFile) // convert string to object

    } catch (error) {
        console.log(error);

    }
}

export default readFile