const PADDLE = Object.freeze({ width: 10, height: 100 });
const DIVIDER_PATTERN = [10, 70];
const SCORE_FONT = "72px 'Press Start 2P'";
const SCORE_Y_OFFSET = 10;
const SCORE_OFFSETS = Object.freeze({ player: 0.25, computer: 0.75 });
const BASE_BALL_SPEED = 16;

let canvas: HTMLCanvasElement;
let context: CanvasRenderingContext2D;
let playerPaddleY = 0; // stores paddle center
let computerPaddleY = 0;
let playerscore = 0;
let computerscore = 0;
let ball = { X: 0, Y: 0, radius: 5, VX: 0, VY: 0 };
let gameStarted = false;
let ellipsisFrame = 0;

window.onload = () => {
    canvas = document.getElementById('game') as HTMLCanvasElement;
    context = canvas.getContext('2d');
    resizeCanvas(true);
    canvas.onmousemove = updateMousePosition;
    canvas.onclick = startGame;
    window.addEventListener('resize', () => resizeCanvas());
    draw();
}

function startGame() {
    if (!gameStarted) {
        gameStarted = true;
        resetBall();
    }
}

function resizeCanvas(initializing = false) {
    const previousWidth = canvas?.width || window.innerWidth;
    const previousHeight = canvas?.height || window.innerHeight;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    if (initializing) {
        playerPaddleY = canvas.height / 2;
        computerPaddleY = playerPaddleY;
        ball.X = canvas.width / 2;
        ball.Y = canvas.height / 2;
        return;
    }

    const widthRatio = canvas.width / previousWidth;
    const heightRatio = canvas.height / previousHeight;

    playerPaddleY *= heightRatio;
    computerPaddleY *= heightRatio;
    ball.X *= widthRatio;
    ball.Y *= heightRatio;

    clampPositions();
}

function clampPositions() {
    const halfHeight = PADDLE.height / 2;
    playerPaddleY = Math.min(Math.max(playerPaddleY, halfHeight), canvas.height - halfHeight);
    computerPaddleY = Math.min(Math.max(computerPaddleY, halfHeight), canvas.height - halfHeight);
    ball.X = Math.min(Math.max(ball.X, ball.radius), canvas.width - ball.radius);
    ball.Y = Math.min(Math.max(ball.Y, ball.radius), canvas.height - ball.radius);
}

function updateMousePosition(event: MouseEvent) {
    const halfHeight = PADDLE.height / 2;
    if (event.clientY - halfHeight > 0 && event.clientY + halfHeight < canvas.height) {
        playerPaddleY = event.clientY;
    }
}

function updateComputerPosition() {
    const halfHeight = PADDLE.height / 2;
    if (ball.Y - halfHeight > 0 && ball.Y + halfHeight < canvas.height) {
        computerPaddleY = ball.Y;
    }
}

function draw() {
    // Clear context every draw call.
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Player Paddle
    drawPaddle(0, playerPaddleY);

    // Computer Paddle
    drawPaddle(canvas.width - PADDLE.width, computerPaddleY);

    drawDivider();
    drawBall();
    drawScore();

    if (!gameStarted) {
        drawStartScreen();
    } else {
        // Update all movement before drawing.
        move();
    }

    requestAnimationFrame(draw);
}

function drawPaddle(X: number, Y: number) {
    context.beginPath();
    context.fillStyle = '#fff';
    context.fillRect(X, Y - (PADDLE.height / 2), PADDLE.width, PADDLE.height);
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
    context.setLineDash(DIVIDER_PATTERN);
    context.moveTo(canvas.width / 2, 0);
    context.lineTo(canvas.width / 2, canvas.height);
    context.stroke();
}

function drawScore() {
    /*
        Render scoreboard, player score is 25% (of canvas width) offset, second is 75%.
    */
    context.fillStyle = '#fff'
    context.font = SCORE_FONT;
    context.textBaseline = 'top';
    context.fillText(playerscore.toString(), canvas.width * SCORE_OFFSETS.player, SCORE_Y_OFFSET);
    context.fillText(computerscore.toString(), canvas.width * SCORE_OFFSETS.computer, SCORE_Y_OFFSET);
}

function drawStartScreen() {
    ellipsisFrame++;
    // Cycle ellipsis every 30 frames (roughly 0.5 seconds at 60fps)
    const ellipsisCount = Math.floor((ellipsisFrame / 30) % 3) + 1;
    const ellipsis = '.'.repeat(ellipsisCount);
    
    context.fillStyle = '#fff';
    context.font = SCORE_FONT;
    context.textBaseline = 'middle';
    
    // Measure text to keep "Click to Start" in fixed position
    const baseText = 'Click to Start';
    const maxEllipsis = '...';
    context.textAlign = 'left';
    const baseTextWidth = context.measureText(baseText).width;
    const maxEllipsisWidth = context.measureText(maxEllipsis).width;
    const totalWidth = baseTextWidth + maxEllipsisWidth;
    
    // Draw base text centered, accounting for max ellipsis width
    const startX = (canvas.width / 2) - (totalWidth / 2);
    context.fillText(baseText, startX, canvas.height / 2);
    
    // Draw ellipsis in fixed-width area after base text
    context.fillText(ellipsis, startX + baseTextWidth, canvas.height / 2);
    
    context.textAlign = 'left'; // Reset to default
}

function resetBall() {
    const horizontalDirection = Math.random() < 0.5 ? -1 : 1;
    ball.VX = BASE_BALL_SPEED * horizontalDirection;
    ball.VY = (Math.random() - 0.5) * (BASE_BALL_SPEED * 0.5);
    ball.X = canvas.width / 2;
    ball.Y = canvas.height / 2;
}

function move() {
    ball.X += ball.VX;
    ball.Y += ball.VY;
    updateComputerPosition();

    // Player score|paddle|ball collision detection.
    if (ball.X - PADDLE.width < 0) {
        const playerTop = playerPaddleY - (PADDLE.height / 2);
        const playerBottom = playerPaddleY + (PADDLE.height / 2);
        if (ball.Y >= playerTop && ball.Y < playerBottom) {
            const d = playerPaddleY - ball.Y;
            ball.VY += d * -0.1;
            ball.VX = -ball.VX;
        } else {
            computerscore++;
            resetBall();
        }
    }

    // Computer score|paddle|ball collision detection.
    if (ball.X + PADDLE.width > canvas.width) {
        const computerTop = computerPaddleY - (PADDLE.height / 2);
        const computerBottom = computerPaddleY + (PADDLE.height / 2);
        if (ball.Y >= computerTop && ball.Y < computerBottom) {
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
    if (ball.Y - ball.radius < 0) {
        ball.Y = ball.radius;
        ball.VY = -ball.VY;
    }
    if (ball.Y + ball.radius > canvas.height) {
        ball.Y = canvas.height - ball.radius;
        ball.VY = -ball.VY;
    }
}