class toDoHandler {
    i = -1;
    constructor(tDList) {
        this.tDList = tDList;
    }

    addToDo(toDo) {
        this.tDList[++this.i] = {
            todo: toDo,
            status: false,
        }


    }

    delToDo(num) {
        if (num > this.i || num < 0) return alert("There is no task on this ID(delete): " + num);
        this.tDList.splice(num, 1);
        --this.i


    }
    notDone(num) {
        if (num > this.i || num < 0) return alert("There is no task on this ID(set to not done): " + num);
        this.tDList[num].status = false;
    }
    isDone(num) {
        if (num > this.i) return alert("There is no task on this ID(set to done): " + num);
        this.tDList[num].status = true;
    }
    retList() {
        return this.tDList;
    }
    consoleList() {
        console.log(this.tDList);
    }

}

let toDo = new toDoHandler([])

let tDList = toDo.retList();

let toDoList = document.querySelector("#toDoList");
let toDoAdd = document.querySelector("#toDoInput");
let randomButt=document.querySelector(".random")




toDoAdd.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        let crossed=false;
        // toDo.addToDo(toDoAdd.value);
        let listItem = document.createElement("li");
        listItem.innerText = toDoAdd.value;
        listItem.classList.add("listElement");
        toDoList.appendChild(listItem);
        listItem.value = "";
        listItem.addEventListener("click", () => {

            if(!crossed){
            listItem.style.textDecoration = "line-through";
            crossed=true;
            }else{
                listItem.style.textDecoration = "none";
                crossed=false;
            }

            
        })
        listItem.addEventListener("dblclick", () => {
            toDoList.removeChild(listItem);
        })
    }

})

randomButt.addEventListener("click",()=>{   
    
    // location.href="\index.html"
    window.location.href='D:\\CodesNStuff\\orai\\Hazifeladatok\\myPublicRepo\\Practice\\toDoProj\\index.html'
})






