"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sudoku_solver_lib_1 = require("./sudoku_solver_lib");
var Sudoko1;
(function (Sudoko1) {
    class GenerateSudoko {
        generateThreeByThreeGrid() {
            let gridValues = this.randomSort([1, 2, 3, 4, 5, 6, 7, 8, 9]);
            let gridSize = 3;
            let lastElement = 0;
            let innerGrid = [...Array(gridSize)].map(e => Array(gridSize).fill(0));
            for (let rowIndex = 0; rowIndex < gridSize; rowIndex++) {
                for (let cellIndex = 0; cellIndex < gridSize; cellIndex++) {
                    innerGrid[rowIndex][cellIndex] = gridValues[lastElement];
                    lastElement++;
                }
            }
            return innerGrid;
        }
        randomSort(arrayToBeSorted) {
            return arrayToBeSorted
                .map(a => ({ sort: Math.random(), value: a }))
                .sort((a, b) => a.sort - b.sort)
                .map(a => a.value);
        }
        generatePosition() {
            return this.randomSort([0, 1, 2]);
        }
        buildStartingGrid() {
            let gridSize = 9;
            let innerGrid = [...Array(gridSize)].map(e => Array(gridSize).fill(0));
            let xPositions = this.generatePosition();
            let yPositions = this.generatePosition();
            for (let index = 0; index < 3; index++) {
                let xPosition = xPositions[index] * 3;
                let yPosition = yPositions[index] * 3;
                let tempGrid = this.generateThreeByThreeGrid();
                for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
                    for (let cellIndex = 0; cellIndex < 3; cellIndex++) {
                        innerGrid[yPosition + rowIndex][xPosition + cellIndex] = tempGrid[rowIndex][cellIndex];
                    }
                }
            }
            return innerGrid;
        }
        printGrid(displayGrid) {
            let square = 1;
            for (let YPosition = 0; YPosition < 9; YPosition++) {
                console.log(displayGrid[YPosition].map(a => a.toString()).join(" "));
            }
        }
        generateStartingGrid() {
            let grid = this.buildStartingGrid();
            let sudokuSolver = new sudoku_solver_lib_1.Sudoko.SolveSudoko(grid);
            grid = sudokuSolver.solveSudoku();
            this.printGrid(grid);
        }
        removeRandomValues(completedGrid) {
            for (let index = 0; index < 9; index++) { }
            return completedGrid;
        }
    }
    Sudoko1.GenerateSudoko = GenerateSudoko;
})(Sudoko1 || (Sudoko1 = {}));
let generator = new Sudoko1.GenerateSudoko();
generator.generateStartingGrid();
//# sourceMappingURL=sudoku_generator_lib.js.map