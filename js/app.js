'use strict';

let sums = 0

let sumAnswer = 'The sum of '

let product = 1

let productAnswer = 'The product of '

let dickAnswer = ''

/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
function sum(a, b) { 

    sums = 0

    sumAnswer = 'The sum of '

    dickAnswer = ''

    for (let i = 0; i < arguments.length; i++) {

        sums += arguments[i]

        if (i != arguments.length -1) {

            sumAnswer += arguments[i] + ' and '

            dickAnswer += arguments[i] + ' and '

        } else {

            sumAnswer += arguments[i] + ' is ' + sums + '.'

            dickAnswer += arguments[i] + ' sum to ' + sums + '.'


        }

    }

    return [sums, sumAnswer]

}

// Here is the test for sum(); uncomment it to run it

testSum(4, 7);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here

function multiply(a, b) { 

    product = 1

    productAnswer = 'The product of '

    for (let i = 0; i < arguments.length; i++) {

        product = product *= arguments[i]

        if (i != arguments.length -1) {

            productAnswer += arguments[i] + ' and '

        } else {

            productAnswer += arguments[i] + ' is ' + product + '.'

        }

    }

    return [product, productAnswer]

}

// Here is the test for multiply(); uncomment it to run it
testMultiply(5,9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here
function sumAndMultiply(a, b, c) { //eslint-disable-line

    let testArray = []

    for (let i = 0; i < arguments.length; i++) {

    testArray.push(arguments[i])

    }

    sum(...testArray)

    multiply(...testArray)

    return [sums, product, dickAnswer, productAnswer]
}

// Here is the test for sumAndMultiply(); uncomment it to run it
 testSumAndMultiply(4,7,5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
let testArray = [2, 3, 4]; //eslint-disable-line

function sumArray(sumArr) { //eslint-disable-line

    sum(...testArray)

    let testString = ''

    for (let i = 0; i < testArray.length; i++) {

        if (i != testArray.length -1) {

            testString += testArray[i] + ','

        } else {

            testString += testArray[i] + ' '

        }

    }

    return[sums,testString + 'was passed in as an array of numbers, and ' + sums + ' is their sum.']

}

// Here is the test for sumArray(); uncomment it to run it

testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. This function should handle an array containing three elements. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(multArr) { //eslint-disable-line

    multiply(...testArray)

    let testString = ''

    for (let i = 0; i < testArray.length; i++) {

        if (i != testArray.length -1) {

            testString += testArray[i] + ','

        } else {

            testString += testArray[i] + ' '

        }

    }

    console.log(product,'The numbers ' + testString + 'have a product of ' + product + '.')

    return[product,'The numbers ' + testString + 'have a product of ' + product + '.']
    
}

// Here is the test for multiplyArray(); uncomment it to run it
 testMultiplyArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here
let testDynamicArray = [1,2,3,4,5]; //eslint-disable-line

function multiplyAnyArray(dynamicArray) { //eslint-disable-line

    multiply(...testDynamicArray)

    let testString = ''

    for (let i = 0; i < testDynamicArray.length; i++) {

        if (i != testDynamicArray.length -1) {

            testString += testDynamicArray[i] + ','

        } else {

            testString += testDynamicArray[i] + ' '

        }

    }

    console.log(product,'The numbers ' + testString + 'have a product of ' + product + '.')

    return[product,'The numbers ' + testString + 'have a product of ' + product + '.']

}

// Here is the test for multiplyArray(); uncomment it to run it
 testMultiplyAnyArray(testDynamicArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.
