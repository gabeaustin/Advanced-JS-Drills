let fruits = ["strawberries", "banana", "grapes"];
let leastFav;
leastFav = fruits[2];

function printFruits() {
    let favFruit = fruits[2];
    console.log(fruits[0]);

    function printFavFruit() {
        console.log(favFruit);
    }
    console.log(leastFav);
}

someFunc();
function someFunc(){
    console.log("Hello, Gabriel.");
}

anyFunc();
function anyFunc() {
    alert("hello you!");
}

printFruits();
// printFavFruit(); // can no longer call this here


/*
Questions
---------
10. Why was the printFavFruit function able to log favFruit?
Ans. Because favFruit is a global variable.

*/