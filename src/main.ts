import { gameState } from './gameState';
import { draw, drawStartScreen } from './drawing';
import { move } from './gameLogic';
import { updateMousePosition, startGame } from './input';
import { resizeCanvas } from './canvas';

window.onload = () => {
    gameState.canvas = document.getElementById('game') as HTMLCanvasElement;
    gameState.context = gameState.canvas.getContext('2d')!;
    resizeCanvas(true);
    gameState.canvas.onmousemove = updateMousePosition;
    gameState.canvas.onclick = startGame;
    window.addEventListener('resize', () => resizeCanvas());
    gameLoop();
}

function gameLoop() {
    draw();

    if (!gameState.gameStarted) {
        drawStartScreen();
    } else {
        move();
    }

    requestAnimationFrame(gameLoop);
}
