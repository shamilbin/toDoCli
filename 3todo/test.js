import fs from "fs/promises"

async function reading() {
    try {

        let dbPath = "./shamil.js";
        let output = await fs.readFile(dbPath, "utf-8");
        console.log(output, typeof output)

        let arr = [
            true,
            1,
            "suhail",
            {
                "fname": "suhail",
                "age": 22
            }
        ]
        console.log(arr, typeof arr)
    } catch (error) {
        console.log(error);

    }
}

reading()