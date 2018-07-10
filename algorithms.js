// //Numbers
// /*
// Loop over the following array, showing each element, and ask the user if he wants to continue.
// Continue looping until the user stops you!
// Loop the array again and again if needed

// var array = ["first", "second", "third" , "last"];

// */
// //solution:
// let arrayString = ["first", "second", "third", "last"];
// let flag = true;
// let i = 0;
// while (flag) {
//     console.log(arrayString[i]);
//     okOrCancel = confirm("Do you want to continue?\nPress OK or Cancel.");
//     if (okOrCancel) {
//         // console.log(arrayString[i + 1]);
//         i = (i + 1) % arrayString.length;
//     }
//     else {
//         flag = false;
//     }
// }


// //Swap Two Number Variables Without Using a Temp Variable.
// /*
// didn't know how to do
// */
// //solution:
// var a = 10, b = 20;

// a = a + b;
// b = a - b;
// a = a - b;

// console.log("a = " + a + ", b = " + b); // a = 20, b = 10

// //Swap Two String Variables Without Using a Temp Variable.
// /*
// didn't know how to do
// */
// //solution:
// let i = "hello"
// let j = "goodbye"
// i = j + i
// j = i.slice(j.length);
// i = i.substr(0, i.length - j.length)
// console.log(i); //goodbye
// console.log(j); //hello

// //------------------------------------------------------------------------------------------
// //Loops
// /*
// Create a variable N with a randomized number in it (you can use the 'Math.random' ,
// or just request an input from the user)
// Print in console view a sequence of N lines, each line consisting of a string of "*"'s according to the line number.
// */
// let starNumber = prompt("please enter a number:")
// console.log("For N =  " + starNumber + ":");
// for (let i = 1; i <= starNumber; i++) {
//     for (let j = 0; j < i; j++) {
//         console.log("*");
//     }
//     console.log("\n");
// }

// //reverse star
// let reverseStar = prompt("Enter a number");
// for (let i = reverseStar; i > 0; i--) {
//     for (let j = 0; j < i; j++) {
//         console.log("*");
//     }
//     console.log("\n");
// }

// //-------------------------------------------------------------------------------------------
// //Strings
// /*
// REVERSE
// Write some code that takes a string and reverses it:
// */
// function reverse(str) {

//     let reversedStr = ''
//     //more code..or not - it's possible to do this in one line ;)
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversedStr += str[i];
//     }
//     return reversedStr;
// }

// let dog = reverse("dog"); //should return "god"
// console.log(dog);
// let car = reverse("race car"); //should return "rac ecar"
// console.log(car);


// //PALINDROME
// //Write another function that checks if a string is a palindrome. It should return true if it is, false otherwise.
// function checkPalindrome(str) {
//     let pali;
//     for (let i = 0, j = str.length; i <= j; i++ , j--) {
//         if (str[i] != str[j]) {
//             pali = false;
//         }
//         else {
//             pali = true;
//         }
//     }

//     if (pali) {
//         console.log("false");
//     }
//     else {
//         console.log("true");
//     }
// }

// let str = prompt("Enter a string\nI will tell you if it's Palindrome");
// checkPalindrome(str);

// //SIMPLE CIPHER!
// //Given a string, encrypt it.
// //For example: let's say I want to encrypt the word "cat".
// //An easy way would be to just 'shift' every letter by one to the right, so: "cat" becomes "dbu" when encrypted.
// // Write a function that takes a string and returns an encrypted version in this simple fashion.

// function encryptStr(str) {//with array
//     let afterEncrypted = [];
//     for (let i = 0; i < str.length; i++) {
//         //charCodeAt() -> Return the Unicode of the characteres
//         afterEncrypted[i] = str.charCodeAt(i) + 1;
//         console.log(afterEncrypted[i]);
//         //fromCharCode() -> converts Unicode values into characters
//         afterEncrypted[i] = String.fromCharCode(afterEncrypted[i]);
//         console.log(afterEncrypted[i]);
//     }
//     console.log(afterEncrypted);
// }

// function encryptStr(str) {//with string
//     let afterEncrypted = "";
//     let temp;
//     for (let i = 0; i < str.length; i++) {
//         //charCodeAt() -> Return the Unicode of the characteres
//         temp = str.charCodeAt(i) + 1;
//         //console.log(temp);
//         //fromCharCode() -> converts Unicode values into characters
//         temp = String.fromCharCode(temp);
//         //console.log(temp);
//         afterEncrypted += temp;
//     }
//     //console.log(afterEncrypted);
//     return afterEncrypted;
// }

// let strEncrypt = prompt("Enter a string\nI will encrypt it");
// let wordEncrypted = encryptStr(strEncrypt);
// console.log(wordEncrypted);

// //DECRYPTION!
// //write a function that decrypts what you've encrypted
// function decryptStr(str) {
//     let afterDecryptes = "";
//     let temp;
//     for (let i = 0; i < str.length; i++) {
//         //charCodeAt() -> Return the Unicode of the characteres
//         temp = str.charCodeAt(i) - 1;
//         //console.log(temp);
//         //fromCharCode() -> converts Unicode values into characters
//         temp = String.fromCharCode(temp);
//         //console.log(temp);
//         afterDecryptes += temp;
//     }
//     //console.log(afterEncrypted);
//     return afterDecryptes;
// }
// let wordDecrypt = decryptStr(str);
// console.log(wordDecrypt);

// //-------------------------------------------------------------------------------------
// //Arrays
// /*
// DUPES
// Given an array, return a new array that removes any duplicates, so:

// let animals = ["dog", "cat", "camel", "bee", "dog", "elephant", "dolphin"]

// becomes

// ["dog", "cat", "camel", "bee", "elephant", "dolphin"]

// Try to do so with an O(n) algorithm!
// */
// function removeDupes(str) {
//     let len = str.length
//     let newAnimals = []
//     for (let i = 0; i < len; i++) {
//         newAnimals.push(str[i]);
//         console.log(newAnimals);
//         for (let j = 1; j < len; j++) {
//             if (str[i] === str[j]) {
//                 str.splice(str[j], 1);
//                 len--;
//             }
//         }//for_j
//     }//for_i
//     console.log(newAnimals);
// }
// let animals = ["dog", "cat", "camel", "bee", "dog", "elephant", "dolphin"];
// removeDupes(animals);//don't work well


// //JUMBLED
// //Given two arrays, return one array that includes all of the elements of both arrays,
// //in a randomized order. For example:

// let colors = ["red", "indigo", "white", "teal", "yellow"]
// let foods = ["bread", "cheese", "cucumber"]
// /*
// didn't know how to do
// */
// let mixed = []

// function mix() {
//     let randColorInt = Math.floor(Math.random() * colors.length)
//     let randFoodInt = Math.floor(Math.random() * foods.length)

//     let addColor = Math.round(Math.random())

//     if (addColor && colors.length) {
//         mixed.push(colors[randColorInt])
//         colors.splice(randColorInt, 1)
//     }
//     else {
//         if (foods.length) {
//             mixed.push(foods[randFoodInt])
//             foods.splice(randFoodInt, 1)
//         }
//     }
// }

// while (colors.length || foods.length) {
//     mix()
// }

/*
Try to write your own code that sorts an array (whatever kind you want).
Do not use 'array.sort' and don't try to get the code from the internet.
Send me your responses when you're done :).
There are many ways to sort arrays and there is always a better way,
so try to refactor until your code is less than O(N²).
*/

// function sortMyArray(arr) {
//     console.log("This is the OLD array: " + arr);
//     let temp = 0
//     let arrLength = arr.length;

//     //let sortArray = arr; point to the same place in memory- not good
//     //let sortArray = [];

//     while (arrLength > 0) {
//         //pass on couple numbers and search for the biggest number in the array
//         for (let i = 0; i < arrLength; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 temp = arr[i];
//                 arr[i] = arr[i + 1];
//                 arr[i + 1] = temp;
//             }
//         }//for_i
//         arrLength--;//after 1 iteration big number will be in the end off the array

//         //sortArray.push(temp); //push() func adds the element at the end
//         //arr.splice(arr[index], 1);//use splice() to remove elements from the array
//         console.log(arr);

//     }
//     console.log("This is the NEW array: " + arr);
// }

// let myArr = [2, 5, 1, 6, 3];
// sortMyArray(myArr); //Passed by Reference
//Final Exercise
/*
Create a new html page with an input and an "Add" button.
The user should enter a number in the text box (you can add validation to make sure it is a number).
When the user clicks "Add", a box should be added to the screen.
The box's height and width should equal the user's input.
Add a 'sort button' which sorts the boxes on the screen by size when it's clicked.
*/
let $boxes = $('#boxes');
let arrBoxes = []

//add box event
$('.add-box').on('click', function () {
    let inNumber = $('.container').find('#input').val();
    console.log(inNumber);
    createBox(inNumber);
    renderBox();
    $('.container').find('#input').val("");
});

//sort boxes event
$('.add-sort').on('click', function () {
    console.log("you click on Sort boxes")
    sortBoxes(arrBoxes);
    renderBox();
});




function createBox(boxSize) {
    let box = {
        width: boxSize,
        height: boxSize
    }
    arrBoxes.push(box);
}

function renderBox() {
    $boxes.empty();
    //let boxes = document.getElementById('boxes')//getElementById

    for (let k = 0; k < arrBoxes.length; k++) {
        let box = arrBoxes[k];
        //let drawBox = canvas.getContext("2d");
        //drawBox.fillStyle = "#FF0000";
        //drawBox.fillRect(20, 15, box.width, box.height);
        let canvas = document.createElement('div');
        //canv.appendChild(drawBox);
        canvas.className = "box";
        canvas.style.width = box.width + "px";
        //console.log(canvas.style.width);
        canvas.style.height = box.height + "px";
        //console.log(canvas.style.height);

        canvas.style.backgroundColor = "salmon";
        canvas.style.margin = "10px";
        $boxes.append(canvas);
    }

}

function sortBoxes(arr) {
    //somehow if i have the '100' number in the array he think that it's '10'

    let arrLength = arr.length;
    let swapped;

    do {
        swapped = false;
        arrLength--;
        //after 1 iteration big number will be in the end off the array and i dont want to pass arr.length
        for (let i = 0; i < arrLength; i++) {
            if (parseInt(arr[i].width) > parseInt(arr[i + 1].width)) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }//for_i


    }
    while (swapped)//arrLength > 0 &
}