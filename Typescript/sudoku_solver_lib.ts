namespace Sudoko {
	export interface ISolveSudoko {
		checkPosition(y: number, x: number, n: number): boolean;
		solveSudoku(): number[][][];
	}

	//implements ISolveSudoko
	export class SolveSudoko implements ISolveSudoko {
		private grid: number[][] = [...Array(9)].map(e => Array(9).fill(0));
		private listofcompletedgrids: number[][][] = [];
		//new Array([]);

		public solutions: number = 0;

		constructor(startingGrid: number[][]) {
			this.grid = startingGrid;
		}

		public checkPosition(y: number, x: number, n: number): boolean {
			if (this.grid[y][x] != 0) {
				return false;
			}
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

		private buildSolvedGrid(): boolean {
			let returnVal: boolean = true;
			let lindexy = 0;
			let lindexx = 0;
			for (let index = 0; index < 81; index++) {
				lindexy = Math.floor(index / 9);
				lindexx = index % 9;
				if (this.grid[lindexy][lindexx] == 0) {
					returnVal = false;
					for (let numval: number = 1; numval < 10; numval++) {
						if (this.checkPosition(lindexy, lindexx, numval)) {
							this.grid[lindexy][lindexx] = numval;
							returnVal = true;
							if (this.CheckIsComplete()) {
								this.solutions = this.solutions + 1;

								//let currListItem: number = this.listofcompletedgrids ? this.listofcompletedgrids.length : 0;

								let testgrid: number[][] = [...Array(9)].map(e => Array(9).fill(0));

								for (let index = 0; index < 81; index++) {
									let lindexy = Math.floor(index / 9);
									let lindexx = index % 9;
									let value: number = this.grid[lindexy][lindexx];
									testgrid[lindexy][lindexx] = value;
									// var test = this.grid.slice();
									//let test = this.grid.map(a=>{return a})
								}
								this.listofcompletedgrids.push(testgrid);

								// var test = this.grid.slice();
								// this.listofcompletedgrids.push(test);

								// this.listofcompletedgrids.push(
								// 	this.grid.map(a => {
								// 		return a;
								// 	})
								// );

								//this.listofcompletedgrids.push(...this.grid);
								// console.log("1:Is Complete Returning +" + numval + " - " + this.solutions);
								// let square: number = 1;
								// for (let YPosition: number = 0; YPosition < 9; YPosition++) {
								// 	console.log(this.grid[YPosition].map(a => a.toString()).join(" "));
								// }
								// console.log("");
								return false;
								break;
							} else {
								if (!this.buildSolvedGrid()) {
									this.grid[lindexy][lindexx] = 0;
									returnVal = false;
								}
							}
						}
					}
					if (this.grid[lindexy][lindexx] == 0) {
						break;
					}
				}
			}
			// if (this.CheckIsComplete()) {
			// 	this.solutions = this.solutions + 1;
			// 	console.log("2:Is Complete Returning +" + this.solutions);
			// }
			//this.grid[lindexy][lindexx] = 0;
			// if (this.grid[lindexy][lindexx] == 0) {
			// 	break;
			// }
			return returnVal;

			// for (let lindexy: number = 0; lindexy < 9; lindexy++) {
			// 	for (let lindexx: number = 0; lindexx < 9; lindexx++) {
			// 		if (this.grid[lindexy][lindexx] == 0) {
			// 			returnVal = false;
			// 			for (let numval: number = 1; numval < 10; numval++) {
			// 				if (this.checkPosition(lindexy, lindexx, numval)) {
			// 					this.grid[lindexy][lindexx] = numval;
			// 					returnVal = true;
			// 					if (!this.buildSolvedGrid()) {
			// 						this.grid[lindexy][lindexx] = 0;
			// 						returnVal = false;
			// 					}
			// 				}
			// 			}
			// 			if (this.grid[lindexy][lindexx] == 0) {
			// 				lindexy = lindexx = 9;
			// 				break;
			// 			}
			// 		}
			// 	}
			// }
			// this.CheckIsComplete(2);
			// return returnVal;
		}

		private CheckIsComplete(): boolean {
			let complete = true;
			for (let index = 0; index < 81; index++) {
				let lindexy = Math.floor(index / 9);
				let lindexx = index % 9;
				if (this.grid[lindexy][lindexx] == 0) {
					return false;
				}
			}
			return complete;
		}

		private getListOfGrids() {
			return this.listofcompletedgrids;
		}

		public solveSudoku(): number[][][] {
			this.buildSolvedGrid();
			let x = this.getListOfGrids();
			return x;
		}
	}
}
