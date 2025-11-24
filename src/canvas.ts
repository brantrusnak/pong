import { PADDLE } from './constants';
import { gameState } from './gameState';

export function resizeCanvas(initializing = false) {
    if (!gameState.canvas) return;
    const previousWidth = gameState.canvas.width || window.innerWidth;
    const previousHeight = gameState.canvas.height || window.innerHeight;

    gameState.canvas.width = window.innerWidth;
    gameState.canvas.height = window.innerHeight;

    if (initializing) {
        gameState.playerPaddleY = gameState.canvas.height / 2;
        gameState.computerPaddleY = gameState.playerPaddleY;
        gameState.ball.X = gameState.canvas.width / 2;
        gameState.ball.Y = gameState.canvas.height / 2;
        return;
    }

    const widthRatio = gameState.canvas.width / previousWidth;
    const heightRatio = gameState.canvas.height / previousHeight;

    gameState.playerPaddleY *= heightRatio;
    gameState.computerPaddleY *= heightRatio;
    gameState.ball.X *= widthRatio;
    gameState.ball.Y *= heightRatio;

    clampPositions();
}

function clampPositions() {
    if (!gameState.canvas) return;
    const halfHeight = PADDLE.height / 2;
    gameState.playerPaddleY = Math.min(Math.max(gameState.playerPaddleY, halfHeight), gameState.canvas.height - halfHeight);
    gameState.computerPaddleY = Math.min(Math.max(gameState.computerPaddleY, halfHeight), gameState.canvas.height - halfHeight);
    gameState.ball.X = Math.min(Math.max(gameState.ball.X, gameState.ball.radius), gameState.canvas.width - gameState.ball.radius);
    gameState.ball.Y = Math.min(Math.max(gameState.ball.Y, gameState.ball.radius), gameState.canvas.height - gameState.ball.radius);
}

