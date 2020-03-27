namespace Sudoko {
	export interface ISolveSudoko {
		//checkPosition(y: number, x: number, n: number): boolean;
		solveSudoku(): number[][][];
		solutions: number;
	}

	//implements ISolveSudoko
	export class SolveSudoko implements ISolveSudoko {
		private listofcompletedgrids: number[][][] = [];

		public solutions: number = 0;

		constructor(private startingGrid: number[][]) {}

		private checkPosition(y: number, x: number, n: number): boolean {
			if (this.startingGrid[y][x] != 0) {
				return false;
			}
			for (let index: number = 0; index < 9; index++) {
				if (this.startingGrid[y][index] == n) {
					return false;
				}
			}

			for (let index: number = 0; index < 9; index++) {
				if (this.startingGrid[index][x] == n) {
					return false;
				}
			}

			let x0: number = Math.floor(x / 3) * 3;
			let y0: number = Math.floor(y / 3) * 3;

			for (let indexy: number = 0; indexy < 3; indexy++) {
				for (let indexx: number = 0; indexx < 3; indexx++) {
					if (this.startingGrid[y0 + indexy][x0 + indexx] == n) {
						return false;
					}
				}
			}

			return true;
		}

		private buildSolvedGrid(): boolean {
			let returnVal: boolean = true;
			let lindexy = 0;
			let lindexx = 0;

			for (let index = 0; index < 81; index++) {
				lindexy = Math.floor(index / 9);
				lindexx = index % 9;

				if (this.startingGrid[lindexy][lindexx] == 0) {
					returnVal = false;
					for (let numval: number = 1; numval < 10; numval++) {
						if (this.checkPosition(lindexy, lindexx, numval)) {
							this.startingGrid[lindexy][lindexx] = numval;
							returnVal = true;
							if (this.checkIsComplete()) {
								this.solutions = this.solutions + 1;

								this.addToListOfSolvedGrids();

								return false;
								break;
							} else {
								if (!this.buildSolvedGrid()) {
									this.startingGrid[lindexy][lindexx] = 0;
									returnVal = false;
								}
							}
						}
					}
					if (this.startingGrid[lindexy][lindexx] == 0) {
						break;
					}
				}
			}
			return returnVal;
		}

		// Build a copy of the completed grid as an array is a reference type if we dont copy the values the starting grid will be set in the listofcompletedgrids rather than the completed one.

		private addToListOfSolvedGrids() {
			let completedgrid: number[][] = [...Array(9)].map(e => Array(9).fill(0));
			for (let index = 0; index < 81; index++) {
				let lindexy = Math.floor(index / 9);
				let lindexx = index % 9;
				let value: number = this.startingGrid[lindexy][lindexx];
				completedgrid[lindexy][lindexx] = value;
			}
			this.listofcompletedgrids.push(completedgrid);
		}

		private checkIsComplete(): boolean {
			let complete = true;
			for (let index = 0; index < 81; index++) {
				let lindexy = Math.floor(index / 9);
				let lindexx = index % 9;
				if (this.startingGrid[lindexy][lindexx] == 0) {
					return false;
				}
			}
			return complete;
		}

		public solveSudoku(): number[][][] {
			this.buildSolvedGrid();
			return this.listofcompletedgrids;
		}
	}
}
