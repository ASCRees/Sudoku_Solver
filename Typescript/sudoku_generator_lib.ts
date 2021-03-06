import { Sudoko } from "./sudoku_solver_lib";

export namespace SudokoGenerate {
	interface IGenerateSudoku {
		generateThreeByThreeGrid(): number[][];
		buildStartingGrid(): number[][];
		printGrid(displayGrid: number[][]);
		generateStartingGrid();
		removeRandomValues(completedGrid: number[][]): number[][];
	}

	export class GenerateSudoko implements IGenerateSudoku {
		public generateThreeByThreeGrid(): number[][] {
			let gridValues: number[] = this.randomSort([1, 2, 3, 4, 5, 6, 7, 8, 9]);

			let gridSize: number = 3;
			let lastElement = 0;
			let innerGrid: number[][] = [...Array(gridSize)].map(e => Array(gridSize).fill(0));
			for (let rowIndex: number = 0; rowIndex < gridSize; rowIndex++) {
				for (let cellIndex: number = 0; cellIndex < gridSize; cellIndex++) {
					innerGrid[rowIndex][cellIndex] = gridValues[lastElement];
					lastElement++;
				}
			}
			return innerGrid;
		}

		private randomSort(arrayToBeSorted: number[]): number[] {
			return arrayToBeSorted
				.map(a => ({ sort: Math.random(), value: a }))
				.sort((a, b) => a.sort - b.sort)
				.map(a => a.value);
		}

		private generatePosition(): number[] {
			return this.randomSort([0, 1, 2]);
		}

		public buildStartingGrid(): number[][] {
			let gridSize: number = 9;
			let innerGrid: number[][] = [...Array(gridSize)].map(e => Array(gridSize).fill(0));

			let xPositions: number[] = this.generatePosition();
			let yPositions: number[] = this.generatePosition();

			for (let index: number = 0; index < 3; index++) {
				let xPosition: number = xPositions[index] * 3;
				let yPosition: number = yPositions[index] * 3;

				let tempGrid: number[][] = this.generateThreeByThreeGrid();

				for (let rowIndex: number = 0; rowIndex < 3; rowIndex++) {
					for (let cellIndex: number = 0; cellIndex < 3; cellIndex++) {
						innerGrid[yPosition + rowIndex][xPosition + cellIndex] = tempGrid[rowIndex][cellIndex];
					}
				}
			}

			return innerGrid;
		}

		public printGrid(displayGrid: number[][]) {
			let square: number = 1;
			for (let YPosition: number = 0; YPosition < 9; YPosition++) {
				console.log(displayGrid[YPosition].map(a => a.toString()).join(" "));
			}
		}

		public generateStartingGrid() {
			//let grid: number[][] = this.buildStartingGrid();

			let sampleStartingGrid1: number[][] = [
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

			let sampleStartingGrid2: number[][] = [
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

			let sudokuSolver: Sudoko.SolveSudoko = new Sudoko.SolveSudoko(sampleStartingGrid1);
			let numberofSolutions: number = sudokuSolver.solutions;
			console.log("1.Number of solutions " + numberofSolutions);
			let endinggrid1: [number[][]] = sudokuSolver.solveSudoku();
			numberofSolutions = sudokuSolver.solutions;

			console.log("2.Number of solutions " + numberofSolutions.toString());
		}

		public removeRandomValues(completedGrid: number[][]): number[][] {
			for (let index = 0; index < 9; index++) {}
			return completedGrid;
		}
	}
}

let generator = new SudokoGenerate.GenerateSudoko();

generator.generateStartingGrid();
