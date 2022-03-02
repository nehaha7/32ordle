// 32 ordle = duovigentiordle

//green rgb(128,166,108)
//red rgb(221,103,97)
//yellow rgb(242,170,80)

var x;
var tries;

function start()
{
    x = document.getElementById("x=").value;
    if (x == '')
        alert("please enter a # !!");
    else 
    {
        window.location.href='play.html';

        //add x to local storage to use across files
        localStorage.setItem("xordle", x);

        //# of spaces in a wordle is always the x value + 5;
        //i.e. octordle has 13 guesses
        tries = parseInt(x) + 5;
        localStorage.setItem("tries", tries);
        //alert(localStorage.getItem("tries"));

    }
        

    
        
}

