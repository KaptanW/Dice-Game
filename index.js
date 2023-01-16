var randomNumber1 = Math.ceil(Math.random() * 6);
console.log(randomNumber1);
var randomNumber2 = Math.ceil(Math.random() * 6);
console.log(randomNumber2);

var randomDiceImage = "dice" + randomNumber1 +".png";
var randomDiceImage2 = "dice" + randomNumber2 +".png";

var randomImageSource = "images/" + randomDiceImage;
var randomImageSource2 = "images/" + randomDiceImage2;

var image1 = document.querySelectorAll("img")[0]

var image2 = document.querySelectorAll("img")[1]

image1.setAttribute("src", randomImageSource);
image2.setAttribute("src", randomImageSource2);




if (randomDiceImage > randomDiceImage2)
{

    document.querySelector("h1").innerHTML = "Winner is Player 1"
}
else if (randomDiceImage === randomDiceImage2)
{
    document.querySelector("h1").innerHTML = "DRAW"
}
else
{
    document.querySelector("h1").innerHTML = "Winner is Player 2"
}
