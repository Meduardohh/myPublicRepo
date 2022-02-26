import { stringUtil as strUtil, stringUtil2 as strUtil2,wordUtil } from "./utilstring.js";


try{
    console.log(strUtil("asdasdasd"))
    console.log(strUtil2("asdasdasd"))
    console.log(strUtil2(1234))

}catch(e){
    console.log(e.message)
}

console.log(wordUtil('jó lenne ha mindenki megtudná csinálni.', 'ez a masodik mondat', 'de ennél több mondat is lehet'));