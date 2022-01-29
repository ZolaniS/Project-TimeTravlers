class PlayerRect extends HitRect{
    constructor(image, x, y) {
        super(image,x,y)
        this.image =    image;
        this.x =        x;
        this.y =        y;
        this.velx=      0;
        this.vely=      0;
        this.w =        image.width;
        this.h =        image.height;
        this.grounded = false;
        this.imageName =null;
        this.message =  "";
        this.char = "1"
    }
    move(rectlist){
        this.grounded = this.collideList(rectlist).length != 0 && this.vely > 0;

        if (keypress["Left"]){
            this.velx = -4;
            console.log("sdf")
        }
        else if (keypress["Right"]){
            this.velx = 4;
            console.log("odod")
        }
        if (keypress["Up"] && this.grounded){
            this.vely = -16;
        }
        else if (keypress["Down"]){
            console.log("placeholder output");
        }
        this.vely+=4;
        this.vely+= Number(this.grounded)*-1*this.vely
        this.x+=this.velx;
        this.y+=this.vely;
    }
    draw(){
        c.drawImage(this.image,this.x,this.y);
    }
}