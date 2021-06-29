// // FOR Loops
// let i = 0, sum = 0;
// while (i < 6) {
//     sum = sum + i;
//     i++;
//     console.log(i);
// }
// console.log(` Total is: ${sum}`);





// Do While

// let i = 5, sum = 0;
// do{
//     sum +=i ;   

// } while (i<5); 
// console.log(sum);


// 3. For loops
// for (let i = 3; i < 8; i++) {
// console.log("i", i);
// }




// let counter = 0;
// for (let i = 1; i <= 50; i++) {
//     // console.log("i", i);
//     counter = counter + i
// }
// console.log(counter);



// let brand ="Clarusway";  duz yazdirma 
// for (let i = 0; i < brand.length; i++) {
//     console.log(i,brand[i])
// }



// let brand = "Clarusway"      tersten yazdirma 
// for(let i = 0; i < brand.length ; i++ ){
//     console.log(`${i+1}: ${brand[i]}, ${brand.length-(i)}: ${brand[brand.length-(i+1)]}`)
// }



// let brand = "Clarusway"     tersten yazdirma  
// for(let i = 0 , j = brand.length; i < brand.length ; i++, j-- ){
//    console.log(i + 1, brand[i], j, brand[j-1]);
// }



// let bests= ["clarusway", "google", "amazon", "tesla"]; siralama yaptik
// for (i = 0; i< bests.length; i++){
//     document.write("<h1>", i+1, ":", bests[i],"</h1>");
// }




// let i = 0;
// while (i < 10) {
//     if (i % 3 === 0){
//         console.log(i);
//         // break;
//     }
//     i++;
// }





// let i = 0;
// while (i < 10) {
//     if (!(i % 3 === 0)){
//         console.log(i);
//         // break;
//     }
//     i++;
// }



// let i = 0;
// while (i < 10) {
//     i++;
//     if (i % 3 === 0){
//         continue;    
//     }
//     console.log(i);
// }


// let i = 0;
// while (i<= 10) {
//     if (!(i % 3 === 0) || i ===0){
//         console.log(i);
//     }
//     i++;
// }


// let i = 0;
// for (i = 0; i < 7; i++){
//     if(i === 2 || i === 4){
//         continue;
//     } 
//     console.log(i);
// }

// let text = 'Clarusway';  tersten clarusway yazdirma
// for (i=0; i<text.length; i++){
//     console.log(text[text.length -(i+1)]);
// }


// let text = "Clarusway"           tersten clarusway yazdirma
// let inverse=''
// for (let i = text.length; i > 0; i--){
//     inverse += text[i-1]
//     console.log(inverse)
// }


// for (let i=0; i<=10; i++){
//     console.log("next");
//     for (let j=0; j<=10; j++){
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// } 



// const number = [13, 34, 24, 67, 23, 90];
// let total = 0;
// for(let i = 0; i<number.length; i++){
//     total = total + number[i];
// }
// console.log(total);



// let c = parseInt(prompt("Bir tam sayı giriniz:"))
// let sonuc = 1;
// for (let d = 1; d <= c; d++){
//     sonuc = sonuc * d;
// }
// console.log(`Girdiğiniz ${c} sayısının faktöriyel değeri ${sonuc} sayısıdır`);


for (let i = 0; i<=100; i++){
    if(i % 15 === 0){
        console.log(i ,"{Fizzbuzz}");
    }else if(i % 3 === 0){
        console.log(i ,"{Fizz}");
    }else if(i % 5 ===0){
        console.log(i, "{Buzz}");
    }else{
        console.log(i);
    }
}