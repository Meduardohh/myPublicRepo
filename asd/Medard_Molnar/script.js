// function szorzoTabla(n){
//     let eredmeny
//     for(let i=0;i<=10;i++){
//         eredmeny=n*i
//         console.log(`${n}*${i} = ${eredmeny}`)
//     }
// }

// szorzoTabla(2)


// function stringReverse(string){
//     if(typeof string !=='string'){
//       return  alert("Ne buzgálkodjál. Mindig buzgálkodsz")

//     }
//     else{
//   let reverseString=  string.split("").reverse().join("")

// return console.log(reverseString);
// }
// }

// stringReverse("asdert")


// function toString(number){
//   return console.log(number.toString())
// }
// toString(1231827)

// function increase(n)
// {
//   return console.log(++n)
// }
// increase(4)

// function decrease(n)
// {
//   return console.log(--n)
// }
// decrease(4)

// function add(a,b){
//   return console.log(a+b)
// }

// add(10,20)

// function subtract(a,b){
//   return console.log(a-b)


// }
// subtract(10,15)

// let input = prompt("Van kuponod bazze?")
// let termek = prompt("Mennyi volt a termék?")

// let kuponok = [
//     {
//         kupon: "XMAS10",
//         kedvezmeny: 10
//     },
//     {
//         kupon: "SANTA1000",
//         kedvezmeny: 1000
//     }
// ]

// function kupon(input, termek) {
//     let ifNot = "Nincs ilyen kupon baszdmeg"       
//         if (input == kuponok[0].kupon) return termek - (termek / 100 * kuponok[0].kedvezmeny)
//         else if (input == kuponok[1].kupon) return termek - kuponok[1].kedvezmeny
//         else return ifNot

// }

// console.log(kupon(input, termek))

// for(let i=0;i<=10;++i){
//     console.log(i)
// }

// function repeater(iteration,callBack){


//     let myString="";
//     for(let i=0;i<iteration;++i){
//         myString+=callBack ()
//     }
//     return myString;

// }

// console.log(repeater(2, function() { return '1fr'  }))

function prepare(what, how) {
    let thisString = `Mit:${what} hogyan:${how()}`
    return thisString

    
}

console.log(prepare("hagyma", function () { return "vág" }))