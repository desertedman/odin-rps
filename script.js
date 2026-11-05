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
  }

  return ret;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let winner = "";

  const print = false;
  function setWinner(player) {
    if (player === "human") {
      winner = "human"
      humanScore++;
      if (print)
        console.log("You won the round!");
    }

    else if (player === "computer") {
      winner = "computer"
      computerScore++;
      if (print)
        console.log("Computer won the round!");
    }

    else if (player === "tie") {
      winner = "tie";
      if (print)
        console.log("Round tied!");
    }
  }

  function playRound(humanChoice, computerChoice) {
    if (print)
      console.log(`${humanChoice} vs ${computerChoice}`)

    if (humanChoice === computerChoice) {
      setWinner("tie");
      return;
    }

    switch (humanChoice) {
      case "rock":
        if (computerChoice === "paper")
          setWinner("computer")
        else if (computerChoice === "scissors")
          setWinner("human")
        break;

      case "paper":
        if (computerChoice === "rock")
          setWinner("human")
        else if (computerChoice === "scissors")
          setWinner("computer")
        break;

      case "scissors":
        if (computerChoice === "rock")
          setWinner("computer")
        else if (computerChoice === "paper")
          setWinner("human")
        break;

      default:
        alert("Invalid input");
    }
  }

  const resultsDiv = document.querySelector("#results");
  const messageLog = document.createElement("p");
  const winnerLog = document.createElement("p");
  const scoreLog = document.createElement("p");
  resultsDiv.appendChild(messageLog);
  resultsDiv.appendChild(winnerLog);
  resultsDiv.appendChild(scoreLog);
  messageLog.textContent = "Ready to play?";

  let rounds = 0;
  let menu = document.querySelector("#choices");
  menu.addEventListener("click", (e) => {
    let id = e.target.id;
    const computerChoice = getComputerChoice();
    playRound(id, computerChoice);

    rounds++;
    const roundCounter = document.querySelector("#rounds");
    roundCounter.textContent = `Round ${rounds + 1}`;

    messageLog.textContent = `${id} vs ${computerChoice}`;
    if (winner === "human")
      winnerLog.textContent = "You won!";
    else if (winner === "computer")
      winnerLog.textContent = "Computer won!";
    else
      winnerLog.textContent = "Round tied!";
    scoreLog.textContent = `Your score: ${humanScore}\nComputer score: ${computerScore}`;

    if (rounds === 5) {
      let msg = "";

      switch (winner) {
        case "human":
          msg = "You won the game!";
          break;
        case "computer":
          msg = "You lost the game!";
          break;
        case "tie":
          msg = "You tied the game!";
          break;
      }

      alert(msg);
      return;
    }
  });
}

playGame();
