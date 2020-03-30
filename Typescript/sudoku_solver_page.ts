let listOfGridResults: number[][][];

function loadSudokuGrid() {
	let sudokuTable: HTMLTableElement = document.querySelector("#sudokutab") as HTMLTableElement;
	for (let rowIndex: number = 0; rowIndex < 9; rowIndex++) {
		let row = sudokuTable.insertRow(rowIndex);
		for (let cellIndex: number = 0; cellIndex < 9; cellIndex++) {
			let cell: HTMLTableDataCellElement = row.insertCell(cellIndex);
			if (rowIndex == 2 || rowIndex == 5) {
				if (cellIndex == 2 || cellIndex == 5) {
					cell.className = "gridbottomright";
				} else {
					cell.className = "gridbottom";
				}
			} else if (cellIndex == 2 || cellIndex == 5) {
				cell.className = "gridright";
			}
			let inputCell: HTMLInputElement = document.createElement("input") as HTMLInputElement;
			let inputCellID: string = "g" + rowIndex.toString() + cellIndex.toString();
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

function loadSudokuGridResultsList(numberOfResults: number) {
	if (numberOfResults > 1) {
		//let sudokuRightDiv: HTMLDivElement = document.getElementById("SudokuRight") as HTMLDivElement;
		let sudokuNumResultsPara: HTMLParagraphElement = document.createElement("p") as HTMLParagraphElement;
		sudokuNumResultsPara.textContent = "There are " + numberOfResults.toString() + " solutions.";
		sudokuNumResultsPara.id = "SudokuNumberOfResultsP";

		sudokuNumResultsPara.innerHTML = sudokuNumResultsPara.textContent;
		let sudokuResultsDiv: HTMLDivElement = document.getElementById("SudokuResults") as HTMLDivElement;
		let sudokuResultsList: HTMLOListElement = document.createElement("ol") as HTMLOListElement;
		sudokuResultsList.type = "1";

		for (let index: number = 0; index < numberOfResults; index++) {
			let anchor: HTMLAnchorElement = document.createElement("a") as HTMLAnchorElement;
			anchor.setAttribute("onclick", "displayGridResults(" + index.toString() + ")");
			anchor.innerText = "Solution - " + index.toString();
			let listElement: HTMLLIElement = document.createElement("li") as HTMLLIElement;
			listElement.appendChild(anchor);
			sudokuResultsList.appendChild(listElement);
		}
		sudokuResultsDiv.appendChild(sudokuNumResultsPara);
		sudokuResultsDiv.appendChild(sudokuResultsList);
		sudokuResultsDiv.className = "SudokuResultsDivVisible";
	}
}

function displayGridResults(gridResultNumber: number) {
	populateSudokuGrid(listOfGridResults[gridResultNumber]);
}

function readSudokuGrid(): number[][] {
	let grid: number[][] = [...Array(9)].map(e => Array(9).fill(0));
	for (let index: number = 0; index < 81; index++) {
		let rowIndex: number = Math.floor(index / 9);
		let cellIndex: number = index % 9;
		let gridElement: HTMLInputElement = document.querySelector("#g" + rowIndex.toString() + cellIndex.toString()) as HTMLInputElement;
		grid[rowIndex][cellIndex] = Number(gridElement.value);
	}

	return grid;
}

function populateSudokuGrid(grid: number[][]) {
	grid.map((yarray, yIndex) => {
		yarray.map((xarray, xIndex) => {
			let gridElement: HTMLInputElement = document.querySelector("#g" + yIndex.toString() + xIndex.toString()) as HTMLInputElement;
			gridElement.value = xarray.toString();
		});
	});
}

function clearGrid() {
	let grid: number[][] = [...Array(9)].map(e => Array(9).fill(0));
	hideSolutionList();
	populateSudokuGrid(grid);
}

function hideSolutionList() {
	let sudokuResultsDiv: HTMLDivElement = document.getElementById("SudokuResults") as HTMLDivElement;
	sudokuResultsDiv.innerHTML = "";
	sudokuResultsDiv.className = "SudokuResultsDivInvisible";
}

function loadDemo() {
	clearGrid();
	let demoSelector: HTMLSelectElement = document.querySelector("#demoSelector") as HTMLSelectElement;
	prePopulateGrid(demoSelector.selectedIndex);
}

function prePopulateGrid(demoRequired: number) {
	let gridStart: number[][][] = [];
	//= [...Array(4)].map(a=>[...Array(9)].map(e => Array(9).fill(0)));
	let gridDemo1: number[][] = [
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

	let gridDemo2: number[][] = [
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
	let gridDemo3: number[][] = [
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

	let gridDemo4: number[][] = [
		// Mutiple solutions
		[0, 8, 0, 0, 0, 9, 7, 4, 3],
		[0, 5, 0, 0, 0, 8, 0, 1, 0],
		[0, 1, 0, 0, 0, 0, 0, 0, 0],
		[8, 0, 0, 0, 0, 5, 0, 0, 0],
		[0, 0, 0, 8, 0, 4, 0, 0, 0],
		[0, 0, 0, 3, 0, 0, 0, 0, 6],
		[0, 0, 0, 0, 0, 0, 0, 7, 0],
		[0, 3, 0, 5, 0, 0, 0, 8, 0],
		[9, 7, 2, 4, 0, 0, 0, 5, 0]
	];
	gridStart.push(gridDemo1);
	gridStart.push(gridDemo2);
	gridStart.push(gridDemo3);
	gridStart.push(gridDemo4);

	populateSudokuGrid(gridStart[demoRequired]);
}

function clickSolveButton() {
	let gridEnd: number[][] = readSudokuGrid();
	gridEnd = generate_display_grid(gridEnd);
	populateSudokuGrid(gridEnd);
}

function generate_display_grid(grid: number[][]): number[][] {
	let sudokuSolver: Sudoku.SolveSudoko = new Sudoko.SolveSudoko(grid);
	let x = sudokuSolver.solveSudoku();
	listOfGridResults = x;
	grid = listOfGridResults[0];
	if (listOfGridResults.length > 1) {
		loadSudokuGridResultsList(listOfGridResults.length);
	}

	return grid;
}
