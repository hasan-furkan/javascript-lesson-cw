// const cars = ["Audi", "Opel", "Fiat"]
// console.log(typeof cars);
// console.log(cars);


// const numbers = new Array(2,10)
// console.log(numbers);



// const numbers2 = new Array(10)
// console.log(numbers2);


// const cars = ["Audi", "Opel", "Fiat"]
// console.log("length of car:", cars.length);

// const cars = ["Audi", "Opel", "Fiat"]
// const cars2 = ["BMW", "Ferrari"]
// const cars3 = cars.concat(cars2 , "Mercedes", 2021)
// console.log(cars);
// console.log(cars2);
// console.log(cars3);


// const points = [40, 100, 1, 5, 25, 10];
// console.log(points.sort());
// // points.sort(function(a,b){return a - b});
// console.log(points.sort(function(a,b){return a - b}));


//  Pop ve Push 
// const cars = ["Audi", "Opel", "Fiat"]
// cars.push("Renault")
// console.log(cars);
// cars.pop()
// console.log(cars);


// Shift and Unshift
// const cars = ["Audi", "Opel", "Fiat"]
// const deleted = cars.shift()
// console.log(deleted);
// console.log(cars);

// const added = cars.unshift("Mercedes")
// console.log(cars);
// console.log(added);


// const cars = ["Audi", "Opel", "Fiat"]
// console.log(cars);
// cars[6] = "VW"
// cars.push("Mercedes")
// console.log(cars);
// console.log(cars[3]);

// cars = ["VW"]

// const name = "Mark"
// console.log(name);
// name = "ED"

// Splice

// var names = ["John", "Edward", "Victor"];
// var deleted = names.splice (1,2, "Mark", "James")
// console.log("deleted", deleted);
// console.log("names", names);

// var deleted = names.splice (2,0, "Mark", "James")
// console.log("deleted", deleted);
// console.log("names", names);


// var months = ["Jan", "March", "April", "Jun", "July"]
// console.log(months.slice(1,3));
// console.log(months.slice(1,-2));
// console.log(months.slice(-4,-2));
// console.log(months.slice(-2,-4));
// console.log(months);
// console.log(months.reverse());
// console.log(months);


// indexOf and lastIndexOf
// let colors = ["Red", "Yellow", "Green", "Blue", "Pink", "Green"];
// let x = colors.indexOf("Green", 3);
// console.log(x);

// let fruits = ["Banana", "Orange", "Mango", "Apple", "Mango", "Banana", "Orange", "Apple"];
// let last = fruits.lastIndexOf("Apple",4)
// console.log(last);



//Arraylerde durum
// function test2(testData) {
//     console.log(`inside function before operation ${testData}`);
//     // testData = [2, 4, 6, 8];
//     // testData.push(8)
//     testData.pop()
//     console.log(`inside function after operation ${testData}`);
//   }
//   const arr = [1, 2, 3, 4];
//   test2(arr);
//   console.log(`outside function after operation ${arr}`);


// const arr = [1,2,3,4,5,6,7,8];
// const a = arr[0]
// const b = arr[1]
// const c = arr[2]
// console.log(a,b,c);



// const [x,y,z] = arr;
// console.log(x,y,z);
// console.log(x,typeof x);

// const [t,u,v, ...others] = arr;
// console.log(t,u,v);
// console.log(others);
// console.log(others, typeof others);
// console.log(arr);
// console.log(others, Array.isArray(others));

// const arr = [3,5];
// const [x= 1,y = 1,z = 1] = arr
// console.log(x,y,z);




// let x = 5;
// let y = 10;
// [x, y] = [y, x];
// console.log("x = :",x,"y = :", y);

// forEach and for in and for of method
// const colors = ["Red", "Yellow", "Green", "Blue", "Pink", "Purple", "Gray", "lime"];
// console.log(colors);
// for(let i = 0; i < colors.length; i++){
//     console.log(colors[i]);
// }

// for(i of colors){
//     console.log(i);
// }

// for (let i in colors) console.log(colors[i]);

// colors.forEach(i=>console.log(i));
