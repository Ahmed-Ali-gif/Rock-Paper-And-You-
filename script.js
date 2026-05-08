let choices = document.querySelectorAll(".choice");

let userScore = 0;
let computerScore = 0;

let userScoreText = document.querySelector("#user-score");
let computerScoreText = document.querySelector("#computer-score");
let result = document.querySelector("#result");
let computerChoiceText = document.querySelector("#computer-choice");

let options = ["rock", "paper", "scissors"];

choices.forEach((button) => {
  button.addEventListener("click", () => {
    let userChoice = button.dataset.choice;

    let randomIndex = Math.floor(Math.random() * options.length);
    let computerChoice = options[randomIndex];

    computerChoiceText.textContent = `Computer chose: ${computerChoice}`;

    if (userChoice === computerChoice) {
      result.textContent = "It's a Draw";
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      result.textContent = "You Win";
      userScore++;
      userScoreText.textContent = userScore;
    } else {
      result.textContent = "Computer Wins";
      computerScore++;
      computerScoreText.textContent = computerScore;
    }
  });
});
