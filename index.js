function shout(string) { 
    return string.toUpperCase();

}

function logTwoValues(value1, value2) {
    console.log(`The two values are ${value1} and ${value2}.`);
}


function sayHelloTo(firstName = "User") {
    console.log(`Hello, ${firstName}!`);
}


1 + 80; //=> 81
60 - 40; //=> 20
2 * 3.4; //=> 6.8
5.0 / 2.5; //=> 2




number += 3; //=> 8
number -= 2; //=> 6



//reset number
number = 10;

function add5() {
    return (number += 5);
}

function divideBy3() {
    return (number /= 3);
}

divideBy3(); //=> 3.3333333333333335

add5(); //=> 8.333333333333334

// reset number
number = 10;

add5(); //=> 15

divideBy3(); //=> 5

parseInt("2.2222", 10);
