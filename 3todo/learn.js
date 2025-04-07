import fs from "fs/promises"

async function readSuhailFile() {
    try {

        let output = await fs.readFile("./suhail.json", "utf-8");
        console.log(output, typeof output)


        let strToObj = JSON.parse(output)

        console.log(strToObj, typeof strToObj)
        strToObj.push("3")
        console.log(strToObj, typeof strToObj)

        await fs.writeFile("./suhail.json", JSON.stringify(strToObj))

    } catch (error) {
        console.log(error);

    }
}

readSuhailFile()