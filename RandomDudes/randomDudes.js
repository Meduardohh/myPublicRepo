
let ombrekArr = [
    "Ádám Oláh",
    "Ádám Szonyi",
    "Ákos Szoke",
    "Arpad Toth",
    "Dávid Balázs",
    "Dávid Farkas",
    "Dávid Végh",
    "Domokos Csaba",
    "Dzsenifer Farnadi",
    "Emese Józsa",
    "Eszter Urbán",
    "Gergo Iglódi",
    "Gréta Fehértói",
    "Laszlo Pista",
    "Marcus Vidrányi",
    "Márk Hatala",
    "Medárd Molnár",
    "Péter Laczka",
    "Réka Farkas",
    "Szabolcs Derzsi",
    "Tamás Kiss",
    "Tamás Bittera",
    "Tamás Kecskés"];



// To object for better data manipulation
function toObj(arr) {
    let newObj = []
    for (let i = 0; i < arr.length; ++i) {
        newObj[i] = {
            name: arr[i],
            was: false,

        }
    }
    return newObj;
}



let ombrek = toObj(ombrekArr)
let wasToday = []
if (localStorage.length > 0) wasToday = JSON.parse(localStorage.getItem("Already dead"))
let saved = false;
let random = Math.floor(Math.random() * ombrek.length)



// Random checking and stuff
function giveRandom(ombre) {

    if (wasToday.includes(ombrek[random].name)) {
        random = Math.floor(Math.random() * ombrek.length)
        giveRandom(ombre)
    }
    else return random;

}
// Buttons
document.querySelector("#round").addEventListener("click", () => {

    if (wasToday.length === ombrek.length) return alert("No more confidence to destroy. Please stahp")
    giveRandom(ombrek[random].name)
    ombrek[random].was = true;
    wasToday.push(ombrek[random].name)
    while (random === 16) ++random;
    document.querySelector("h1").innerText = ombrek[random].name;

}
)

document.querySelector("#save").addEventListener("click", () => {
    localStorage.setItem("Already dead", JSON.stringify(wasToday));
    saved = true;

})
document.querySelector("#reset").addEventListener("click", () => {
    localStorage.clear()
    wasToday = []
    for (let i = 0; i < ombrek.length;++i){
        ombrek[i].was=false;
    }
})

window.addEventListener("beforeunload", function (e) {
    if (!saved) {
        let confirmationMessage = 'If you leave without saving. All the stats will be lost.';

        (e || window.event).returnValue = confirmationMessage;
        return confirmationMessage;
    }
});






