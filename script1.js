// let n = 1;

// while (n <= 50) {
//     if (n % 2 === 0) {
//         console.log(n);

//     }
// n++;

// }

// let n = 1 ;

// while (n<=30) {
//     if (n%3!==0 && n%5!==0) {
//         console.log(n);

//     }

//     n++;
// }

// let n = 1 ;

// while (n<=10) {
//    if (n!=5) {
//     console.log(n);

//    }
//    n++;

// }

// let n = 1 ;

// while (n<=10) {
//    if (n===8) {
//     continue

//    }
//    console.log(n);
//    n++;

// }

// let fruits_price = [10,23,30,40,50]


// for (let index = 0; index < fruits_price.length; index++) {
//    if (fruits_price[index]%2===0) {
//       console.log(fruits_price[index]);
//    }

// }

// let arr = [10,23,30,40,50]
// console.log(arr[3]);

// let arr = [10,23,30,40,50]
// arr.push(60);
// console.log(arr);

// let arr = [10,23,30,40,50]
// arr.pop(50);
// console.log(arr);

// let arr = [10,23,30,40,50]
// arr.shift();
// console.log(arr);

// let arr = [10,23,30,40,50]
// arr.unshift(66);
// console.log(arr);

// let a = [10,23,30,40,50]
// let b = [60,70,89]
// console.log(a.concat(b));

// let num = [3,2,1]
// num.reverse();
// console.log(num);

// let num = [55,65,33,21]
// num.sort();
// console.log(num);

// let a=0;
// let b=1;
// let i=0;

// while (i<=9) {
//    console.log(a)
//     let next = a+b;
//     a=b;
//     b=next;

// i++;

// }

// let arr = [10,20,30,40,50];
// console.log(arr);

// let num = [10,20,30,40,50];
// num.reverse(num);
// console.log(num);

// let num = [10, 20, 30, 40, 50];
// let sum = 0;

// for (let index = 0; index < num.length; index++) {
//     const element = num[index];
//     sum+=element;

// }console.log(sum);

// let a = [11, 20, 33, 40, 52, 67];
// let count = 0;

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];

//     if (element%2===0) {

//         count++;
//     }
// }console.log(count);

// let a = [25, 78, 12, 95, 43];
// let largest = a[0];

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];

//     if (element>largest) {
//         largest = element


//     }

// } console.log(largest);

// let a = [25, 78, 12, 95, 43];
// let smallest = a[0];

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];

//     if (element<smallest) {
//         smallest = element


//     }

// } console.log(smallest);

// let a = [12, 7, 9, 20, 15, 8, 3];
// let count = 0;

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];

//     if (element%2!==0) {

//         count++;
//     }

// }console.log(count);

// let a = [10, 20, 30, 40, 50];


// for (let index = 0; index < a.length; index++) {
//     const element = a[index];

//     if (element===30) {
//         console.log("element found");


//     }

// }

// let a = [10, 35, 40, 15, 60, 20];
// let count = 0;

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];

//     if (element>=25) {

//         count++;
//     }

// }console.log(count);

// let arr = [10, 20, 30, 40, 50];
// let sum = 0;

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];

//     (sum+=element)


// }console.log(sum/arr.length);


// let arr = [10, -5, 0, 20, -8, 0, 7];
// let count = 0;

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];

//     if () {

//     }
// }


// let arr = [10, 50, 30, 80, 60];
// let largest = 0;
// let sec_largest = 0;

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];

//     if (element > largest) {
//         sec_largest=largest;
//         largest = element;

//     }else if (element > sec_largest) {
//         sec_largest = element;
//     }

// } console.log(sec_largest);


// let arr = [10, -5, 0, 20, -8, 0, 7];
// let negative = 0 ;
// let positive = 0 ;
// let zero = 0 ;

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];

//     if (element<0) {
//         negative++;
//     }else if (element>0){
//         positive++;
//     }else {
//         zero++;
//     }


// }console.log("negative=", negative);
// console.log("Positive =", positive);
// console.log("zero =", zero);


// let arr = [-10, 20, -5, 30, 0, 15];
// let positive = 0;

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];

//     if (element>0) {
//         positive++;
//     }
// }console.log( "positive =",  positive);



// let num = [1, 2, 3, 4, 5];
// num.reverse();
// console.log(num);






// let arr = [10, 20, 10, 30, 20, 40];
// let tem = [];

// for (let index = 0; index < arr.length; index++) {
//     for (let j = index + 1; j < arr.length; j++) {

//         if (arr[index] === arr[j]) {
//             console.log(arr[index]);
//             break;
//         }
//     }
// }



// let arr = [10,20,30,50,40,80];
// let largest = [0] ;

// for (let index = 0; index < arr.length; index++) {
//       const element = arr[index];
//     if (element>largest) {
//         largest = element

//     }

// }console.log(largest);


// FUNCTIONS//-------




//  function sum(a,b) {
//     // let a = 10;
//     // let b = 20;
//     console.log(a+b);
    
// }
// sum(10,9)
// sum(19,20)


// let store = function (a,b=22) {
    
//    return a+b;
   

// }
// let  a = store(10)
// console.log(a);


























