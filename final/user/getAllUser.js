import readline from "readline-sync"
import fs from "fs/promises"


async function getAllUser() {
    
    try {

            console.clear()
           let getAll =  await fs.readFile("/Users/shamiltk/ths/toDoCli/final/bd.json","utf-8")
           console.log(getAll)
        
    } catch (error) {
        console.log(error)
    }
}
export default getAllUser