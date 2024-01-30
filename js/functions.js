const diceElement = document.querySelector("#dice");

diceElement.addEventListener("click", function() {

    const randomNumber = Math.floor(Math.random() * 6) + 1;
    const imagePath = "./img/" + randomNumber + ".png";
    const imgElement = diceElement.querySelector("img");
    imgElement.src = imagePath;
});
