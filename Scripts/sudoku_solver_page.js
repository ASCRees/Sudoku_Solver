let listOfGridResults;
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
function loadSudokuGridResultsList(numberOfResults) {
    if (numberOfResults > 1) {
        let sudokuNumResultsPara = document.createElement("p");
        let sudokuResultsDiv = document.getElementById("SudokuResults");
        let sudokuResultsList = document.createElement("ol");
        sudokuNumResultsPara.textContent = "There are " + numberOfResults.toString() + " solutions.";
        if (numberOfResults > 10) {
            sudokuNumResultsPara.textContent += "<br> Showing the first 10.";
        }
        sudokuNumResultsPara.id = "SudokuNumberOfResultsP";
        sudokuNumResultsPara.innerHTML = sudokuNumResultsPara.textContent;
        sudokuResultsList.type = "1";
        for (let index = 0; index < (numberOfResults > 10 ? 10 : numberOfResults); index++) {
            let anchor = document.createElement("a");
            let listElement = document.createElement("li");
            anchor.setAttribute("onclick", "displayGridResults(" + index.toString() + ")");
            anchor.innerText = "Solution - " + (index + 1).toString();
            listElement.appendChild(anchor);
            sudokuResultsList.appendChild(listElement);
        }
        sudokuResultsDiv.appendChild(sudokuNumResultsPara);
        sudokuResultsDiv.appendChild(sudokuResultsList);
        sudokuResultsDiv.className = "SudokuResultsDivVisible";
    }
}
function displayGridResults(gridResultNumber) {
    populateSudokuGrid(listOfGridResults[gridResultNumber]);
}
function readSudokuGrid() {
    let grid = [...Array(9)].map((e) => Array(9).fill(0));
    for (let index = 0; index < 81; index++) {
        let rowIndex = Math.floor(index / 9);
        let cellIndex = index % 9;
        let gridElement = document.querySelector("#g" + rowIndex.toString() + cellIndex.toString());
        grid[rowIndex][cellIndex] = Number(gridElement.value);
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
    let grid = [...Array(9)].map((e) => Array(9).fill(0));
    hideError();
    hideSolutionList();
    populateSudokuGrid(grid);
}
function hideSolutionList() {
    let sudokuResultsDiv = document.getElementById("SudokuResults");
    sudokuResultsDiv.innerHTML = "";
    sudokuResultsDiv.className = "SudokuResultsDivInvisible";
}
function loadDemo() {
    clearGrid();
    let demoSelector = document.querySelector("#demoSelector");
    prePopulateGrid(demoSelector.selectedIndex);
}
function prePopulateGrid(demoRequired) {
    let gridStart = [];
    gridStart.push([
        [0, 8, 0, 5, 3, 0, 2, 7, 6],
        [0, 5, 0, 6, 0, 0, 0, 0, 0],
        [6, 1, 3, 0, 0, 0, 0, 0, 0],
        [0, 0, 6, 0, 5, 0, 0, 0, 0],
        [0, 3, 2, 0, 0, 0, 7, 0, 1],
        [7, 4, 5, 0, 0, 8, 6, 9, 3],
        [0, 7, 0, 9, 6, 0, 5, 0, 0],
        [4, 0, 0, 1, 8, 0, 0, 6, 7],
        [5, 0, 0, 0, 0, 4, 8, 2, 9],
    ]);
    gridStart.push([
        [0, 0, 3, 8, 0, 0, 0, 7, 2],
        [0, 0, 4, 0, 0, 0, 0, 5, 3],
        [0, 7, 0, 0, 2, 0, 6, 0, 0],
        [9, 0, 0, 7, 0, 5, 0, 3, 6],
        [5, 3, 0, 0, 6, 0, 0, 2, 9],
        [8, 4, 0, 2, 0, 9, 0, 0, 7],
        [0, 0, 5, 0, 8, 0, 0, 4, 0],
        [3, 1, 0, 0, 0, 0, 2, 0, 0],
        [4, 6, 0, 0, 0, 1, 7, 0, 0],
    ]);
    gridStart.push([
        [9, 0, 0, 0, 0, 0, 5, 3, 0],
        [2, 0, 0, 8, 0, 1, 0, 0, 9],
        [0, 3, 0, 0, 0, 9, 0, 2, 7],
        [3, 0, 0, 0, 0, 0, 0, 6, 0],
        [0, 0, 6, 9, 0, 8, 0, 0, 4],
        [4, 9, 0, 7, 0, 0, 0, 0, 0],
        [0, 0, 4, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 1, 0, 7, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);
    gridStart.push([
        // Mutiple solutions
        [0, 8, 0, 0, 0, 9, 7, 4, 3],
        [0, 5, 0, 0, 0, 8, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0],
        [8, 0, 0, 0, 0, 5, 0, 0, 0],
        [0, 0, 0, 8, 0, 4, 0, 0, 0],
        [0, 0, 0, 3, 0, 0, 0, 0, 6],
        [0, 0, 0, 0, 0, 0, 0, 7, 0],
        [0, 3, 0, 5, 0, 0, 0, 8, 0],
        [9, 7, 2, 4, 0, 0, 0, 5, 0],
    ]);
    gridStart.push([
        // Mutiple solutions
        [1, 0, 0, 4, 0, 0, 7, 0, 0],
        [0, 2, 0, 0, 5, 0, 0, 8, 0],
        [0, 0, 3, 0, 0, 6, 0, 0, 9],
        [0, 1, 0, 0, 4, 0, 0, 7, 0],
        [0, 0, 2, 0, 0, 5, 0, 0, 8],
        [9, 0, 0, 3, 0, 0, 6, 0, 0],
        [7, 0, 0, 0, 0, 8, 0, 0, 2],
        [8, 0, 0, 2, 0, 0, 9, 0, 0],
        [0, 9, 0, 0, 7, 0, 0, 1, 0],
    ]);
    populateSudokuGrid(gridStart[demoRequired]);
}
function clickSolveButton() {
    let gridEnd = readSudokuGrid();
    gridEnd = generate_display_grid(gridEnd);
    if (listOfGridResults.length > 0) {
        populateSudokuGrid(gridEnd);
    }
    else {
        displayError();
    }
}
function displayError() {
    let sudokuErrorDiv = document.getElementById("SolverErrorDiv");
    sudokuErrorDiv.className = "row ErrorVisible";
}
function hideError() {
    let sudokuErrorDiv = document.getElementById("SolverErrorDiv");
    sudokuErrorDiv.className = "row ErrorInvisible";
}
function generate_display_grid(grid) {
    let sudokuSolver = new Sudoko.SolveSudoko(grid);
    let x = sudokuSolver.solveSudoku();
    listOfGridResults = x;
    grid = listOfGridResults[0];
    if (listOfGridResults.length > 1) {
        loadSudokuGridResultsList(listOfGridResults.length);
    }
    return grid;
}
//# sourceMappingURL=sudoku_solver_page.js.map