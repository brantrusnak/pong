import { gameState } from './gameState';
import { PADDLE } from './constants';
import { resetBall } from './gameLogic';

export function updateMousePosition(event: MouseEvent) {
    if (!gameState.canvas) return;
    const halfHeight = PADDLE.height / 2;
    if (event.clientY - halfHeight > 0 && event.clientY + halfHeight < gameState.canvas.height) {
        gameState.playerPaddleY = event.clientY;
    }
}

export function startGame() {
    if (!gameState.gameStarted) {
        gameState.gameStarted = true;
        resetBall();
    }
}

