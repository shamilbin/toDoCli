import fs from "fs/promises"

async function writeFile(fileName, content) {
    try {

        await fs.writeFile(fileName, content)

    } catch (error) {
        console.log(error);

    }
}
export default writeFile