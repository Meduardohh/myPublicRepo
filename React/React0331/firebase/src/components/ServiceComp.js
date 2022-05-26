const databaseUrl="https://apiexample-d7c1c-default-rtdb.europe-west1.firebasedatabase.app/"


function putApi(databaseUrl,endpoint,data,cb){
    fetch(`${databaseUrl}/${endpoint}`,{
        method:"PUT",
        body:JSON.stringify(data)
    })
    .then(value=>value.json())
    .then(json=>cb(json))
            
}

function getApi(databaseUrl,endpoint,data,cb){
    fetch(`${databaseUrl}/${endpoint}`)
    .then(value=>value.json())
    .then(json=>cb(json))
}  

export {putApi,getApi} 