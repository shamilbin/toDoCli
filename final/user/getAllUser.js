import readline from "readline-sync"
import fs from "fs/promises"


async function getAllUser() {
    
    try {

            console.clear()
            // read file
           let getAll =  await fs.readFile("/Users/shamiltk/ths/toDoCli/final/db.json","utf-8")
           console.log(getAll)
        
    } catch (error) {
        console.log(error)
    }
}
export default getAllUser