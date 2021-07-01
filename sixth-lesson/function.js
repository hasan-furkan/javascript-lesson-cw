// function hello() {
//     console.log("Hello World");
// }
// hello()

// function sum(a,b) {
//     console.log(a+b);
// }
// sum(5,6)

// function sum(a,b) {
//     return (a+b);
// }
// console.log(sum(10,5));


// function sum(a,b) {
//     return (a+b);
// }
// sum(12,4)
// let toplam = sum(12,4)
// console.log("Result :", toplam);
// console.log(sum(13,5)+5);


// function sum(a,b) {
//     return ("selam");
// }
// console.log(typeof sum());


// function sum() {
//     // return ("selam");
//     console.log("selam");
// }
// console.log(typeof sum());

// function addTwo(number) {
//     return +number /2      /* number onundeki + ile gelen stringi number olarak ceviyoruz */
// }
// console.log(addTwo("40"));



// selam("Mark")
// function hi(name= "New User") {
//     console.log(`Hello ${name}`);
// }
// hi("Edward")
// hi("Hasan")
// hi()
// hi("Yunus")

// function sayHi(myName) {
//     console.log(`Hello ${myName}`);
//     myName = "Ed"
//     console.log(`Hello ${myName}`);
// }
// let myName = "Mark";
// sayHi(myName)
// console.log("Outside function", myName );


// let student = {};
// student.name = "Mark"
// function sayHi2(student) {
//     console.log(`hello ${student.name} entry point`);
//     student.name = "John";
//     console.log(`hello ${student.name} first point`);
//     student= {name : "Leon"};
//     console.log(`hello ${student.name} inside function`);
// }
// sayHi2(student);
// console.log(`hello ${student.name} from outside`);


// function div(num1,num2) {
//     // console.log(num1/num2); 
//     if(num2 === 0) return ("enter a positive number pls");   
//     return (num1/num2);
// }
// console.log(div(12,3));

// function div2(num1, num2) {
//     return num2 ? num1 / num2 : "Zero Division Error"
// }
// console.log(div2(18,6));



// function div(num1, num2){
//   return (num2 === 0) ? ("zero division error") : (num1/ num2)
// }
// console.log(div(18,0));


// function sum(...args) {
//     let total = 0;
//     for(let i = 0; i< arguments.length; i++){
//         total +=arguments[i] 
//     }
//     return (total)
// }
// console.log(sum(1,2,3,4,5,12321));


// function sum2(a, b, ...args) {
//     console.log(args);
//     console.log(arguments);
//     return a + b
// }
// console.log(sum2(1,2,3,4,5));



// function sayHi1() {
//     return "Hello from sayhi1"
// }
// console.log(sayHi1());

// const sayHi2 = function greet(){
//     return "Hello from sayhi2"
// }
// console.log(sayHi2());

// console.log(greet()); deger olarak tanimlandiginda gelir ama su an isim 



// const sayHi2 = function(a,b){
//     return a+b
// }

// console.log(sayHi2(2,3));



// const pascalNumber = function total (n){
//     if(n===1) return 1;
//     return n+ total(n-1)
// }
// console.log(pascalNumber(1000));



// const pascalNumber = function total (n){
//     if(n===1) return 1;
//     return n+ total(n-1)
// }
// console.log(pascalNumber(1000));
// console.log(typeof pascalNumber);


// let result =(function triangle(num){
//     if(num === 1) return 1;
//     return num+ triangle(num-1);
//     })(4);
// console.log(result);
// result()

(function (n){
    var sum = 0;
    while (n>=0){
        sum += n;
        n--;
    }
    console.log(`result:`, sum);
})(4);