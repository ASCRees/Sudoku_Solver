let grid: number[][] = [
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

function checkPosition(y: number, x: number, n: number): boolean {
	for (let index: number = 0; index < 9; index++) {
		if (grid[y][index] == n) {
			return false;
		}
	}

	for (let index: number = 0; index < 9; index++) {
		if (grid[index][x] == n) {
			return false;
		}
	}

	let x0: number = Math.floor(x / 3) * 3;
	let y0: number = Math.floor(y / 3) * 3;

	for (let indexy: number = 0; indexy < 3; indexy++) {
		for (let indexx: number = 0; indexx < 3; indexx++) {
			if (grid[y0 + indexy][x0 + indexx] == n) {
				return false;
			}
		}
	}

	return true;
}

function printGrid() {
	let square: number = 1;
	for (let YPosition: number = 0; YPosition < 9; YPosition++) {
		console.log(grid[YPosition].map(a => a.toString()).join(" "));
	}
}

function solveudoku(): boolean {
	let returnVal: boolean = true;

	for (let lindexy: number = 0; lindexy < 9; lindexy++) {
		for (let lindexx: number = 0; lindexx < 9; lindexx++) {
			if (grid[lindexy][lindexx] == 0) {
				returnVal = false;
				for (let numval: number = 1; numval < 10; numval++) {
					if (checkPosition(lindexy, lindexx, numval)) {
						grid[lindexy][lindexx] = numval;
						returnVal = true;
						let r = solveudoku();
						if (!r) {
							grid[lindexy][lindexx] = 0;
						}
					}
				}
				return returnVal;
			}
		}
	}
	return returnVal;
}

printGrid();
solveudoku();
console.log("");
console.log("");

printGrid();
