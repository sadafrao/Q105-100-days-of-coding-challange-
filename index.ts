// Q105
// this function simulates rolling a dice and return a num between 1 to 6
function rollDice(): number {
    return Math.floor(Math.random() * 6) + 1;
}
console.log(rollDice());