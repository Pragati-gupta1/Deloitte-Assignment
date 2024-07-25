// reverse array printing
let myArr = [1,2,3,4,5];
console.log("Size of the array : " + myArr.length);
for (let i = 0; i < myArr.length; i++) {
    console.log(myArr.length - i);
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];





// using function sum of even numbers
function sumEvenNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            sum += arr[i];      
        }
    }
    return sum; 
}

console.log(sumEvenNumbers(arr));

// normal for loop without function sum of even numbers
var sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        sum += arr[i];
    }
}
console.log(sum);


// using function sum of odd numbers
function sumOddNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            sum += arr[i];
        }
    }
    return sum;
}
console.log(sumOddNumbers(arr));

// normal for loop without function sum of odd numbers
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
        sum += arr[i];
    }
}
return sum;

// SPLICE Function
let index=2;
let v=10;
arr.splice(index,0,v);
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}