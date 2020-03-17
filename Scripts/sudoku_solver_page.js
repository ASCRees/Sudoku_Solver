function loadSudokuGrid() {
    let sudokuTable = document.querySelector("#sudokutab");
    for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
        let row = sudokuTable.insertRow(rowIndex);
        for (let cellIndex = 0; cellIndex < 9; cellIndex++) {
            let cell = row.insertCell(cellIndex);
            if (rowIndex == 2 || rowIndex == 5) {
                if (cellIndex == 2 || cellIndex == 5) {
                    cell.className = "gridbottomright";
                }
                else {
                    cell.className = "gridbottom";
                }
            }
            else if (cellIndex == 2 || cellIndex == 5) {
                cell.className = "gridright";
            }
            let inputCell = document.createElement("input");
            let inputCellID = "g" + rowIndex.toString() + cellIndex.toString();
            inputCell.type = "number";
            inputCell.id = inputCellID;
            inputCell.name = inputCellID;
            inputCell.value = "0";
            cell.appendChild(inputCell);
        }
    }
    prePopulateGrid();
}
function readSudokuGrid() {
    let grid = [...Array(9)].map(e => Array(9).fill(0));
    for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
        for (let cellIndex = 0; cellIndex < 9; cellIndex++) {
            let gridElement = document.querySelector("#g" + rowIndex.toString() + cellIndex.toString());
            grid[rowIndex][cellIndex] = Number(gridElement.value);
        }
    }
    return grid;
}
function populateSudokuGrid(grid) {
    for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
        for (let cellIndex = 0; cellIndex < 9; cellIndex++) {
            let gridElement = document.querySelector("#g" + rowIndex.toString() + cellIndex.toString());
            gridElement.value = grid[rowIndex][cellIndex].toString();
        }
    }
}
function prePopulateGrid() {
    let gridStart = [...Array(9)].map(e => Array(9).fill(0));
    gridStart = [
        [0, 8, 0, 5, 3, 0, 2, 7, 6],
        [0, 5, 0, 6, 0, 0, 0, 0, 0],
        [6, 1, 3, 0, 0, 0, 0, 0, 0],
        [0, 0, 6, 0, 5, 0, 0, 0, 0],
        [0, 3, 2, 0, 0, 0, 7, 0, 1],
        [7, 4, 5, 0, 0, 8, 6, 9, 3],
        [0, 7, 0, 9, 6, 0, 5, 0, 0],
        [4, 0, 0, 1, 8, 0, 0, 6, 7],
        [5, 0, 0, 0, 0, 4, 8, 2, 9]
    ];
    populateSudokuGrid(gridStart);
}
function clickSolveButton() {
    let gridEnd = readSudokuGrid();
    gridEnd = generate_display_grid(gridEnd);
    populateSudokuGrid(gridEnd);
}
function generate_display_grid(grid) {
    let sudokuSolver = new Sudoko.SolveSudoko(grid);
    grid = sudokuSolver.solveSudoku();
    return grid;
}
//# sourceMappingURL=sudoku_solver_page.js.map