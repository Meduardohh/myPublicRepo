import {useState,useEffect} from "react"
import { getApi,putApi } from "./ServiceComp"

const databaseUrl="https://apiexample-d7c1c-default-rtdb.europe-west1.firebasedatabase.app/"


const Input=()=>{


    const [inputState,setInputState]=useState("")

    const changeHandler=(e)=>{
        putApi(databaseUrl,"user.json",{name:e.target.value},(value)=>console.log(value))
        setInputState(e.target.value)
    }

    useEffect(()=>{
        getApi(databaseUrl,"user.json","user",(value)=>setInputState(value))
    
    },[])

    return <input onChange={changeHandler} value={inputState}/>
}

export default Input