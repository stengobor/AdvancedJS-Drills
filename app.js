
name = "Sophie Engobor";
var name;

console.log(name);


// name2 = "Sophie Engobor";
// let name2;

// console.log(name2);

setName();
function setName() {
    var name = 'Sophie Engobor';
    console.log(name);
}

console.log('some text');
let avg = findAvg(2, 2);
console.log('some text', avg);
function findAvg(a, b) {
    console.log('some text');
    var answer = (a + b) / 2;
    return answer;
}

let fruits = ['banana', 'orange', 'pear'];
let favFruit;

function printFruits() {
    let favFruit = fruits[2];
    console.log(fruits[0]);

function printFavFruit() {
    console.log(favFruit);
}
}

printFruits();
