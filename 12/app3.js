// const person = {
//     firstName : "Matthew",
//     lastName : "Dunn",
//     birthYear : 1980,
//     skills: ["js, java"],
//     employed: true,
//     //  later 
//     2021: "Clarusway",
//     true: "is ist working",
//     calcAgeBad : function(bYear){
//         return 2021- bYear
//     },
//     calcAge: function () {
//         this.age = 2021 - this.birthYear;
//         return this.age;
//     },
// };
// // console.log(person.calcAgeBad(1977))
// // console.log(person.age)
// // console.log(person.calcAge())
// // console.log(person.age)

// const calcAge = function (birthYear) {
//     console.log("Regular function in Global Scope");
//     console.log(this)
//     console.log(2021 - birthYear)
// }
// calcAge(1981);


const teacher = {
    firstName : "Matthew",
    lastName : "Dunn",
    birthYear : 1980,
    skills: ["js, java"],
    employed: true,
    //  later 
    2021: "Clarusway",
    true: "is ist working",}
    calcAgeBad : function(bYear){
        return 2021- bYear
   const calcAge = function (birthYear) {
    console.log("Regular function in object");
    console.log(this)
    console.log(2021 - birthYear)
},
calcAgeArrow: () => {
    console.log("Arrow function in object");
    console.log(this)
    console.log(2021 - birthYear)
},



teacher.calcAge();
teacher.calcAgeArrow();