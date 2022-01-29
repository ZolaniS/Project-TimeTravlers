class Enemy {
	constructor(image, x, y) {
        this.image =    image;
        this.x =        x;
        this.y =        y;
        this.w =        image.width;
        this.h =        image.height;
        this.imageName =null;
        this.message =  "";
        this.char = "1"
		this.speed = 3
		this.velocity = [0,0]
	}
	// move(PlayerRect) {
    //     console.log("supposedly this sin;t a function")
	// 	angle = Math.atan2(PlayerRect.y - this.y, PlayerRect.x - this.x);

	// 	this.velocity[1] = Math.sin(angle)*this.speed;
	// 	this.velocity[0] = Math.cos(angle)*this.speed;
	// }

	update() {
		this.x = this.x + this.velocity[0]
		this.y = this.y + this.velocity[1]
	}
	shoot(){
		objarray.push(new bullet(IMAGEDICT["misc"]["key"],this.x,this.y,this.velocity))
	}
}

Object.setPrototypeOf(HitRect.prototype, Enemy.prototype);