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
            inputCell.max = "9";
            inputCell.min = "0";
            cell.appendChild(inputCell);
        }
    }
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
    grid.map((yarray, yIndex) => {
        yarray.map((xarray, xIndex) => {
            let gridElement = document.querySelector("#g" + yIndex.toString() + xIndex.toString());
            gridElement.value = xarray.toString();
        });
    });
}
function clearGrid() {
    let grid = [...Array(9)].map(e => Array(9).fill(0));
    populateSudokuGrid(grid);
}
function loadDemo() {
    prePopulateGrid();
}
function prePopulateGrid() {
    let gridStart = [...Array(9)].map(e => Array(9).fill(0));
    let gridDemo1 = [
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
    let gridDemo2 = [
        [0, 0, 3, 8, 0, 0, 0, 7, 2],
        [0, 0, 4, 0, 0, 0, 0, 5, 3],
        [0, 7, 0, 0, 2, 0, 6, 0, 0],
        [9, 0, 0, 7, 0, 5, 0, 3, 6],
        [5, 3, 0, 0, 6, 0, 0, 2, 9],
        [8, 4, 0, 2, 0, 9, 0, 0, 7],
        [0, 0, 5, 0, 8, 0, 0, 4, 0],
        [3, 1, 0, 0, 0, 0, 2, 0, 0],
        [4, 6, 0, 0, 0, 1, 7, 0, 0]
    ];
    let gridDemo3 = [
        [9, 0, 0, 0, 0, 0, 5, 3, 0],
        [2, 0, 0, 8, 0, 1, 0, 0, 9],
        [0, 3, 0, 0, 0, 9, 0, 2, 7],
        [3, 0, 0, 0, 0, 0, 0, 6, 0],
        [0, 0, 6, 9, 0, 8, 0, 0, 4],
        [4, 9, 0, 7, 0, 0, 0, 0, 0],
        [0, 0, 4, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 1, 0, 7, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    populateSudokuGrid(gridDemo3);
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