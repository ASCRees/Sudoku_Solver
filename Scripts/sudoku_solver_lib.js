var Sudoko;
(function (Sudoko) {
    class SolveSudoko {
        constructor(startingGrid) {
            this.grid = [...Array(9)].map(e => Array(9).fill(0));
            this.grid = startingGrid;
        }
        checkPosition(y, x, n) {
            if (this.grid[y][x] != 0) {
                return false;
            }
            for (let index = 0; index < 9; index++) {
                if (this.grid[y][index] == n) {
                    return false;
                }
            }
            for (let index = 0; index < 9; index++) {
                if (this.grid[index][x] == n) {
                    return false;
                }
            }
            let x0 = Math.floor(x / 3) * 3;
            let y0 = Math.floor(y / 3) * 3;
            for (let indexy = 0; indexy < 3; indexy++) {
                for (let indexx = 0; indexx < 3; indexx++) {
                    if (this.grid[y0 + indexy][x0 + indexx] == n) {
                        return false;
                    }
                }
            }
            return true;
        }
        printGrid() {
            let square = 1;
            for (let YPosition = 0; YPosition < 9; YPosition++) {
                console.log(this.grid[YPosition].map(a => a.toString()).join(" "));
            }
        }
        buildSolvedGrid() {
            let returnVal = true;
            for (let lindexy = 0; lindexy < 9; lindexy++) {
                for (let lindexx = 0; lindexx < 9; lindexx++) {
                    if (this.grid[lindexy][lindexx] == 0) {
                        returnVal = false;
                        for (let numval = 1; numval < 10; numval++) {
                            if (this.checkPosition(lindexy, lindexx, numval)) {
                                this.grid[lindexy][lindexx] = numval;
                                returnVal = true;
                                if (!this.buildSolvedGrid()) {
                                    this.grid[lindexy][lindexx] = 0;
                                    returnVal = false;
                                }
                            }
                        }
                        if (this.grid[lindexy][lindexx] == 0) {
                            return returnVal;
                        }
                    }
                }
            }
            return returnVal;
        }
        solveSudoku() {
            this.buildSolvedGrid();
            return this.grid;
        }
    }
    Sudoko.SolveSudoko = SolveSudoko;
})(Sudoko || (Sudoko = {}));
//# sourceMappingURL=sudoku_solver_lib.js.map