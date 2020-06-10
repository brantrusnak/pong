let canvas: HTMLCanvasElement;
let context: CanvasRenderingContext2D;
let FPS = 60;

let playerPaddleY = 0;
let paddleDimensions = {
    width: 10,
    height: 100
}
let playerscore = 0;
let computerscore = 0;

let ball = {
    X: 0,
    Y: 0,
    radius: 5
}

window.onload = () => {
    canvas = document.getElementById('game') as HTMLCanvasElement;
    canvas.width = window.innerWidth - 10;
    canvas.height = window.innerHeight - 10;
    canvas.onmousemove = updateMousePosition;

    playerPaddleY = canvas.height / 2;
    ball.X = canvas.width / 2;
    ball.Y = canvas.height / 2;

    context = canvas.getContext('2d');
    context.globalAlpha = 5;

    draw();
}

function updateMousePosition(event: MouseEvent) {
    /*
        Check if the player's current mouse position + half the height of the paddle is greater than 0 and smaller than canvas height.
        Prevents paddle from moving out of screen.
    */
    if (event.clientY - (paddleDimensions.height / 2) > 0 && event.clientY + (paddleDimensions.height / 2) < canvas.height) {
        playerPaddleY = event.clientY;
    }
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    // Player Paddle
    drawPaddle(0, playerPaddleY);

    // Computer Paddle
    drawPaddle(canvas.width - paddleDimensions.width, ball.Y);

    drawBall();
    drawScore();
    requestAnimationFrame(draw);
}

function drawPaddle(X: number, Y: number) {
    context.beginPath();
    context.fillStyle = '#fff';
    context.fillRect(X, Y - (paddleDimensions.height / 2), paddleDimensions.width, paddleDimensions.height);
    context.fill();
}

function drawBall() {
    context.beginPath();
    context.fillStyle = '#fff';
    context.arc(ball.X, ball.Y, ball.radius, 0, Math.PI * 2, true);
    context.fill();
}

function drawScore() {
    /*
        Render scoreboard, player score is 25% (of canvas width) offset, second is 75%.
    */
    context.fillStyle= '#fff'
    context.font = "72px 'Press Start 2P'";
    context.textBaseline = 'top';
    context.fillText(playerscore.toString(), canvas.width * 0.25, 100);
    context.fillText(computerscore.toString(), canvas.width * 0.75, 100);
}