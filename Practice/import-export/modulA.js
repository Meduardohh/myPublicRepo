


import {start as startC} from "./modulC.js"
import {start as startB} from "./modulB.js"



function start(){
    console.log("ModuleA has been started")
}
start()
startB()
startC()