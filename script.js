

const colors = {
    ".": "transparent",
    "R": "#FF0000",
    "W": "#FFFFFF",
    "B": "#000000",
    "G": "#f57711ff",
    "Y": "#fab727ff",
};

const charmander = [
"........BBBB.........B......",
".......BGGGGB.......BRB.....",
"......BGGGGGGB......BRRB....",
"......BGGGGGGB......BRRB....",
".....BGGGGGGGGB....BRRRRB...",
"....BGGGWBGGGGB....BRRYRB...",
"....BGGGBBGGGGGB...BRYYRB...",
"....BGGGBBGGGGGB....BYBB....",
".....BGGGGGGGGGGB...BGB.....",
"......BBGGGGGGGGGB.BGGB.....",
"........BBBGGBGGGBBGGB......",
".........BYYBGGGGGBGGB......",
".........BYYYBBGGGBGB.......",
"........B.BYYYGGGGBB........",
".........BBBYYGGGBB.........",
"............BBBGBB..........",
".............B.G.B..........",
"..............BBBB..........",


];


// Animación cuadro por cuadro
async function createPixelArtSlow(matrix) {
    const container = document.getElementById("pixelArt");
    container.innerHTML = "";

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            const pixel = matrix[row][col];

            const cell = document.createElement("div");
            cell.style.width = "16px";
            cell.style.height = "16px";
            cell.style.background = colors[pixel];

            container.appendChild(cell);

            // Esperar un poquito (velocidad del dibujado)
            await new Promise(resolve => setTimeout(resolve, 20));
        }
    }
}

document.getElementById("startBtn").addEventListener("click", () => {
    // Cambiar fondo
    document.body.classList.add("grid-background");

    // Quitar botón
    document.getElementById("startBtn").style.display = "none";

    // Mostrar pixel art
    const art = document.getElementById("pixelArt");
    art.style.display = "grid";

    // Dibujar animado
    createPixelArtSlow(charmander);
});