let grid = [
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
function checkPosition(y, x, n) {
    for (let index = 0; index < 9; index++) {
        if (grid[y][index] == n) {
            return false;
        }
    }
    for (let index = 0; index < 9; index++) {
        if (grid[index][x] == n) {
            return false;
        }
    }
    let x0 = Math.floor(x / 3) * 3;
    let y0 = Math.floor(y / 3) * 3;
    for (let indexy = 0; indexy < 3; indexy++) {
        for (let indexx = 0; indexx < 3; indexx++) {
            if (grid[y0 + indexy][x0 + indexx] == n) {
                return false;
            }
        }
    }
    return true;
}
function printGrid() {
    let square = 1;
    for (let YPosition = 0; YPosition < 9; YPosition++) {
        console.log(grid[YPosition].map(a => a.toString()).join(" "));
    }
}
function solveudoku() {
    let returnVal = true;
    for (let lindexy = 0; lindexy < 9; lindexy++) {
        for (let lindexx = 0; lindexx < 9; lindexx++) {
            if (grid[lindexy][lindexx] == 0) {
                returnVal = false;
                for (let numval = 1; numval < 10; numval++) {
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
//# sourceMappingURL=sudoku_solver_lib.js.map