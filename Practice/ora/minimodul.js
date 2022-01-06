// feladat 1

// let string=`template literal`
// let string2="string literal"

// feladat 2

// let num=0;



//feladat 3
// let ures;

// ures=2;
// console.log(ures)


//feladat 4
// let array=[1,2,3,4,5];

// console.log(array);


//feladat 5
// let books=["JavaScript alapok","Modern JavaScript","HTML és CSS 5 nap alatt"]

// console.log(books)


//feladat 6 
// let twoDim=[[0,1,1],[0,1,1],[0,1,1]]

// console.log(twoDim)

//feladat 7
// let villany=true;

// if(villany){
//     alert("A villany fel van kapcsolva")
// }
// else{
//     alert("A villany nincs felkapcsolva")
// }

// feladat 8
// let string="abbanehagyjadmánosszevissza"

// console.log(string.charAt(0),string.charAt(string.length-1))

//feladat 9
// let array=["A","B","C","D","E"]
// for(let i=0;i<array.length;++i){
//     console.log(array[i])
// }

//feladat 10

// function kiiro(string){
//    return console.log(string)
// }

// kiiro("asd")
// kiiro("asdasdasdas")


//feladat 11

// let min=function selector(a,b){
//     if(a<b) return console.log(a)
//     else return console.log(b)
// }

// console.log(min(1,400))

//feladat 12

// let obj={
//     nev:"Kiss Jolan",
//     kor:32
// }

// console.log(obj.nev,obj.kor)

//feladat 13
// class Animal{
//     constructor(nev,faj,kor,ar){
//         this.nev=nev;
//         this.faj=faj;
//         this.ar=ar;
//         this.kor=kor;
//     }
// }

// let csorike=new Animal("Csőrike","Papagaj",0.5,2000)
// let cirmi=new Animal("Cirmi","Macska",2,5000)
// let dalmata=new Animal("Buksi","Dalmata",1,15000)


//feladat 14
// function arrayChecker(array){
//     if(Array.isArray(array)) 
//     {
//         let sum=0;
//         for(let i=0;i<array.length;++i){
//             sum +=array[i]
//         }
//         return sum;
//     }
//     else return null
// }
// console.log(arrayChecker('array'));
// console.log(arrayChecker([1,2,3]));

//feladat 15
// class Book{
//     constructor(cim,isbn,szerzo){
//         this.cim=cim;
//         this.isbn=isbn;
//         this.szerzo=szerzo;
//     }

//     isbnSet(isbn){
//         this.isbn=isbn;
//         return this.isbn
//     }
//     isbnGet(){
//         return this.isbn
//     }
// }


// let konyv1=new Book("JavaScript a gyakorlatban",123231,"John Doo")
// let konyv2=new Book("JavaScript és az OOP",545454,"Big Bill")

// console.log(konyv1.isbnGet())
// console.log(konyv2.szerzo)


// let csv = "Név;E-mail;Osztályzat\n" +
//     "Kiss Jolan;kiss.jolan@gmail.com;5\n" +
//     "Nagy Péter;nagy.peter@gmail.com;3";

//     let oneDim=csv.split("\n")
//     let firstline=false;

//     function dimensionate(array,firstline,deLim){
//         if(firstline){
//            return array.map(function (row) { return row.split(deLim)}); 
//         }
//         else{
//             array.splice(0,1)
//           return  array.map(function (row) { return row.split(deLim)})
//         }
//     }

// let twoDim=dimensionate(oneDim,true,";")
// console.log(dimensionate(oneDim,true,";"))
// // console.log(csv.split("\n").map(function (row) { return row.split(";") }))  one liner


// // let csv2=twoDim.map((item)=>{
// //     let row=item;
// //     return row.join(";")
// // }).join("\n")

// function b2CSV(array){
//     let csv2=array.map((item)=>{
//     let row=item;
//     return row.join(";")
// }).join("\n")

// return csv2
// }
// console.table(b2CSV(twoDim))


// console.log(csv2)
// console.log(twoDim)

// let tip=["Neve","Kora","Beosztása"]

// let adat=[]
// for(let i=0;i<3;++i){
//    adat.push(prompt(`Mi a felhasználó ${tip[i]}`))
// }

// console.log(adat)
// let diff={}
// let taper=adat;
// adat=[]
// let difString=""
// for(let i=0;i<3;++i){
    
//     adat.push(prompt(`Mi a felhasználó ${tip[i]}`))
//     if(taper[i]!=adat[i]) diff[i]={
//         eredet:taper[i],
//         modositott:adat[i]
//     }
//     difString +=` eredet:${taper[i]} at ${i} modositott: ${adat[i]} at ${i} `
//  }
// console.log(diff)
// console.log(taper)
// console.log(difString)

// let person={
//     nev:"",
//     email:"",
//     tel:"",
//     web:"",
//     cim:"",
//     szulEv:""
// }

// do{

//     if(person.nev=="") person.nev=prompt("Adjál nevet"); 
//     if(person.email=="") person.email=prompt("Adjál emailt"); 
//     if(person.tel=="") person.tel=prompt("Adjál telt"); 
//     if(person.web=="") person.web=prompt("Adjál webet"); 
//     if(person.cim=="") person.cim=prompt("Adjál cim"); 
//     if(person.szulEv=="") person.szulEv=prompt("Adjál szuleve"); 
// }while(person.cim==""||person.email==""||person.nev==""||person.szulEv==""||person.tel==""||person.web=="")
// console.log(person)

// let szam=Number(prompt("Adj egy számot 0-20 között"))
// let iter=0;
// let eredetiSzam=szam;
// while(szam>20||szam<0){
//     szam=prompt("Adj egy számot 0-20 között")
//     eredetiSzam=szam
// }
// if(szam%3>0&&szam<=10){
//     while(szam%3!==0){
//         ++szam;
//         ++iter
//     }
// }
// else if(szam>=10&&szam%3>0){
//     while(szam%3!==0){
//         --szam
//         ++iter
//     }
// }
// else if(szam%3==0){
//     alert("Osztható 3mal")
// }

// console.log(`${eredetiSzam} volt az eredeti szám ${szam} a hárommal osztható ${iter} iteráció kellett`)


