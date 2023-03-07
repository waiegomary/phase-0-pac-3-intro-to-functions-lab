function shout(string) { 
    return string.toUpperCase();

}

function logTwoValues(value1, value2) {
    console.log(`The two values are ${value1} and ${value2}.`);
}


function sayHelloTo(firstName = "User") {
    console.log(`Hello, ${firstName}!`);
}
