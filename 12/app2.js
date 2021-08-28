// // parent class

// class Person{
//     constructor(firstName, lastName, birthYear, employment = ""){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.birthYear = birthYear
//         this.employment = employment
//     }

//     selamla(){
//         console.log(`merhaba ${this.firstName} ${this.lastName}`);
//     }
// }

// // child class

// class Student extends Person{
//     constructor(firstName, lastName, bY){
//         console.log("Initializing student object")
//         super(firstName, lastName, bY ,"Student")
//     }
//     dersCalis(){
//         console.log(`Studying javascript...`)
//     }
// }
// // teacher

// class Teacher extends Person{

// }

// let hfk = new Student("Hasan Furkan", "🛌", 2001)
// hfk.selamla();
// hfk.dersCalis();


// polymorphizm

// parent class

// class Person{
//     constructor(firstName, lastName, birthYear, employment = ""){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.birthYear = birthYear
//         this.employment = employment
//     }

//     selamla(){
//         console.log(`merhaba ${this.firstName} ${this.lastName}`);
//     }
// }

// // child class

// class Student extends Person{
//     constructor(firstName, lastName, bY){
//          super(firstName, lastName, bY)
//     }

//     selamla(){
//         console.log("hello i am a student")
//     }
//     dersCalis(){
//         super.selamla();
//         this.selamla();
//         console.log(`Studying javascript...`)
//     }
// }
// // teacher

// class Teacher extends Person{

// }

// let hfk = new Student("Hasan Furkan", "🛌", 2001)
// hfk.selamla();
// hfk.dersCalis();