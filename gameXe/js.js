let X_POSITION = 100;
let Y_POSITION = 100;
let SPEED = 20;
let UP = 1;
let DOWN =2;
let RIGHT = 3;
let LEFT = 4;

class Car {
    constructor() {
        this.xPosition = X_POSITION;
        this.yPosition = Y_POSITION;
        this.speed = SPEED;
        this.image = 'bird.png';
        this.orientation = UP;

    }
    move(){
        switch (this.orientation) {
            case UP:this.yPosition -= this.speed;
            break;
            case DOWN:this.yPosition += this.speed;
            break;
            case  LEFT: this.xPosition -= this.speed;
            break;
            case RIGHT: this.xPosition += this.speed;
            break;
        }
    } show(ctx){
        let image = new Image();
        let xPosition = this.xPosition;
        let yPosition = this.yPosition;
        image.onload = function (){
            ctx.drawImage(image,xPosition,yPosition);
        }
        image.src = this.image;
    }
}
class Game {
    constructor() {
        this.back = new Image();
        this.car = new Car();
        this.ctx = undefined;
    }
    render(){
        this.back.src = "back.jpeg"
        this.ctx.drawImage(this.back,0,0);
        this.car.show(this.ctx)
    }
    start(){
        this.ctx = document.getElementById("game").getContext("2d");
        this.car.show(this.ctx)
        this.back.src = "back.jpeg"
        this.ctx.drawImage(this.back,0,0);
    }
    moveCar(evt){
        let orientation = 0;
        switch (evt.keyCode) {
            case 38:orientation = UP;
            break;
            case 40: orientation = DOWN;
            break;
            case 37:orientation = LEFT;
            break;
            case 39:orientation = RIGHT;
            break;
        }
        if(orientation){
            this.render();
            if(this.car.orientation !== orientation){
                this.car.orientation = orientation;
            } else {
                this.car.move();
            }

        }
    }
}
let game = new Game();
game.start()