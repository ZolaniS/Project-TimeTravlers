var offset = {"x": 0, "y": 0};
var Player;
var loadLevel = true;
var cont = true; //Turn this false to exit main loop
function main() {
    if (loadLevel){
        L = BackGround("1") //TODO find a way to make this shift levels as needed
        RectArray = L[0];bg = L[3];objarray = L[4];
        Player = new PlayerRect(IMAGEDICT["2"], L[1][0], L[1][1]);
        Player.x = canvas.width/4
        console.log(RectArray);
        loadLevel = false;
        console.log("built")
        // Player.x = canvas.width/2;
        //Player.y = canvas.height/2;
    }
    c.clearRect(0,0,canvas.width,canvas.height)
    Player.move(RectArray);
    
    // if (Player.x > 3*canvas.width/4 || Player.x < canvas.width/4){
    //     Player.x -=Player.velx + Math.round(Player.x-canvas.width/100);
    //     offset.x -=Player.velx;
    // }
    //offset.y -= (Player.y-canvas.height/2)/2;

    for (var rectindex in RectArray){
        RectArray[rectindex].x-=Player.velx;
        RectArray[rectindex].draw();
    }
    Player.hits = Player.collideList(RectArray);
    if (Player.hits.length > 0){
        c.clearRect(0,0,canvas.width,canvas.height)
        if (Player.velx < 0){//If player moves left into a block
            Player.velx = (Player.hits[0].x+Player.hits[0].w) - Player.x;
            console.log(Player.x)
        }
        else{                //If player moves right or is still into a block
            Player.velx = Player.hits[Player.hits.length-1].x - (Player.x + Player.w);
        }
        for (var rectindex in RectArray){
            RectArray[rectindex].x-=Player.velx;
            RectArray[rectindex].draw();
        }
        Player.velx = 0
        // if (Player.velx < 0){//If player moves left into a block
            
        // }
    }
    Player.draw();
    offset.x=0
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
    //DEATH CHECK DEATH CHECK DEATH CHECK
    if (Player.y > canvas.height){
        console.log(Player.y);
        loadLevel=true;
        Title("Game Over", "Restart");
    }
    else{
        window.requestAnimationFrame(main);//Set second number in milliseconds before loop
    }
  }