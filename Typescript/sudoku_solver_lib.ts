namespace Sudoko {
	export class SolveSudoko {
		private grid: number[][] = [...Array(9)].map(e => Array(9).fill(0));

		constructor(startingGrid: number[][]) {
			this.grid = startingGrid;
		}

		private checkPosition(y: number, x: number, n: number): boolean {
			for (let index: number = 0; index < 9; index++) {
				if (this.grid[y][index] == n) {
					return false;
				}
			}

			for (let index: number = 0; index < 9; index++) {
				if (this.grid[index][x] == n) {
					return false;
				}
			}

			let x0: number = Math.floor(x / 3) * 3;
			let y0: number = Math.floor(y / 3) * 3;

			for (let indexy: number = 0; indexy < 3; indexy++) {
				for (let indexx: number = 0; indexx < 3; indexx++) {
					if (this.grid[y0 + indexy][x0 + indexx] == n) {
						return false;
					}
				}
			}

			return true;
		}

		public printGrid() {
			let square: number = 1;
			for (let YPosition: number = 0; YPosition < 9; YPosition++) {
				console.log(this.grid[YPosition].map(a => a.toString()).join(" "));
			}
		}

		private buildSolvedGrid(): boolean {
			let returnVal: boolean = true;

			for (let lindexy: number = 0; lindexy < 9; lindexy++) {
				for (let lindexx: number = 0; lindexx < 9; lindexx++) {
					if (this.grid[lindexy][lindexx] == 0) {
						returnVal = false;
						for (let numval: number = 1; numval < 10; numval++) {
							if (this.checkPosition(lindexy, lindexx, numval)) {
								this.grid[lindexy][lindexx] = numval;
								returnVal = true;
								let r = this.buildSolvedGrid();
								if (!r) {
									this.grid[lindexy][lindexx] = 0;
								}
							}
						}
						return returnVal;
					}
				}
			}
			return returnVal;
		}

		public solveSudoku(): number[][] {
			this.buildSolvedGrid();
			return this.grid;
		}
	}
}
