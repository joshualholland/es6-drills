let favMovie = (name = 'World', movie = 'The Room') => console.log(`My name is ${name} and my favorite movie is ${movie}`);
favMovie('Josh', 'The Grand Budapest Hotel');

// let getFirstName = fName => {
//     console.log(fName)
// };

// ShortHand
let getFirstName = fName => console.log(fName);


let myName = 'Josh Holland'
let fName = myName.split(' ');
getFirstName(fName[0]);

// multiplication function
let mathFunction = (x, y) => ({ 
    x,
    y,
    power: (Math.pow(x, y)), 
    multiplication: x * y});
let value = mathFunction(3, 5);
console.log(`exponent result: ${value.power}, multiplication result: ${value.multiplication}`);

// spread syntax
let nlf = (name, location, food) => {
    console.log(name, location, food);
};
let array = ['Josh', 'Bham', 'tacos'];
nlf(...array);

// Loop and spread string function
let spreadWord = word => {
    let spread = [...word]
    for (i=0;i<word.length;i++) {
        console.log(spread[i])
    }
};

spreadWord('Halloween');
