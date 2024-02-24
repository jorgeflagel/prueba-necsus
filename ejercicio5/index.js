function max(numberArray) {
    if(!Array.isArray(numberArray)) {
        throw "The argument must be an array of numbers."
    }
    if(numberArray.length === 0) {
        throw "The array must contain at least one number."
    }
    let result = numberArray[0];
    for(let number in numberArray) {
        if(typeof number !== "number") {
            throw "The elements in the array must be numbers.";
        }  
        if(number > result) {
            result = number;
        }
    }
    return result;
}

function testMaxFunction() {
    assertThrows(max, 17, "The argument must be an array of numbers.")
    assertThrows(max, [], "The array must contain at least one number.");
    assertThrows(max, [2, 5, "not a number"], "The elements in the array must be numbers.");

    console.assert([2, 5, 6], 6);
    console.assert([-2, 8, 6], 8);
    console.assert([-2, 8.7, 6.3], 8.7);

}

function assertThrows(func, argument, message) {
    try{
        let result = func(argument);
        console.error(`The function with argument '${argument}' must throw error. Instead it return ${result}`)
    } catch(e) {
        console.assert(e === message, `The function with argument '${argument}' must throw the error message '${message}'. Instead it throws ${e}`)
    }
}

testMaxFunction();
