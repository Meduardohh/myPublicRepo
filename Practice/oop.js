// class Adress{
//     constructor(country,city,zip,streetName,number,floor,apt){
//         this.country=country;
//         this.city=city;
//         this.zip=zip;
//         this.streetName=streetName;
//         this.number=number;
//         this.floor=floor;
//         this.apt=apt
//     }
//     toString(){
//         console.log(`${this.country} ${this.city} ${this.zip} ${this.streetName} ${this.number} ${this.floor} ${this.apt}`)
//     }

//     changeZip(zip){
//         this.zip=zip

//     }
//     showZip(){
//         console.log(this.zip)
//     }
// }

// let myAdress=new Adress("Hungary","Budapest","1002","kis","15","1st","2")
// let thisAdress=new Adress("Hungary","Budapest","1202","nagy","23","2nd","2")
// console.log(myAdress)
// console.log(thisAdress)

// myAdress.toString()
// myAdress.changeZip('1500')
// console.log(myAdress)
// myAdress.showZip()

// class Gun{
//     constructor(gunType,maxMagazine,actualMagazine,bulletType,damage){
//         this.gun=gunType;
//         this.magazine=maxMagazine;
//         this.bulletsLeft=actualMagazine;
//         this.bulletType=bulletType;
//         this.dmg=damage;
//     }
//     shoot(){
//         if(this.bulletsLeft>0)
//         console.log(`You have shot some motherfucker for ${this.dmg} damage and you have  ${--this.bulletsLeft} bullets left`)
//         else{
//             console.log(`Oops you have ran out of bullets`)
//         }
//     }
//     reload(){
//         this.bulletsLeft=this.magazine;
//     }
// }

// let myGun=new Gun("ak47",30,30,"big",30)

// for(let i=0;i<31;++i){

//     myGun.shoot()
// }


// console.log(myGun)

// myGun.reload()
// console.log(myGun)



// class Company{
//     constructor(cegNev,adoSzam,cegJegyzek){
//         this.ceg=cegNev;
//         this.adoszam=adoSzam;
//         this.cegJegyzek=cegJegyzek;
//     }

//     kapcsolat(ez){
//         this.kapcsolat=ez;
//     }
//     kapcsolatLek(){
//        console.log(this.kapcsolat)
//     }
//     szekHelye(szekHely){
//         this.szekHely=szekHely;
//     }
//     szekLek(){
//         console.log(this.szekHely)
//     }
// }

// let ceg= new Company("Szar",2,"nemtomidemikene")

// ceg.kapcsolat("Medard Molnar");
// ceg.kapcsolatLek();
// ceg.szekHelye("Anyad háza mellett");
// ceg.szekLek()
// console.log(ceg)


// class math {
//     constructor(num1, num2) {
//         this.num1 = num1;
//         this.num2 = num2;
//     }

//     min() {
//         if (this.num1 < this.num2) return this.num1;
//         else if (this.num2 < this.num1) return this.num2

//     }
//     max() {
//         if (this.num1 > this.num2) return this.num1;
//         else if (this.num2 > this.num1) return this.num2

//     }
//     average(arr){
//         let sum=0;
//         for(let i=0;i<arr.length;++i){
//             sum +=arr[i]
//         }
//         return sum/arr.length
//     }
//     isNum(num){
//         if(!isNaN(num)){
//             return null
//         }
//     }
// }
// class mathThatWouldMakeSense{
//     constructor(arr){
//         this.arr=arr
//     }

//     max(){
//         let currentMax=0;
//         for(let i=0;i<this.arr.length;++i){
//             if(this.arr[i]>currentMax)currentMax=this.arr[i]
//         }
//         return currentMax;
//     }
//     min(){
//         let currentMin=Infinity;
//         for(let i=0;i<this.arr.length;++i){
//             if(this.arr[i]<currentMin)currentMin=this.arr[i]
//         }
//         return currentMin;
//     }

// }



// let arr=[0.5,1,2,3,5,6,78,89,9,12]

// // let mat = new math(10, 6)
// let senseMat=new mathThatWouldMakeSense(arr)
// // console.log(mat.max())
// // console.log(mat.min())
// console.log(senseMat.max())
// console.log(senseMat.min())

// class Person {
//     #name;
//     #age;
//     constructor(age, name) {
//         this.#age = age;
//         this.#name = name;
//     }

//     get getName() {
//         return this.#name
//     }


//     set getName(name) {
//         this.#name = name;
//     }

//     get getAge() {
//         return this.#age;
//     }


//     set setAge(age) {
//         this.#age = age;
//     }

//     toString(){
//         return `Name:${this.#name} age:${this.#age}`
//     }
// }

// let me = new Person("Medard", 26)
// me.getAge=50;
// console.log(me)

// class Employee extends Person{
//     constructor(name,age,assignedTo){
//         super(age,name)
//         this.assignedTo=assignedTo
//     }

//     toString(){   
//         let string=`Name:${this.getName} age:${this.getAge} assigned to:${this.assignedTo}`
//         return string;
//     }
// }
// let employee=new Employee("Medard",26,"Programmer")
// console.log(employee)
// console.log(employee.toString())


// let arr = [1, 34, 45, 66, 7, 8, 8679, 789, 121]
// let arr2 = [12, 34, 415, 66, 7, 8, 86179, 789, 121]

// function randomElem(arr) {
//     let ret = Math.floor(Math.random() * arr.length)

//     return arr[ret];
// }

// console.log(randomElem(arr))


// function kozosElem(arr1, arr2) {

//     let kozos = []
//     for (let i = 0; i < arr1.length; ++i) {        
//         for (let j = 0; j < arr2.length; ++j) {
//             if (arr1[i] == arr2[j]) kozos.push(arr[i])
//         }
//     }
//     return kozos;
// }

// console.log(kozosElem(arr, arr2))


// let asd = prompt("Add meg az átváltandó byte mennyiséget")

// function exchange(asd) {
//     let obj = {};
//     obj.byte = asd;
//     obj.kilobyte=asd/1024
//     obj.bit = 8 * asd;
//     obj.mb = asd * 0.000001;
//     obj.gb =asd*0.000001/1024

//     return obj
// }


// console.log(exchange(asd))



// let obj1 = {
//     a: 1,
//     b: 2,

// }
// let obj2 = {
//     b: 1,
//     a: 2,

// }



// function compareObj(obj1,obj2){
//     let obj1Key=Object.keys(obj1)
//     let obj2Key=Object.keys(obj2)
//     let igaze
//     if(obj1Key.length!==obj2Key.length) return false
//     for(let i=0;i<obj1Key.length;++i){
//         if(obj1Key[i]==obj2Key[i]) igaze=true

//         else return false
//     }

// return igaze
// }

// function compareObj(obj1,obj2){
//     let key=Object.keys(obj1)
//     if(key.length !==Object.keys(obj2).length) return false

//     for(let i=0;i<key.length;++i){
//         if(!obj2.hasOwnProperty(key[i])) return false
//     }
//     return true
// }



// console.log(compareObj(obj1, obj2))

// class Counter {
//     constructor(num, numTobe, canBelow) {
//         this.num = num;
//         this.numTobe = numTobe
//         this.canBelow = canBelow

//         if (typeof this.numTobe == "undefined") this.numTobe = 1;

//     }

//     incrementer() {
//         // return ++this.num
//         if (this.canBelow == false && this.num < 0) return null
//         else {
//             this.num += this.numTobe
//             return this.num
//         }

//     }
//     decrementer() {
//         if (this.canBelow == false && this.num < 0) return null
//         else {
//             this.num -= this.numTobe
//             return this.num
//         }
//         // return --this.num
//     }

//     get myNum() {
//         return this.num
//     }
//     set myNum(numb) {
//         this.num = numb;
//     }
// }

// let newCount = new Counter(0, 3, true)


// console.log(newCount.decrementer())
// console.log(newCount.decrementer())


// newCount.incrementer()
// newCount.incrementer()
// newCount.incrementer()
// newCount.incrementer()
// console.log(newCount)

// console.log(newCount.decrementer())
// console.log(newCount.decrementer())
// console.log(newCount.decrementer())
// console.log(newCount.decrementer())
// console.log(newCount.decrementer())
// // console.log(newCount.myNum)



// class URLhistory {
//     array = [];
//     i = 0;
//     constructor(url) {
//         this.array.push(url);

//     }

//     go(url) {
//         this.array.push(url);
//         this.i++
//     }

//     back() {

//         if (this.i < 0) return "No more urls to go back to" + " " + this.i
//         this.i--

//         if (typeof this.array[this.i] == 'undefined') return "No more urls to go back to" + " " + this.i

//         return this.array[this.i] + " " + this.i


//     }

//     reset() {

//         this.array = [];
//     }
//     forward() {



//         if (this.i > this.array.length - 2) return "No more urls to go forward to" + " " + this.i
//         this.i++


//         return this.array[this.i] + " " + this.i

//     }

// }

// let newURL = new URLhistory("www.anyad.hu")

// newURL.go("www.google.hu")
// newURL.go("www.ibm.hu")
// newURL.go("www.asd1.hu")
// newURL.go("www.asd2.hu")

// let index = 4;
// let fwd = -1;

// debugger;
// console.log(--index, newURL.back())
// console.log(--index, newURL.back())
// console.log(--index, newURL.back())
// console.log(--index, newURL.back())
// console.log(--index, newURL.back())
// console.log(--index, newURL.back())
// console.log(--index, newURL.back())
// console.log(--index, newURL.back())
// console.log(--index, newURL.back())

// console.log(++fwd, newURL.forward())
// console.log(++fwd, newURL.forward())
// console.log(++fwd, newURL.forward())
// console.log(++fwd, newURL.forward())
// console.log(++fwd, newURL.forward())
// console.log(++fwd, newURL.forward())
// console.log(++fwd, newURL.forward())
// console.log(++fwd, newURL.forward())

// console.log(--index, newURL.back())
// console.log(--index, newURL.back())
// console.log(--index, newURL.back())

// console.log(newURL.back())
// console.log(newURL.back())
// console.log(newURL.back())
// console.log(newURL.back())
// console.log(newURL.back())
// console.log(newURL.back())
// console.log(newURL.back())
// console.log(newURL.back())
// console.log(newURL.forward())
// console.log(newURL.forward())
// console.log(newURL.forward())
// console.log(newURL.forward())
// console.log(newURL.forward())
// console.log(newURL.forward())
// console.log(newURL.forward())
// console.log(newURL.forward())
// console.log(newURL.forward())
// console.log(newURL.forward())
// console.log(newURL.forward())
// console.log(newURL.forward())
// console.log(newURL.forward())
// console.log(newURL.forward())



// class Phone {
//     constructor(cpu, ram, size, manufacturer) {
//         this.cpu = cpu;
//         this.ram = ram;
//         this.size = size;
//         this.manufacturer = manufacturer;
//     }

//     getHeadPhones() {
//         this.headPhones = true;
//     }
//     getCase() {
//         this.case = true;
//     }

//     setPhoneServive(service) {
//         if (service == "Vodafone" || service == "Telekom" || service == "Telenor" || service == "Independent") this.phoneService=service
//         else return "Not a valid service"
//     }



// }


// class Android extends Phone {
//     constructor(frameWorkVersion,cpu, ram, size, manufacturer) {
//         super(cpu, ram, size, manufacturer)
//         this.frameWorkVersion = frameWorkVersion
//     }
// }


// class Apple extends Phone {
//     constructor(appleId,cpu, ram, size, manufacturer) {
//         super(cpu, ram, size, manufacturer)
//         this.appleId = appleId;
//     }
// }



// let samsung = new Android("vanilla","snapdragon", "8gb", "8 inch", "samsung" )

// samsung.getHeadPhones()
// samsung.setPhoneServive("Vodafone")

// console.log(samsung)