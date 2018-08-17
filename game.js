class Game {
    constructor( containerId ) {
        this.container = document.querySelector( containerId );
        this.canvas = document.createElement( "canvas" );
        this.elements = [];
    }
    setup() {
        console.log( this );
        this.canvas.width = 1280;
        this.canvas.height = 720;
        this.context = this.canvas.getContext( "2d" );
        this.container.appendChild( this.canvas );
    }
    addElement( xPos, yPos, width, height, fill, gravity ) {
        let ele = new newElement( xPos, yPos, width, height, fill, gravity );
        this.elements.push( ele );
    }

}

class newElement {
    constructor( xPos, yPos, width, height, fill, gravity ) {
        this.xPos = xPos || 0;
        this.yPos = yPos || 0;
        this.width = width || 100;
        this.height = height || 100;
        this.fill = fill || '#000';
        this.gravity = gravity || false;
    }
    draw( ctx ) {
        ctx.fillStyle = this.fill;
        ctx.fillRect( this.xPos, this.yPos, this.width, this.height );
    }
}

let newGame = new Game( '#game' );

newGame.setup();

newGame.addElement( 10, 10, 100, 100, 'rgb(50,50,50,0.75)', false );