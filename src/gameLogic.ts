import { PADDLE, BASE_BALL_SPEED } from './constants';
import { gameState } from './gameState';

export function updateComputerPosition() {
    if (!gameState.canvas) return;
    const halfHeight = PADDLE.height / 2;
    if (gameState.ball.Y - halfHeight > 0 && gameState.ball.Y + halfHeight < gameState.canvas.height) {
        gameState.computerPaddleY = gameState.ball.Y;
    }
}

export function resetBall() {
    if (!gameState.canvas) return;
    const horizontalDirection = Math.random() < 0.5 ? -1 : 1;
    gameState.ball.VX = BASE_BALL_SPEED * horizontalDirection;
    gameState.ball.VY = (Math.random() - 0.5) * (BASE_BALL_SPEED * 0.5);
    gameState.ball.X = gameState.canvas.width / 2;
    gameState.ball.Y = gameState.canvas.height / 2;
}

export function move() {
    if (!gameState.canvas) return;
    gameState.ball.X += gameState.ball.VX;
    gameState.ball.Y += gameState.ball.VY;
    updateComputerPosition();

    // Player score|paddle|ball collision detection.
    if (gameState.ball.X - PADDLE.width < 0) {
        const playerTop = gameState.playerPaddleY - (PADDLE.height / 2);
        const playerBottom = gameState.playerPaddleY + (PADDLE.height / 2);
        if (gameState.ball.Y >= playerTop && gameState.ball.Y < playerBottom) {
            const d = gameState.playerPaddleY - gameState.ball.Y;
            gameState.ball.VY += d * -0.1;
            gameState.ball.VX = -gameState.ball.VX;
        } else {
            gameState.computerscore++;
            resetBall();
        }
    }

    // Computer score|paddle|ball collision detection.
    if (gameState.ball.X + PADDLE.width > gameState.canvas.width) {
        const computerTop = gameState.computerPaddleY - (PADDLE.height / 2);
        const computerBottom = gameState.computerPaddleY + (PADDLE.height / 2);
        if (gameState.ball.Y >= computerTop && gameState.ball.Y < computerBottom) {
            const d = gameState.computerPaddleY - gameState.ball.Y;
            gameState.ball.VY += d * -0.1;
            gameState.ball.VX = -gameState.ball.VX;
        }
        else {
            gameState.playerscore++;
            resetBall();
        }
    }

    // Bounce off top/bottom.
    if (gameState.ball.Y - gameState.ball.radius < 0) {
        gameState.ball.Y = gameState.ball.radius;
        gameState.ball.VY = -gameState.ball.VY;
    }
    if (gameState.ball.Y + gameState.ball.radius > gameState.canvas.height) {
        gameState.ball.Y = gameState.canvas.height - gameState.ball.radius;
        gameState.ball.VY = -gameState.ball.VY;
    }
}

