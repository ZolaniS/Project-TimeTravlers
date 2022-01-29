//var L;var RectArray;var spawn;var bg;var objarray;var skin;var PlayerRect;var text;var cont = true;
//var proceed = true; var SPAWN = [0,0];var loaded = true;var level = true;var speed = 5;var numbro;
//var stdSize = 50;var shoot = false; var angle = 0; var enemyarray = []; var bulletarray = []
var proceed = true;
var counter = 0

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

//the keypresses array being set and unset by 
var keypress = {"Right":false, "Left":false, "Up":false, "Down":false};
window.addEventListener("keydown", function(e){
    if (e.key == "Right" || e.key == "ArrowRight" || e.key == "D"){
        keypress["Right"] = true;
    }
    if (e.key == "Left" || e.key == "ArrowLeft" || e.key == "A"){
        keypress["Left"] = true;
    }
    if (e.key == "Up" || e.key == "ArrowUp" || e.key == "W"){
        keypress["Up"] = true;
    }
    if (e.key == "Down" || e.key == "ArrowDown" || e.key == "S"){
        keypress["Down"] = true;
    }
});
window.addEventListener("keyup", function(e){
    if (e.key == "Right" || e.key == "ArrowRight" || e.key == "D"){
        keypress["Right"] = false;
    }
    if (e.key == "Left" || e.key == "ArrowLeft" || e.key == "A"){
        keypress["Left"] = false;
    }
    if (e.key == "Up" || e.key == "ArrowUp" || e.key == "W"){
        keypress["Up"] = false;
    }
    if (e.key == "Down" || e.key == "ArrowDown" || e.key == "S"){
        keypress["Down"] = false;
    }
});
window.addEventListener("resize", function(){//keeps the canvas fit to the window
    canvas.height = window.innerHeight - 2*8;
    canvas.width = canvas.height*16/9 - 2*8;
    canvas.height-= 2*8
});

function Title(){//When you click the start button, enter the main loop.
    c.clearRect(0,0,canvas.width,canvas.height);

    //draws obvious text snippets using arbitrary temporary variable p. start saved to later provide click checking
    c.fillStyle = "rgb(125,25,25)";
    c.font = "128px serif";
    c.fillText("Name", 100,100);
    c.font = "64px sans";
    c.fillText("Start", 100,200);

    document.addEventListener("mousemove",function mm(e){
        var w = c.measureText("Start").width;
        if (proceed){
            if (e.x > 100 && e.x < 100+w && e.y < 200 && e.y > 200-64){
                c.fillStyle = "rgba(255,115,115,0.5)";
                c.fillText("Start", 100,200);
            }
            else{
                c.fillStyle = "rgb(125,25,25)";
                c.fillText("Start", 100,200);
            }
        }
    },false);
    document.addEventListener("click",function cl(e){
        var w = c.measureText("Start").width;
        if (e.x > 100 && e.x < 100+w && e.y < 200 && e.y > 200-64 && proceed){
            proceed = false;
            main();
        }
    },false);

}

function start(){//Makes sure that all the assets are loaded before going on to tile screen
    loaded = true
    for (const item in IMAGEDICT){
        if (IMAGEDICT[item].complete == false){
            loaded = false;
        }

    }
    if (loaded == false){
        window.setTimeout(start,100);
    }
    else{
        Title()
    }
}
onload = function () {
  start();
}