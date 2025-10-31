// Define fighter for player [rock, paper, scissor] (RPS), by input the number index of the fighter
//     0      1       2
// after input the number, match will begin 3x
// when the match begin, each number that player input will showing the fighter (RPS)
// computer will give random fighter to against the player
// as the rule of RPS, Rock will defeat by paper, paper will defeat by scissor and scissor will defeat by rock
// when computer and palyer have the same fighter they will get draw

const fighter = ["Rock", "Paper", "scissor"];
let userFighter = [];

for (let i = 0; i < fighter.length; i++) {
  console.clear();
  for (let j = 0; j < fighter.length; j++) {
    console.log(`${j + 1}. ${fighter[j]}`);
  }
  // let user choose his fighter
  let inputUser = prompt("Choose your fighter: ");
  userFighter.push(parseInt(inputUser - 1)); // push the user fighter
}

function finalResult() {
  console.clear();
  console.log("=".repeat(21));
  console.log("#".padEnd(3), "Final Result", "#".padStart(4));
  console.log("=".repeat(21));
  console.log(`> Player score:${"".padEnd(2)} ${playerPoint} #`);
  console.log(`> Computer score: ${computerPoint} #`);
  console.log(`> draw score:${"".padEnd(4)} ${draw} #`);
  console.log("=".repeat(21));
  if (playerPoint > computerPoint) {
    console.log("Player is the Champion!!");
  } else if (playerPoint === computerPoint) {
    console.log("".padStart(5), "Draw!!");
  } else {
    console.log("Computer is the Champion!!");
  }
}

// variables match
let i = 0; // counter match
let computerPoint = 0;
let playerPoint = 0;
let draw = 0;

// match begin
const intervalId = setInterval(() => {
  if (i === userFighter.length) {
    clearInterval(intervalId);
    console.clear(); // clear console
    finalResult()
    return;
  } else {
    i++; // increase to show user fighter
  }

  console.clear(); // clear console

  const indexComputer =
    Math.floor(Math.random() * fighter.length) % fighter.length; // generate random number for computer index
  const showPlayerFighter = fighter[userFighter[i - 1]]; // show user fighter
  const showComputerFighter = fighter[indexComputer]; // show computer fighter

  // simple style to show a match
  console.log("=".repeat(21));
  console.log(`${"=".padEnd(5)} Round ${i} ${"=".padStart(6)} `);
  console.log("=".repeat(21));
  console.log(`${"".padEnd(1)}${showPlayerFighter} Vs ${showComputerFighter}`);

  if (showPlayerFighter === showComputerFighter) {
    console.log("".padEnd(5), "Draw!!"); // draw if fighter is the same
    draw++;
  } else if (
    (userFighter[i - 1] === 0 && indexComputer === 2) ||
    (userFighter[i - 1] === 1 && indexComputer === 0) || // basic rulus to get point
    (userFighter[i - 1] === 2 && indexComputer === 1)
  ) {
    console.log(" ".padStart(2), "Player Win!");
    playerPoint++; // Point of player increase if win
  } else {
    console.log(" ".padStart(1), "Computer Win!");
    computerPoint++; // Point of computer increase if win
  }
}, 3000);
