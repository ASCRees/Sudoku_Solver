"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sudoku_solver_lib_1 = require("./sudoku_solver_lib");
var SudokoGenerate;
(function (SudokoGenerate) {
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
            //let grid: number[][] = this.buildStartingGrid();
            let sampleStartingGrid1 = [
                // Single solution
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
            let sampleStartingGrid2 = [
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
            let sudokuSolver = new sudoku_solver_lib_1.Sudoko.SolveSudoko(sampleStartingGrid1);
            let numberofSolutions = sudokuSolver.solutions;
            console.log("1.Number of solutions " + numberofSolutions);
            let endinggrid1 = sudokuSolver.solveSudoku();
            numberofSolutions = sudokuSolver.solutions;
            console.log("2.Number of solutions " + numberofSolutions.toString());
        }
        removeRandomValues(completedGrid) {
            for (let index = 0; index < 9; index++) { }
            return completedGrid;
        }
    }
    SudokoGenerate.GenerateSudoko = GenerateSudoko;
})(SudokoGenerate = exports.SudokoGenerate || (exports.SudokoGenerate = {}));
let generator = new SudokoGenerate.GenerateSudoko();
generator.generateStartingGrid();
//# sourceMappingURL=sudoku_generator_lib.js.map