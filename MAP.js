'use strict'

const N = 10
const M = 10
const offset_x = 100
const offset_y = 100
const linewidth = 2;

const frame_size = 25

//--------------------------------------------------

var map = new Array(N);

for (var k = 0 ; k < N ; k++) {
    map[k] = new Array(M)
}

for (var i = 0 ; i < N ; i++) {
    for (var j = 0 ; j < M ; j++) {
        map[i][j] = 0;
    }
}

//---------------------------------------------------
function draw_kletkaframe(ctx , x , y , size) {
    var frame = new Path2D();

    frame.rect(x , y , size , size)

    ctx.strokeStyle = 'rgb(0 , 0 , 0)'
    ctx.stroke(frame);
}
function draw_kletka(ctx , x , y , value) {
    //draw_kletkaframe(ctx ,x - 1, y - 1, frame_size + 2)
    var kletka = new Path2D();

    kletka.rect(x, y , frame_size , frame_size);

    ctx.fillStyle = 'black';
    ctx.strokeStyle = 'black';

    if (value >= 1) {
        ctx.fill(kletka);
    } else if (value == 0){
        ctx.stroke(kletka);
    }

    //ctx.stroke(kletka);
}

function writeMessage(canvas, message) {
    var context = canvas.getContext('2d');
    context.clearRect(0, 450, 280, 30);
    context.font = '20pt Calibri';
    context.fillStyle = 'blue';
    context.fillText(message, 10, 475);
}
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function draw(canvas) {

    if (canvas.getContext) { // canvas-supported code
        var context = canvas.getContext('2d')

        context.clearRect(0, 0, canvas.width, canvas.height);

        context.strokeStyle = 'rgb(255 , 0 , 0)'

        context.lineWidth = linewidth;
        for (var i = 0 , y = offset_y ; i < N ; i++ , y += frame_size + 1 ) {
            for (var j = 0 , x = offset_x ; j < M ; j++ , x += frame_size + 1) {
                draw_kletka(context , x , y , map[i][j]);
            }
        }


    } else {
        // // canvas-unsupported code here
    }
}

//---------------------------------------------------

var canvasE = document.getElementById('game');

function game(map) {

    draw(canvasE);

    canvasE.addEventListener('click', function (evt) {

        var mousePos = getMousePos(canvasE, evt);

        var coord_x = Math.floor( (mousePos.x - offset_x)/(frame_size + linewidth/2));

        if ( (mousePos.x - offset_x)%frame_size == 0 || coord_x == N) {
            coord_x--;
        }

        var coord_y = Math.floor((mousePos.y - offset_x)/(frame_size + linewidth/2));

        if ( (mousePos.y - offset_x)%frame_size == 0 || coord_y == M) {
            coord_y--;
        }

        // console.log('mouse.x = ' + mousePos.x + ' ; ' + 'offset_x = ' + (offset_x) + ' ; ' + 'frame_size = ' + frame_size);
        // console.log('mouse.y = ' + mousePos.y + ' ; ' + 'offset_y = ' + (offset_y) + ' ; ' + 'frame_size = ' + frame_size);
        // console.log('coord_x = ' + coord_x + ';' + 'coord_y = ' + coord_y );

        if ( map[coord_y][coord_x] == 0) {
            map[coord_y][coord_x] = 1;
        } else {
            map[coord_y][coord_x] = 0;
        }

        draw(canvasE);

        var message = 'Mouse Moving: ' + mousePos.x + ',' + mousePos.y;
        writeMessage(canvasE, message);

    }, false);

}

game(map); //hello