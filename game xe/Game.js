class Game {
    constructor() {
        this.canvas = null;
        this.context = null;
        this.update()
        this.loop()
    }
    update(){
        this.canvas = document.getElementById('game');
        this.context = this.canvas.getContext('2d');
        this.ball = new Ball(this)
        this.ball.run()
    }

    draw(){
        this.context.clearRect(0,0,600,700);
        this.ball.draw1()
    }
    loop(){

        this.draw();
        setTimeout(()=> this.loop(),10);
    }
}
let g = new Game();