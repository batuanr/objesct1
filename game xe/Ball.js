class Ball {
    constructor(Game) {
        this.game = Game;
        this.x = 300;
        this.y = 350;
    }
    draw1(){
        this.game.context.fillStyle= 'white';
        this.game.context.fillRect(this.x,this.y,25,25)
    }
    run(){
        document.addEventListener('keydown',(e)=>{
            switch (e.which) {
                case 37: if(this.x>0)this.x-=20;
                break;
                case 39: if(this.x+25<585) this.x+=20;
                break;
                case 38: if(this.y>10) this.y-=20;
                break;
                case 40: if(this.y +25< 690) this.y+=20;
                break;
            }
        })
    }
}
