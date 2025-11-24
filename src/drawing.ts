import { PADDLE, DIVIDER_PATTERN, SCORE_FONT, SCORE_Y_OFFSET, SCORE_OFFSETS } from './constants';
import { gameState } from './gameState';

export function drawPaddle(X: number, Y: number) {
    if (!gameState.context) return;
    gameState.context.beginPath();
    gameState.context.fillStyle = '#fff';
    gameState.context.fillRect(X, Y - (PADDLE.height / 2), PADDLE.width, PADDLE.height);
    gameState.context.fill();
}

export function drawBall() {
    if (!gameState.context) return;
    gameState.context.beginPath();
    gameState.context.fillStyle = '#fff';
    gameState.context.arc(gameState.ball.X, gameState.ball.Y, gameState.ball.radius, 0, Math.PI * 2);
    gameState.context.fill();
}

export function drawDivider() {
    if (!gameState.context || !gameState.canvas) return;
    gameState.context.beginPath();
    gameState.context.strokeStyle = '#fff';
    gameState.context.lineWidth = 10;
    gameState.context.setLineDash(DIVIDER_PATTERN);
    gameState.context.moveTo(gameState.canvas.width / 2, 0);
    gameState.context.lineTo(gameState.canvas.width / 2, gameState.canvas.height);
    gameState.context.stroke();
}

export function drawScore() {
    if (!gameState.context || !gameState.canvas) return;
    /*
        Render scoreboard, player score is 25% (of canvas width) offset, second is 75%.
    */
    gameState.context.fillStyle = '#fff'
    gameState.context.font = SCORE_FONT;
    gameState.context.textBaseline = 'top';
    gameState.context.fillText(gameState.playerscore.toString(), gameState.canvas.width * SCORE_OFFSETS.player, SCORE_Y_OFFSET);
    gameState.context.fillText(gameState.computerscore.toString(), gameState.canvas.width * SCORE_OFFSETS.computer, SCORE_Y_OFFSET);
}

export function drawStartScreen() {
    if (!gameState.context || !gameState.canvas) return;
    gameState.ellipsisFrame++;
    // Cycle ellipsis every 30 frames (roughly 0.5 seconds at 60fps)
    const ellipsisCount = Math.floor((gameState.ellipsisFrame / 30) % 3) + 1;
    const ellipsis = '.'.repeat(ellipsisCount);
    
    gameState.context.fillStyle = '#fff';
    gameState.context.font = SCORE_FONT;
    gameState.context.textBaseline = 'middle';
    
    // Measure text to keep "Click to Start" in fixed position
    const baseText = 'Click to Start';
    const maxEllipsis = '...';
    gameState.context.textAlign = 'left';
    const baseTextWidth = gameState.context.measureText(baseText).width;
    const maxEllipsisWidth = gameState.context.measureText(maxEllipsis).width;
    const totalWidth = baseTextWidth + maxEllipsisWidth;
    
    // Draw base text centered, accounting for max ellipsis width
    const startX = (gameState.canvas.width / 2) - (totalWidth / 2);
    gameState.context.fillText(baseText, startX, gameState.canvas.height / 2);
    
    // Draw ellipsis in fixed-width area after base text
    gameState.context.fillText(ellipsis, startX + baseTextWidth, gameState.canvas.height / 2);
    
    gameState.context.textAlign = 'left'; // Reset to default
}

export function draw() {
    if (!gameState.context || !gameState.canvas) return;
    // Clear context every draw call.
    gameState.context.clearRect(0, 0, gameState.canvas.width, gameState.canvas.height);

    // Player Paddle
    drawPaddle(0, gameState.playerPaddleY);

    // Computer Paddle
    drawPaddle(gameState.canvas.width - PADDLE.width, gameState.computerPaddleY);

    drawDivider();
    drawBall();
    drawScore();
}

