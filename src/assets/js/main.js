let userWins = 0;
let computerWins = 0;
const buttons = document.querySelectorAll("button");
const result_user = document.getElementById("result_user");
const result_pc = document.getElementById("result_pc");
const cont_won_or_lost = document.getElementById("cont_won_or_lost");
const won_or_lost = document.getElementById("won_or_lost");
const userScoreSpan = document.getElementById("userScore");
const computerScoreSpan = document.getElementById("computerScore");

const options = ["Piedra", "Papel", "Tijera"];

function computerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "Empate";
  } else if (
    (userChoice === "Piedra" && computerChoice === "Tijera") ||
    (userChoice === "Papel" && computerChoice === "Piedra") ||
    (userChoice === "Tijera" && computerChoice === "Papel")
  ) {
    userWins++;
    return "¡Ganaste!";
  } else {
    computerWins++;
    return "¡Perdiste!";
  }
}
function ShowResult() {
  cont_won_or_lost.classList.remove("none");
  cont_won_or_lost.classList.add("block");
  setTimeout(() => {
    cont_won_or_lost.classList.remove("block");
    cont_won_or_lost.classList.add("none");
    userScoreSpan.textContent = userWins;
    computerScoreSpan.textContent = computerWins;
  }, 2000);
}

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const userChoice = button.id;
    console.log(userChoice);
    const compChoice = computerChoice();
    console.log(compChoice);
    const result = determineWinner(userChoice, compChoice);
    result_user.innerHTML = `
    <div class="card__result">
      <img
        class="img__result"
        src="./src/assets/img/${userChoice}.png"
        alt="tijeras"
      />
      <h4>${userChoice}</h4>
      </div>
    `;
    result_pc.innerHTML = `
    <div class="card__result">
      <img
        class="img__result"
        src="./src/assets/img/${compChoice}.png"
        alt="tijeras"
      />
      <h4>${compChoice}.</h4>
      </div>`;
    won_or_lost.textContent = result;
    setTimeout(() => {
      result_user.textContent = "";
      result_pc.textContent = "";
      setTimeout(() => {
        ShowResult();
      }, 500);
    }, 1000);
  });
});