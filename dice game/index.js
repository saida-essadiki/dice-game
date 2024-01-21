
var randomNumber1;
randomNumber1 =  Math.floor(Math.random()*6) +1;
var randomNumber2 =  Math.floor(Math.random()*6) +1;
var link1 = "images/dice"+ randomNumber1 + ".png";
var link2 = "images/dice"+ randomNumber2 + ".png";
var image1 = document.getElementById("dice1");
var image2 = document.getElementById("dice2");


    image1.setAttribute("src", link1);

    image2.setAttribute("src", link2);

if (randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "<h1>🚩 player 1 wins</h1>";
}
else if (randomNumber1 < randomNumber2)
{
     document.querySelector("h1").innerHTML = "<h1>🚩 player 2 wins</h1>";
}
else
{
 document.querySelector("h1").innerHTML = "<h1>draw!</h1>";
}