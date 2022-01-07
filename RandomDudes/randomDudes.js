
let ombrek = [
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


let wasToday = []
if (localStorage.length > 0) wasToday = JSON.parse(localStorage.getItem("Already dead"))
let saved = false;
let random = Math.floor(Math.random() * ombrek.length)

function giveRandom(ombre) {

    if (wasToday.includes(ombrek[random])) {
        random = Math.floor(Math.random() * ombrek.length)
        giveRandom(ombre)
    }
    else return random;

}

document.querySelector("#round").addEventListener("click", () => {

    if (wasToday.length === ombrek.length) return alert("No more confidence to destroy. Please ")
    giveRandom(ombrek[random])
    wasToday.push(ombrek[random])
    while (random === 16) ++random;
    document.querySelector("h1").innerText = ombrek[random];

}
)

document.querySelector("#save").addEventListener("click", () => {
    localStorage.setItem("Already dead", JSON.stringify(wasToday));
    saved = true;

})
document.querySelector("#reset").addEventListener("click", () => {
    localStorage.clear()
    wasToday = []
})

window.addEventListener("beforeunload", function (e) {
    if (!saved) {
        let confirmationMessage = 'If you leave without saving. All the stats will be lost.';

        (e || window.event).returnValue = confirmationMessage;
        return confirmationMessage;
    }
});




