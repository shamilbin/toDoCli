import fs from "fs/promises";

async function readFile() {
    try {
        let dataPath = "/home/suhail/THSCohortA-2025-suhail/Phase2/node/7thApril2025/data.json"
        let userFile = await fs.readFile(dataPath, "utf-8");
        return JSON.parse(userFile) // convert string to object

    } catch (error) {
        console.log(error);

    }
}

export default readFile