let canvas: HTMLCanvasElement;
let context: CanvasRenderingContext2D;
let paddleDimensions = { width: 10, height: 100 }
let playerPaddleY = 0;
let computerPaddleY = 0;
let playerscore = 0;
let computerscore = 0;
let ball = { X: 0, Y: 0, radius: 5, VX: 16, VY: 0 }

window.onload = () => {
    canvas = document.getElementById('game') as HTMLCanvasElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.onmousemove = updateMousePosition;

    playerPaddleY = canvas.height / 2;
    ball.X = canvas.width / 2;
    ball.Y = canvas.height / 2;
    computerPaddleY = ball.Y;

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
        playerPaddleY = event.clientY - (paddleDimensions.height / 2);
    }
}

function updateComputerPosition() {
    /*
        Repeat player "out of bounds" check here for computer.
    */
    if (ball.Y - (paddleDimensions.height / 2) > 0 && ball.Y + (paddleDimensions.height / 2) < canvas.height) {
        computerPaddleY = ball.Y - (paddleDimensions.height / 2);
    }
}

function draw() {
    // Clear context every draw call.
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Update all movement before drawing.
    move();

    // Player Paddle
    drawPaddle(0, playerPaddleY + (paddleDimensions.height / 2));

    // Computer Paddle
    drawPaddle(canvas.width - paddleDimensions.width, computerPaddleY + (paddleDimensions.height / 2));

    drawDivider();
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
    context.arc(ball.X, ball.Y, ball.radius, 0, Math.PI * 2);
    context.fill();
}

function drawDivider() {
    context.beginPath();
    context.strokeStyle = '#fff';
    context.lineWidth = 10;
    context.setLineDash([10, 70]);
    context.moveTo(canvas.width / 2, 0);
    context.lineTo(canvas.width / 2, canvas.height);
    context.stroke();
}

function drawScore() {
    /*
        Render scoreboard, player score is 25% (of canvas width) offset, second is 75%.
    */
    context.fillStyle = '#fff'
    context.font = "72px 'Press Start 2P'";
    context.textBaseline = 'top';
    context.fillText(playerscore.toString(), canvas.width * 0.25, 10);
    context.fillText(computerscore.toString(), canvas.width * 0.75, 10);
}

function resetBall() {
    ball.VX = 16;
    ball.VY = 0;
    ball.X = canvas.width / 2;
    ball.Y = canvas.height / 2;
}

function move() {
    ball.X += ball.VX;
    ball.Y += ball.VY;
    updateComputerPosition();

    if (ball.X - paddleDimensions.width < 0) {
        if (ball.Y >= playerPaddleY && ball.Y < playerPaddleY + paddleDimensions.height) {
            const d = playerPaddleY - ball.Y;
            ball.VY += d * -0.1;
            ball.VX = -ball.VX;
        } else {
            computerscore++;
            resetBall();
        }
    }
    if (ball.X + paddleDimensions.width > canvas.width) {
        if (ball.Y >= computerPaddleY && ball.Y < computerPaddleY + paddleDimensions.height) {
            const d = computerPaddleY - ball.Y;
            ball.VY += d * -0.1;
            ball.VX = -ball.VX;
        }
        else {
            playerscore++;
            resetBall();
        }
    }
    // Bounce off top/bottom.
    if (ball.Y < 0) {
        ball.VY = -ball.VY;
    }
    if (ball.Y > canvas.height) {
        ball.VY = -ball.VY;
    }
}