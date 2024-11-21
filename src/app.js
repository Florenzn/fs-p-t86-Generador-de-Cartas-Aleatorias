import "bootstrap";
import "./style.css";

window.onload = () => {
  let generateCard = document.querySelector("#cardGenerator");
  generateCard.addEventListener("click", cartas);
  function cartas() {
    const simboloList = ["♥", "♠", "♦", "♣"];
    const valorList = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    let randomSuit =
      simboloList[Math.floor(Math.random() * simboloList.length)];
    let randomNumber = valorList[Math.floor(Math.random() * valorList.length)];

    document.querySelector("#simboloSup").innerHTML = randomSuit;
    document.querySelector("#valor").innerHTML = randomNumber;
    document.querySelector("#simboloInf").innerHTML = randomSuit;
  }

  cartas();
};
