var angle; var speed;

var Player;
var loadLevel = true;
var cont = true; //Turn this false to exit main loop
function main() {
    if (loadLevel){
        L = BackGround("1") //TODO find a way to make this shift levels as needed
        RectArray = L[0];bg = L[3];objarray = L[4];
        Player = new PlayerRect(IMAGEDICT["2"], L[1][0], L[1][1]);
        console.log(RectArray);
        loadLevel = false;
    }
    c.clearRect(0,0,canvas.width,canvas.height)
    Player.move(RectArray);
    Player.draw();
    for (var rectindex in RectArray){
        RectArray[rectindex].draw()
    }
    // if (shoot){
    //     console.log("bang")
    // }
    // if (Math.random() < 0.01){
    //     enemyarray.push(new Enemy(IMAGEDICT["sweetpea"]["idle"],Math.random()*canvas.width,Math.random()*canvas.height))
    // }
    // for (var enemy in enemyarray){
    //     enemy.move(PlayerRect)
    //     enemy.update()
    // }
    // for (var bullet in bulletarray){
    //     numbro = enemyarray.length
    //     if(bullet.update(enemyarray,PlayerRect) && enemy.length == numbro){
    //         cont = false
    //     }
    // }
    if (cont){
        window.setTimeout(main,200);//Set second number in milliseconds before loop
    }
  }