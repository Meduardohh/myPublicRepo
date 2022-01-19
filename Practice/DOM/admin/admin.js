
//database
let idIndex = -1

let dataBase = [{
    id: ++idIndex,
    fullname: "Medard Molnar",
    username: "string1",
    email: "string@string.com",
    isimage: false,
    imageurl: "",
},
{
    id: ++idIndex,
    fullname: "Kiss asdél",
    username: "usernasd",
    email: "string@string.com",
    isimage: false,
    imageurl: "",
},


];



//admin.html
let tabButtons = document.querySelectorAll(".tabButtons")
let tabs = document.querySelectorAll(".tabs")

let statButton = document.querySelector("#statButton")
let tableButton = document.querySelector("#tableButton")
let galleryButton = document.querySelector("#galleryButton")

let statDiv = document.querySelector("#stat")
let tabsDiv = document.querySelector("#tabs")
let galleryDiv = document.querySelector("#gallery")

let userTable = document.querySelector("#userTable")

let userImages = document.querySelectorAll(".images")
let userSelect = document.querySelector("#userSelect")

// let previousTab = null;
// let previousButton = null;


// function tabSelector(tab,button) {
//     if (previousTab && previousButton) {
//         previousButton.stlye.backgroundColor = "#01696d"
//         previousTab.style.display = "none"
//     }
//     tab.style.display = "inline-block";
//     tab.style.backgroundColor = "#8d9346";
//     previousTab = tab;
//     previousButton=button;
// }


// statButton.addEventListener("click", () => {
//     // tabSelector(statDiv,statButton)
// })
// tableButton.addEventListener("click", () => {
//     // tabSelector(tabsDiv,tableButton)
// })
// galleryButton.addEventListener("click", () => {
//     // tabSelector(galleryDiv,galleryButton)
// })


function toDefault() {
    for (let i = 0; i < tabButtons.length; ++i) {
        tabButtons[i].style.backgroundColor = "#01696d";
        tabs[i].style.display = "none"
    }
}

for (let i = 0; i < tabs.length; ++i) {
    tabButtons[i].addEventListener("click", () => {
        toDefault();
        tabs[i].style.display = "inline-block";
        tabButtons[i].style.backgroundColor = "#8d9346";
    }
    )

}




function loadStat() {
    let imageCounter = 0;
    for (let i = 0; i < dataBase.length; ++i) {
        if (dataBase[i].isimage) imageCounter++
    }
    statDiv.innerHTML = `<p>Registered users:${dataBase.length}<br> Users that have images:${imageCounter} </p>`
}

loadStat()

function addDel(newRow) {
    let newItem = document.createElement("td");
    newRow.appendChild(newItem);
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    newItem.appendChild(deleteButton);

    deleteButton.addEventListener("click", (e) => {
        e.target.parentNode.parentNode.remove()
        let targetId = Number(e.target.parentNode.parentNode.firstChild.innerText)
        for (let i = 0; i < dataBase.length; ++i) {
            if (targetId === dataBase[i].id) {
                dataBase.splice(i, 1)
            }
        }
    })


}
function addMod(newRow) {
    let newItem = document.createElement("td");
    newRow.appendChild(newItem);
    let modifyButton = document.createElement("button");
    modifyButton.innerText = "Mod";
    newItem.appendChild(modifyButton)


}

function loadTable() {

    for (let i = 0; i < dataBase.length; ++i) {
        let newRow = document.createElement("tr");
        userTable.appendChild(newRow)
        for (let j = 0; j < Object.keys(dataBase[i]).length; ++j) {
            if (!Object.values(dataBase[i])[j]) Object.values(dataBase[i])[j] = "N/A"
            let newItem = document.createElement("td");
            newRow.appendChild(newItem);
            newItem.innerText = Object.values(dataBase[i])[j]




        }
        addMod(newRow);
        addDel(newRow);

    }

}
loadTable();
for (let i = 0; i < dataBase.length; ++i) {
    let newOption=document.createElement("option")
    newOption.innerText=dataBase[i].username
    userSelect.append(newOption)
    
}

for (let i = 0; i < userImages.length; ++i) {
    userImages[i].addEventListener("click", (e) => {
        let image = e.target



    })
}
