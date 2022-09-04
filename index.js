
buttonColor=["red","blue","green","yellow"];
gamePattern=[];

    function nextSequence(){
        var n = Math.random();
        n = n*4;
        var randomNumber = Math.floor(n);
        var randomChosenColor;
        randomChosenColor = buttonColor[randomNumber];
        gamePattern.push(randomChosenColor);
        console.log(gamePattern);
    }
    document.querySelectorAll("btn")[i].clicking(function(randomChosenColor)
    {
        $("btn")[i].fadeIn().fadeOut()

    });




     









    
























