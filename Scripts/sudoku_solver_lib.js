var Sudoko;
(function (Sudoko) {
    //implements ISolveSudoko
    class SolveSudoko {
        constructor(startingGrid) {
            this.startingGrid = startingGrid;
            this.listofcompletedgrids = [];
            this.solutions = 0;
        }
        checkPosition(y, x, n) {
            if (this.startingGrid[y][x] != 0) {
                return false;
            }
            for (let index = 0; index < 9; index++) {
                if (this.startingGrid[y][index] == n) {
                    return false;
                }
            }
            for (let index = 0; index < 9; index++) {
                if (this.startingGrid[index][x] == n) {
                    return false;
                }
            }
            let x0 = Math.floor(x / 3) * 3;
            let y0 = Math.floor(y / 3) * 3;
            for (let indexy = 0; indexy < 3; indexy++) {
                for (let indexx = 0; indexx < 3; indexx++) {
                    if (this.startingGrid[y0 + indexy][x0 + indexx] == n) {
                        return false;
                    }
                }
            }
            return true;
        }
        buildSolvedGrid() {
            let returnVal = true;
            let lindexy = 0;
            let lindexx = 0;
            for (let index = 0; index < 81; index++) {
                lindexy = Math.floor(index / 9);
                lindexx = index % 9;
                if (this.startingGrid[lindexy][lindexx] == 0) {
                    returnVal = false;
                    for (let numval = 1; numval < 10; numval++) {
                        if (this.checkPosition(lindexy, lindexx, numval)) {
                            this.startingGrid[lindexy][lindexx] = numval;
                            returnVal = true;
                            if (this.checkIsComplete()) {
                                this.solutions = this.solutions + 1;
                                this.addToListOfSolvedGrids();
                                return false;
                                break;
                            }
                            else {
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
        addToListOfSolvedGrids() {
            let completedgrid = [...Array(9)].map(e => Array(9).fill(0));
            for (let index = 0; index < 81; index++) {
                let lindexy = Math.floor(index / 9);
                let lindexx = index % 9;
                let value = this.startingGrid[lindexy][lindexx];
                completedgrid[lindexy][lindexx] = value;
            }
            this.listofcompletedgrids.push(completedgrid);
        }
        checkIsComplete() {
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
        solveSudoku() {
            this.buildSolvedGrid();
            return this.listofcompletedgrids;
        }
    }
    Sudoko.SolveSudoko = SolveSudoko;
})(Sudoko || (Sudoko = {}));
//# sourceMappingURL=sudoku_solver_lib.js.map