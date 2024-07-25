var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImageSrc1 = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImageSrc1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSrc2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSrc2);


if (randomImageSrc1 > randomImageSrc2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins.";
}
else if (randomImageSrc2 > randomImageSrc1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins.";
}
else{
    document.querySelector("h1").innerHTML = "Draw."
}