import {database} from "../config/firebase"
import {ref,set,push,get, update,remove,onChildAdded} from "firebase/database"


const endpoint="users"

export function createUser(userData){
const refUser=ref(database,endpoint)
const newUser=push(refUser)
return set(newUser,userData)
}

export  function readUser(key){
    if(key){
        const refUser=ref(database,`${endpoint}/${key}`)
        return get(refUser)
    }
    const refUser=ref(database,endpoint)
    return get(refUser)
}

export function updateUser(key,userData){
    const refUser=ref(database,`${endpoint}/${key}`)
    return update(refUser,userData)
    
}

export function deleteUser(key){
    const refUser=ref(database,`${endpoint}/${key}`)

    return remove(refUser)
    
}

export function liveAdded(callback) {
    const refUser = ref(database, endpoint)
    return onChildAdded(refUser, callback)
  }

