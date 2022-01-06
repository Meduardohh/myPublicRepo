// function randomArray(num){
//     let array=[]

//     for(let i=0;i<num;++i){
//         array.push(Math.floor(Math.random()*11))
//     }
//     return array
// }

// console.log(randomArray(1500))

// function populateMatrix(num,toBeFilled){
//     let array=[];
//     for(let i=0;i<num;++i){
//         array[i]=[];
//         for(let j=0;j<num;++j){
//             array[i].push(toBeFilled);
//         }

//     }
//     return array;
// }
// function populateVector(num,toBeFilled){
//     let array=[]
//     for(let i=0;i<num;++i){
//         array[i]=toBeFilled
//     }
//     return array
// }

// function arrayDim(toBeFilled,firstDimSize,secondDimSize){
//     let array=[]
//     if(typeof toBeFilled==="undefined"||typeof firstDimSize ==="undefined"){
//         alert("Az első két mezőt kötelező kitölteni te kis geci")
//         return null;
//     }


//     if(!secondDimSize){
//         array=populateVector(firstDimSize,toBeFilled)
//     }
//     else{
//         array=populateMatrix(secondDimSize,toBeFilled)
//     }

//     return array
//         }

// console.log(arrayDim('bazze',3))


// function arrayDim(toBeFilled,firstDimSize,secondDimSize){
//     let arr=[]
//     if(typeof toBeFilled==="undefined"||typeof firstDimSize ==="undefined"){
//                 alert("Az első két mezőt kötelező kitölteni te kis geci")
//                 return null;
//             }

//     for(let i=0;i<firstDimSize;++i){
//         if(!secondDimSize) arr.push(toBeFilled)
//         else arr[i]=[]
//         for(let j=0;j<secondDimSize;++j){
//             arr[i].push(toBeFilled)
//         }        
//     }
//     return arr
// }
// console.log(arrayDim("alma",3,3))

// function valuesReturn(arr,toBeReturned){
//     let newArr=[]
//     for(let i=0;i<toBeReturned.length;++i){
//         if(typeof arr[toBeReturned[i]]==="undefined") continue
//         newArr.push(arr[toBeReturned[i]])
//     }
//     return newArr
// }

// console.log(valuesReturn([], [1, 2, 3]))


// function callBackFail(){
//     console.log("You have failed")
// }
// function callBackSucc(){
//     console.log("You have succeeded")
// }

// function errorHandler(callBackSucc,callBackFail,str){
// if(typeof callBackFail !=="function"||typeof callBackSucc !=="function")return console.log("Nem megfelelő paraméterek")

//     if(typeof str=="string")return callBackSucc()
//     else return callBackFail()

// }

// console.log(errorHandler(callBackSucc,callBackFail,0))


// class toDoHandler {
//     i = -1;
//     constructor(tDList) {
//         this.tDList = tDList;
//     }

//     addToDo(toDo) {
//         this.tDList[++this.i] = {
//             todo: toDo,
//             status: false,
//         }

//     }

//     delToDo(num) {
//         if(num>this.i||num<0) return alert("There is no task on this ID(delete): "+ num)       
//         this.tDList.splice(num,1)
//         --this.i


//     }
//     notDone(num) {
//         if(num>this.i||num<0) return alert("There is no task on this ID(set to not done): "+ num)
//         this.tDList[num].status = false;
//     }
//     isDone(num) {
//         if(num>this.i) return alert("There is no task on this ID(set to done): "+ num)
//         this.tDList[num].status = true;
//     }
//     retList(){
//         return this.tDList;
//     }
//     consoleList(){
//         console.log(this.tDList)
//     }
// }

// let toDo=new toDoHandler([])

// toDo.addToDo("Give the dog food1")
// toDo.addToDo("Give the dog food2")
// toDo.addToDo("Give the dog food3")
// toDo.addToDo("Give the dog food4")

// toDo.isDone(0)
// toDo.isDone(3)
// toDo.isDone(8)
// toDo.notDone(0)
// toDo.delToDo(2)
// toDo.delToDo(0)




// toDo.consoleList()
// console.log(toDo.retList())

// function digital_root(n) { 
//     let sum=0;
//     let arr=[]
   
//     while(n.toString().split("").lenght>1){
//       arr=n.toString().split("");
//       sum=0;
//       for(let i=0;i<arr.length;++i){
//         sum+=Number(arr[i]);
//       }
//       n=sum;
//     }
    
    
//     return sum
//   }

//   console.log(digital_root(456111));

 


 
