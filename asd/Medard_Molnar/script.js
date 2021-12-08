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


// function prepare(what, how) {
//     let thisString = `Mit:${what} hogyan:${how()}`
//     return thisString


// }

// console.log(prepare("hagyma", function () { return "vág" }))



let phoneNumbers = [3630792765, 3630369549, 3620797249, 3670129465, 3630735165, 3630799685, 3630294765, 3630739572, 3630792388, 3630792947, 3630798965, 3630799284, 3630793325, 3630799685, 3630194265,];
let names = ['Bandobras Underhill', 'Robin Gardner', 'Isembold Whitfoot', 'Donnamira Galbassi', 'Bungo Baggins', 'Will Sandyman', 'Isengrim Proudfoot', 'Frodo Baggins', 'Amaranth Gaukrogers', 'Trahand Bunce', 'Will Sandyman', 'Halfred Goodchild', 'Bilbo Baggins', 'Will Sandyman', 'Belba Sandheaver'];

// Emailek, amikkel nem kell semmit csinalni egyelore
let emails = ['paulnoel21@agung002.com', 'weegrah1@eeothno.com', 'johnjohn69@hungta2.com', 'johnjohn69@hungta2.com', 'yuzhakova1960@hungta2.com', 'yuzhakova1960@hungta2.com', 'lemonkakiska@cggup.com', 'lemonkakiska@cggup.com', 'bd8axwy@cuendita.com', 'bd8axwy@cuendita.com', 'gasg@supok.site', 'gasg@supok.site', 'zaqman@pianoxltd.com', 'zaqman@pianoxltd.com', 'kimaradt emailcim'];

function phoneBook(name, phoneNumbers, email) {
    let people = []
    for (let i = 0; i < names.length; ++i) {
        people[i] = {
            name: name[i],
            tel: phoneNumbers[i],
            email: email[i]
        }
    }
    return people

}

console.log(phoneBook(names, phoneNumbers, emails))

let pBook = phoneBook(names, phoneNumbers, emails)

function add(pBook, name, tel) {
    if (tel === undefined) return alert("Give phone number")

    else pBook.push({ name: name, tel: tel })
    return pBook
}
console.log(add(pBook, "Medard", 012345))


function findByMobile(phoneBook, mobile) {

    for (let i = 0; i < phoneBook.length; ++i) {
        if (phoneBook[i].tel == mobile) {
            return phoneBook[i]
        }

    }
    return null
}

console.log(findByMobile(pBook, 3670129465))

function findByMobileIndex(phoneBook, mobile) {

    for (let i = 0; i < pBook.length; ++i) {
        if (phoneBook[i].tel == mobile) {
            return i
        }

    }
    return null
}

console.log(findByMobileIndex(pBook, 3670129465))

function deleteFromBook(pBook, tel) {

    let toDelete = findByMobileIndex(pBook, tel)
    let dopple = pBook[toDelete]
    pBook.splice(toDelete, 1)
    return dopple
}
console.log(deleteFromBook(pBook, 3670129465))


function findByName(pBook, name) {
    for (let i = 0; i < pBook.length; ++i) {
        if (pBook[i].name == name) return pBook[i]
    }
    return null
}

console.log(findByName(pBook, "Medard"))

function addField(pBook, tel, field, value) {
    for (let i = 0; i < pBook.length; ++i) {
        if (pBook[i].tel == tel) {
            pBook[i][field] = value

            return pBook[i]
        }
    }
}

console.log(addField(pBook, 3630294765, "anyja", "faszom"))

function modify(phoneBook, mobile, field, value) {
    for (let i = 0; i < phoneBook.length; ++i) {
        if (phoneBook[i].tel == mobile) {
            phoneBook[i][field] = value;
            return phoneBook[i]
        }
    }
    return null

}
console.log(modify(pBook, 3630294765, "anyja", "anyja"))

function formatPhoneNumber(mobile) {
    mobile = mobile.toString()
    mobile = `+${mobile[0]}${mobile[1]} ${mobile[2]}${mobile[3]}${mobile[4]}${mobile[5]} ${mobile[6]}${mobile[7]}${mobile[8]}`
    return mobile
}

console.log(formatPhoneNumber(3630294765))


function bagginsFinder(pBook) {
    let baggins = []
    let d = -1
    for (let i = 0; i < pBook.length; ++i) {
        if (pBook[i].name.includes("Baggins")) {
            let telephone = formatPhoneNumber(pBook[i].tel)
            baggins[++d] = {
                name: pBook[i].name,
                tel: telephone
            }
        }
    }

    return baggins
}

console.log(bagginsFinder(pBook))

let duplicates_test = [
    { name: 'Mr. 1', mobile: 36301234567 },
    { name: 'Mr. 2', mobile: 36301234567 },
    { name: 'Mr. 3', mobile: 36301234567 },
    { name: 'Mr. 3', mobile: 36301234567 },
    { name: 'Ms. 1', mobile: 36301234568 }]

function duplicateRemover(arr){
    let currentNumber=0;
    for(let i=0;i<arr.length;++i){
        if(typeof arr[i]==='undefined') continue
        currentNumber=arr[i].mobile
        for(let j=i+1;j<arr.length;++j){
            if(currentNumber===arr[j].mobile){
                delete arr[j]
            }
        }

    }
    return arr

}
console.log(duplicateRemover(duplicates_test))