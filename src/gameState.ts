export const gameState = {
    canvas: null as HTMLCanvasElement | null,
    context: null as CanvasRenderingContext2D | null,
    playerPaddleY: 0, // stores paddle center
    computerPaddleY: 0,
    playerscore: 0,
    computerscore: 0,
    ball: { X: 0, Y: 0, radius: 5, VX: 0, VY: 0 },
    gameStarted: false,
    ellipsisFrame: 0
};

