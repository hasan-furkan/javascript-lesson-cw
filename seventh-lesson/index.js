// const multi = (x) => x**5;
// console.log(multi(2));

// function add100(a) {
//     return a +100;
// }
// console.log(add100(1));

// const arrow = (a) =>{
//     return a + 100;
// }
// console.log(arrow(1));

// const be = (a) => a + 100;

// console.log(be(2));

// const ce = a => a + 100;

// console.log(ce(3));



// const user = 'Mark'
// const sayHi = (user = "New User") => `Welcome ${user}`
// console.log(sayHi())
// console.log(sayHi(user));
// console.log(sayHi("Hasan"));



// const div = (num1, num2) => num1/num2; 
// console.log(div(10,2));



// const div = (num1, num2) =>{
//     if (num2 === 0){
//         console.log("error");
//     }
//     return num1/num2
// }
// console.log(div(10,0));


// const div = (num1,num2) => num2 === 0 ? "zero division error!" : num1/2
// console.log(div(10,0));



// const calcArea = radius => 3.14 * radius **2
// console.log(calcArea(5));


/// this method


// const cat = {
//     name: 'Muezza',
//     age: 8,
//     whatName() {
//         return this.name
//     }
// };
// console.log(cat.whatName()); 



// Object Return

// const car = () => {make: "BMW"}
// console.log(car());
// const car = () => ({make: "BMW"})
// console.log(car());


// const iief = (num =>num +5)(100)
// console.log(iief);


// var str1 = "Hello";
// var str2 = "World";
// var str3 = "Hello World";
// var str4 = new String("A string Object");

// console.log(typeof str1);
// console.log(typeof str2);
// console.log(typeof str3);
// console.log(typeof str4);
// console.log(str4);
// console.log(str3);

// console.log("Hello Merhaba".length);
// console.log(str1.length);
// console.log(str3.length);
// console.log(str4.length);

// var total = str1.concat(str2)
// console.log({total});
// console.log({str1});
// console.log({str2});



// charAt() methodu
// var a = "primitive. \nlerin properti veya metodu olmaz"
// console.log(a);
// console.log(a.charAt(0));
// console.log(a.charAt(8));
// console.log(a.charAt(9));
// console.log(a.charAt(10));
// console.log(a.charAt(11));
// console.log(a.charAt());
// console.log(a.charAt(a.length-1));
// console.log("Hello World".charAt(6));


// includes
// var str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
// console.log(str.includes("simply"));
// console.log(str.includes("Simply")); Case Sensitive

// indexof
// var str = "Lorem Ipsum is simply dummy text of simply printing and typesetting industry.";
// var n = str.indexOf("simply");
// console.log(n);
// var n = str.indexOf("x");
// console.log(n);
// var n = str.indexOf("xx");
// console.log(n);


//lastindexoff
// var str = "Lorem Ipsum is simply dummy text of simply printing and typesetting industry.";
// console.log(str.length);
// console.log(str.lastIndexOf("t"));

// var str = "Lorem Ipsum is simply dummy text of simply printing and typesetting industry.";
// var rep = str.replace("printing", "Replace method")
// console.log(rep);

//search() method
// var str = "Lorem Ipsum is simply dummy text of simply printing and typesetting industry.";
// console.log(str.search("simply"));
// console.log(str.search("Simply"));
// console.log(str.search(/Simply/i));

//slice()
// var str = "Lorem Ipsum is simply dummy text of simply printing and typesetting industry.";
// console.log(str.slice(13,21));
// console.log(str.slice(13));
// console.log(str.slice(13,-10));

//split()
// var str = "Lorem Ipsum is simply dummy text of simply printing and typesetting industry.";
// var arr = str.split("e")
// console.log(arr);


//substr()
// var str = "Lorem Ipsum is simply dummy text of simply printing and typesetting industry.";
// console.log(str.substr(22,10));
// console.log(str.length);
// console.log(str.substr(65,5));


//substring() method
// var str = "Lorem Ipsum is simply dummy text of simply printing and typesetting industry.";
// console.log(str.substring(67));

//toLowerCase() Method
// var pangram = "pijamalı hasta yağız şoföre çabucak güvendi"
// console.log(pangram.toLowerCase());
// console.log(pangram.toUpperCase());
// console.log(pangram.toLocaleLowerCase());
// console.log(pangram.toLocaleUpperCase()); 
// Browser dili ing ise fakat sen tr icin yapiyorsan tr-TR seklinde yapman gerek
// console.log(pangram.toLocaleUpperCase(tr-TR)); 


// trim() Method
// var s = "                 <-Welcome \t to Clarus\tway->                 "
// console.log(s);
// console.log(s.trim());