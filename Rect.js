class HitRect {
	constructor(image, x, y) {
        this.image =    image;
        this.x =        x;
        this.y =        y;
        this.w =        image.width;
        this.h =        image.height;
        this.imageName =null;
        this.message =  "";
        this.char = "1"
    }
    recalibrate(){
        this.w =        this,image.width;
        this.h =        this.image.height;
    }
	draw(){
        c.drawImage(this.image,this.x,this.y,stdSize,stdSize);
    }
    collideRect(rect){
        if (this.x < rect.x+rect.w && this.x+this.w > rect.x && this.y < rect.y+rect.h && this.y+this.h > rect.y){
            return true
        }
        return false
    }
    collidePoint(x,y){
        if (x > this.x && x < this.x+this.w && y > this.y && y < this.y+this.h){
            return true;
        }
        return false;
    }
    collideList(rectlist){
        //"""give this a list of hitrects and it will return the indices of the rects that this hitrect is intersecting with"""
        var rect;
        var hits = [];
        for(var i = 0; i < rectlist.length; i+=1){
            rect = rectlist[i];
            if (this.x < rect.x+rect.w && this.x+this.w > rect.x && this.y < rect.y+rect.h && this.y+this.h > rect.y){
                hits.push(i);
            }
        }
        return hits
    }
    collideLine(x,y){
        //TODO
    }
}