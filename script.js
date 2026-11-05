function getComputerChoice() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  let value = getRandomInt(3);
  let ret = "";

  switch (value) {
    case 0:
      ret = "rock";
      break;

    case 1:
      ret = "paper";
      break;

    case 2:
      ret = "scissors";
      break;

    default:
      alert(`How did you get this? Value: ${value}`);
      break;
  }

  return ret;
}

function getHumanChoice() {
  let string = prompt("Enter a move: ", "rock");
  return string.trim().toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function setWinner(player, print) {
    if (player === "human") {
      humanScore++;
      if (print)
        console.log("You won the round!");
    }

    else {
      computerScore++;
      if (print)
        console.log("Computer won the round!");
    }
  }

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.trim().toLowerCase();

    console.log(`${humanChoice} vs ${computerChoice}`)

    if (humanChoice === computerChoice) {
      console.log("Tie!");
      return;
    }

    const print = true;

    switch (humanChoice) {
      case "rock":
        if (computerChoice === "paper")
          setWinner("computer", print)
        else if (computerChoice === "scissors")
          setWinner("human", print)
        break;

      case "paper":
        if (computerChoice === "rock")
          setWinner("human", print)
        else if (computerChoice === "scissors")
          setWinner("computer", print)
        break;

      case "scissors":
        if (computerChoice === "rock")
          setWinner("computer", print)
        else if (computerChoice === "paper")
          setWinner("human", print)
        break;

      default:
        alert("Invalid input");
    }
  }

  for (let i = 0; i < 5; i++) {
    console.log(`Round ${i + 1}`);
    playRound(getHumanChoice(), getComputerChoice());

    console.log(`Your score: ${humanScore}\nComputer score: ${computerScore}`);
  }

  if (humanScore === computerScore)
    console.log("Tied game! Close one...");
  else if (humanScore > computerScore)
    console.log("Congratulations! You won the game.");
  else
    console.log("Aw shucks, the computer won. Next time!");
}

playGame();
