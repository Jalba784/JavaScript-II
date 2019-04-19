// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let jedi = "Qui-Gon Jinn";
function jediMaster() {
    let jediPadawan = "Obi-Wan Kenobi";
    console.log(`${jedi} was ${jediPadawan}'s master`);
    function padawan() {
        let jediYoungling = "Anakin Skywalker";
        console.log(`${jediPadawan} was ${jediYoungling}'s master `);
        function youngling() {
            console.log(`${jediYoungling} became Darth Vader`);
        }
        youngling();
    }
    padawan();
}
jediMaster();
/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
    let count = 0;
    return () => {
        count++;
        return count;
    };
};
const newCounter = counter();
newCounter(); // 1
newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
    // Return an object that has two methods called `increment` and `decrement`.
    // `increment` should increment a counter variable in closure scope and return it.
    // `decrement` should decrement the counter variable and return it.
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count
    };
};