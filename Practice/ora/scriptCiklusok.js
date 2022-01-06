
// let bobKonyv="Haboru es beke";
// let cecilKonyv="Vörös és fekete";

// let konyvcsere=bobKonyv;
// bobKonyv=cecilKonyv;
// cecilKonyv=konyvcsere;

// console.log(`Cecil has  ${cecilKonyv} Bob has ${bobKonyv}`)


// let userName=window.prompt("Mi a neved!")
// console.log(userName.length)


//teglalap kerulet terulet

// let teglalap1= window.prompt("Add meg a teglalap egyik oldalát");
// let teglalap2= window.prompt("Add meg a teglalap másik oldalát");
// // console.log(`A teglalap egyik oldala ${teglalap1} másik oldala pedig ${teglalap2}`);

// if(isNaN(teglalap1) && isNaN(teglalap2)){
//     window.alert("Anyáddal szórakozzál")
// }
// else{
// let aOldal=parseInt(teglalap1);
// let bOldal=parseInt(teglalap2);
// let kerulet=2*(aOldal+bOldal);
// let terulet=aOldal*bOldal;

// console.log(`A téglalap kerülete: ${kerulet} `)
// console.log(`A téglalap területe: ${terulet} `)
// console.log("A terulet: "+terulet +" A kerület: "+kerulet);
// }


// let aladarFlakon=10;
// let ivas=2;

// console.log(`${aladarFlakon-3*ivas} dl víz van aladár palackjában miután 3x ivott`)


// let text=window.prompt("Írj be egy szöveget ami hosszabb mint 80 karakter")

// if(text.length>=80){
//     console.log(`${text.substring(0,76)}...`)
// }

// console.log(text)


//két szám közül nagyobb vagy egyenlő

// let a=window.prompt("Írd be az első számot")
// let b=window.prompt("Írd be a második számot")
// if(a>b){
//     console.log(`a: ${a} nagyobb mint b: ${b} `);
// }
// else if (b>a)
// {
//     console.log(`a: ${a} kisebb mint b: ${b} `);
// }
// else if(isNaN(a)&& isNaN(b)){
//     window.alert("Anyaddal szorakozzal")
// }
// else{
//     console.log(`a: ${a} egyenlő b: ${b} `);
// }

// let text=window.prompt("Adj szöveget paraszt")

// if(text.includes("hello")||text.includes("Hello")){
//     window.alert("Szevasz")
// }

// let uresTomb=[];
// let szamTomb=[1,2,3]
// let stringTomb=["asd","asdabb","megasdabb"]
// console.log(uresTomb,szamTomb,stringTomb)

// let twoDimension=[
//     ["background-color","display","font-size"],
//     ["html","head","body"]
// ]
// console.log(twoDimension)

// let bevasarloList=[
//     "Javascript Haladoknak könyv",
//     "Hogyan legyünk millimosok könyv",
//     "Fogkefe kutyáknak",
//     "Mirelit hal a cicának",
//     "Zseblámpa"


// ]
// console.log(bevasarloList)

// bevasarloList[bevasarloList.length]="Valami"

// console.log(bevasarloList)

// bevasarloList[0]="Amatör kertészkedés kézikönyv"
// console.log(bevasarloList)
// bevasarloList.splice(bevasarloList.length-2, 1)
// console.log(bevasarloList)

// let userInfo ={
//     name:"Nemtom",
//     birthYear:1995,
//     userName:"username",
//     email:"Email"

// }
// console.log(userInfo)



// let basketItem={
//     model:"Apple iphone 12 | 12 pro",
//     anyag:"szilikon",
//     gyarto:"MagSafe",
//     id:00012,
//     elerhetoseg:"Raktaron",
//     mennyiseg:1,
//     ar:12383,
//     szin:"fekete",
//     termekMegnevezes:"tok",
//     url:"url"
// }
// console.log(basketItem)
//



//teglalap kerület,terület

// let aOldal=window.prompt("Add meg az egyik oldalt")
// let bOldal=window.prompt("Add meg a másik oldalt")

// let teglalap={
//     aOldal:aOldal,
//     bOldal:bOldal,   
//     terulet:parseInt(aOldal)*parseInt(bOldal),
// kerulet:2*(parseInt(aOldal)+parseInt(bOldal))

// }

// console.log(teglalap)



// basic calculator

// let firstNumber = Number(window.prompt("Adj meg egy számot"));
// let secondNumber = Number(window.prompt("Adj meg még egy számot"))
// let muvelet = window.prompt("Milyen műverletet akarsz végezni?(+,-,/,*)")

// if (muvelet != "*" || muvelet != "/" || muvelet != "-" || muvelet != "+") {

//     if (isNaN(firstNumber) && isNaN(secondNumber)) {

//         window.alert("Ne buzgálkodjál. Mindig buzgálkodsz")


//     }
//     else {


//         if (muvelet == "+") {
//             window.alert(`${firstNumber + secondNumber} Itt a számod edd meg`)
//         }
//         else if (muvelet == "-") {
//             window.alert(`${firstNumber - secondNumber} Itt a számod edd meg`)
//         }
//         else if (muvelet == "*") {
//             window.alert(`${firstNumber * secondNumber} Itt a számod edd meg`)
//         }
//         else if (muvelet == "/") {
//             window.alert(`${firstNumber / secondNumber} Itt a számod edd meg`)
//         }
//         else {
//             window.alert("Ne buzgálkodjál. Mindig buzgálkodsz")



//     }



//     }
// }


//Number guess game

// let random = Math.floor(Math.random() * 10);
// console.log(random)
// let tipp;
// let highScores=[]
// let tries=0;

// while (tipp != random) {
//     tipp = window.prompt("Tippelj paraszt 1-10")
//     if (tipp <= 10) {
//         checkNum(Number(tipp))
//     }
//     else {
//         window.alert("Ne buzgálkodj. Mindig buzgálkodsz")
//     }

//     tries++
//     alert(`You had to try ${tries} time`)
// }
// highScores.push(tries)
// alert(highScores)
// function checkNum(p) {

//     if (p == random) {
//         window.alert("Eltaláltad")
//     }

//     else if (p + 1 == random || p + 2 == random) {
//         window.alert("Próbáld újra kicsit nagyobb")
//     }
//     else if (p - 1 == random || p - 2 == random) {
//         window.alert("Próbáld újra kicsit kisebb")
//     }
//     else{
//         window.alert("Béna vagy Potter")
//     }
// }


// három szám közül melyik a legnagyobb

// let firstNumber=Number(prompt("Mondj egy számot"))
// let secondNumber=Number(prompt("Mondj még egy számot"))
// let thirdNumber=Number(prompt("Mondj még egy számot"))

// if(firstNumber>secondNumber && firstNumber>thirdNumber){
//     alert(`${firstNumber} is the biggest one`)
// }
// else if(secondNumber>firstNumber&&secondNumber>thirdNumber){
//     alert(`${secondNumber} is the biggest one`)
// }
// else if (thirdNumber>secondNumber && thirdNumber>firstNumber){
//     alert(`${thirdNumber} is the biggest one`)
// }


//if number can be divided 11 or 5

// let myNumber=Number(prompt("Gimmie a number mate"))
// let divideNumberOne=5;
// let divideNumberTwo=11;
// if(myNumber%divideNumberTwo===0 && myNumber%divideNumberTwo===0){
//     alert(`${myNumber} can be divided by ${divideNumberTwo}`)
// }
// else{
// if((myNumber%divideNumberOne)===0){
//     alert(`${myNumber} can be divided by ${divideNumberOne}`)
// }
// else{alert(`${myNumber} can't be divided by ${divideNumberOne}`)}

// if(myNumber%divideNumberTwo===0){
//     alert(`${myNumber} can be divided by ${divideNumberTwo}`)
// }
// else{alert(`${myNumber} can't be divided by ${divideNumberTwo}`)}
// }


//triangle identifier

// let triangleFirst=Number(prompt("Haromszog elso oldala:"));
// let triangleSecond=Number(prompt("Haromszog masodik oldala:"));
// let triangleThird=Number(prompt("Haromszog harmadik oldala:"));


// if (triangleFirst===triangleSecond||triangleSecond===triangleThird|| triangleThird===triangleFirst){
//     alert("Ez egy egyenlőszárú háromszög")
// }
// if(triangleFirst===triangleSecond===triangleThird){
//     alert("Ez egy egyenlő oldalú háromszög")
// }
// if(triangleThird !==triangleSecond && triangleThird !==triangleFirst&& triangleSecond!==triangleFirst){
//     alert("Ez egy sima háromszög minden oldala különböző")
// }


//Day identifier

// let dayNumber=prompt("Mondj egy számot 1-7");

//  switch(dayNumber){
//  case "1": alert("Monday");
//  break;
//  case "2": alert("Tuesday");
//  break;
//  case "3": alert("It is wednesday my dude");
//  break;
//  case "4": alert("Thursday");
//  break;
//  case "5": alert("Friday");
//  break;
//  case "6": alert("Saturday");
//  break;
//  case "7": alert("Sunday");
//  break;
//  default: alert("Ne buzgálkodjál mindig buzgálkodsz")
//  }



//adding numbers until 100

// let i = 1;
// let sum = 0
// while (i < 100) {


//     if (i % 3 === 0 && i % 7 === 0) {
//         console.log(i)
//         sum += i;
//     }

//     i++
// }
// console.log(sum)
// while(i<=100){
//     sum +=i

//     i++
// }
// console.log(sum)



// if((i%2)===0){
//     console.log(i)
// }



// string/number reverse with array


// let reversable=prompt("Adj meg egy számsort")


//1.)
// let newReverse=reversable.split("");

// let finalReverse=newReverse.reverse().join("")

// console.log(Number(finalReverse))


//2.)
// let newReversable=""
// for(i=reversable.length-1; i>=0;i--){
//     newReversable +=reversable[i]
// }
// console.log(Number(newReversable))


// Masodfoku egyenlet

// let a=Number(prompt("Add meg az a-t (csak szám)"));
// let b=Number(prompt("Add meg az b-t (csak szám)"));
// let c=Number(prompt("Add meg az c-t (csak szám)"));

// let discriminant = b * b - 4 * a * c;
// x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//     x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

//     alert(`${x1},${x2}`)


// check if ABC includes

// let check=prompt("Check if abc includes:")
// abcArray=["a","A","b","B","c","C","d","D","e","E","f","F","g","G","h","H","i","I","j","J","k","K","l","L","m","M","n","N","o","O","p","P","q",
// "Q","r","R","s","S","t","T","u","U","v","V","w","W","x","X","y","Y","z","Z"]

// alert(abcArray.includes(check))


// szokoev checker

// let year=prompt("Szökőév checker:")
// szokoevChecker(year)


// function szokoevChecker(y) {

//   if ((y % 4 === 0 && y % 100 !==0)||y % 400===0){
//     alert(`${y} egy szökőév`)
//   }
//   else{
//     alert(`${y} nem szökőév`)
//   }
// }


//ket N elemű tömb összedáasa

// let tomb1=[3,4,5,6,7,8,9]
// let tomb2=[1,2,3,4,5,6,7]
// let sum=0;

// for(let i=0;i<=tomb1.length-1;i++){
//   sum+=tomb1[i]
//   sum+=tomb2[i]

// }
// console.log(sum)


// space kicserélő

// let text=prompt("Írj be egy szöveget spacekkel:")
// let result=text.split(" ").join("☀️")
// alert(result)


// (Why the fuck does this not work?)

// while(!result.includes(" ")){
// result=text.replace(" ","☀️")
// }

 



// magan/massalhangzó vizgáló

// let toBeChecked=prompt("Mással/Magánhangzó checker(csak egy betűt):")

// let maganhangzoTomb=["a","A","á","Á","o","O","ó","Ó","u","U","ú","Ú","e","E","é","É","i","I","í","Í","ü","Ü","ű",
// "Ű","ö","Ö","ő","Ő"]  

// let massalhangzoTomb=["b","B","c","C","d","D","f","F","g","G","h","H","j","J","k","K","l","L","m","M","n","N","p","P","q",
// "Q","r","R","s","S","t","T","v","V","w","W","x","X","y","Y","z","Z"]



// if(maganhangzoTomb.includes(toBeChecked)){
//   alert("Ez egy magánhangzó")
// }
// else if(massalhangzoTomb.includes(toBeChecked)){
//   alert("Ez egy mássalhangzó")
// }
// else{
//   alert("Ne buzgálkodj, mindig buzgálkodsz")
// }


//space számláló

// let text=prompt("Írj be egy szöveget(space számláló):")
// let count= text.split(" ").length-1
// alert(count)

// let count=0;
// for(let i = text.length-1; i>=0; i--){
//   if(text.charAt(i) == " "){
//     count ++;
//   }
// }
// alert(count)


// egész szám számláló

// let num=[-2,-3,-4,-6,1,2,3,4,5,6]


// for(let i=0;i<num.length;i++){
// if(num[i]>0){
//   counter++
// }

// }
// console.log(counter)


// let num=[
//   {x:-12, y:-10},
//   {x:5, y:10},
//   {x:-20, y:-30},
//   {x:-5, y:-30},
//   {x:40, y:-50},
// ]
// let counter=0;


// for(let i=0;i<num.length;i++){
//   if(num[i].x>0){
//     counter++
//   }
//   if(num[i].y>0){
//     counter++
//   }
  
// }
// console.log(counter)

// let num=[-2,-3,-4,-6,true,1,2,3,4,5,6,"takaritas","baszdmeg"]
// let sum=0;
// let boolSum=0;
// let stringSum=0;
// let numSum=0;
// for(let i=0;i<num.length;i++){
//   if(typeof num[i]==='boolean'){
//       boolSum++
//     }
//     else if(typeof num[i]==='string'){
//       stringSum++
//     }
//     else if(typeof num[i]==='number'){
//       numSum++
//     }
//   if(isNaN(num[i]))continue
//   else{
//     sum+=num[i]
//   }  
// }
// console.log(`${boolSum} bool`)
// console.log(`${stringSum} string`)
// console.log(`${numSum} nums`)
// console.log(sum)

// let maganhangzo="aáeéiíoóöőuúüű"
// let nagyMaganhangzo=maganhangzo.toUpperCase();
// let massalhangzo="bcdfghjklmnprstvz"
// let nagyMassalhangzo=massalhangzo.toUpperCase();

// let massalHangzo=nagyMassalhangzo+massalhangzo;
// let maganHangzo=maganhangzo+nagyMaganhangzo


// let vizsgalando=prompt("Írd be a vizsgálandót");

// if(massalHangzo.includes(vizsgalando)){
//     alert(`${vizsgalando} egy mássalhangzo`);
// }
// else if(maganHangzo.includes(vizsgalando)){
//     alert(`${vizsgalando} egy maganhangzo`);
// }


