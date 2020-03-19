//const Sudokovar = require('../../../Scripts/sudoku_solver_lib.js');
describe('Test CheckPosition', () => {

    var gridDemo;
    var sudoku1;

    beforeAll(() => {
        gridDemo = [
            [1, 5, 3, 8, 4, 6, 9, 7, 2],
            [6, 8, 4, 1, 9, 0, 0, 5, 3],
            [0, 7, 0, 0, 2, 0, 6, 0, 0],
            [9, 0, 0, 7, 0, 5, 0, 3, 6],
            [5, 3, 0, 0, 6, 0, 0, 2, 9],
            [8, 4, 0, 2, 0, 9, 0, 0, 7],
            [0, 0, 5, 0, 8, 0, 0, 4, 0],
            [3, 1, 0, 0, 0, 0, 2, 0, 0],
            [4, 6, 0, 0, 0, 1, 7, 0, 0]
        ];
        sudoku1 = new Sudoko.SolveSudoko(gridDemo);
    });

    //   beforeEach(function() {s


    //   });

    it('Check Position 6,5 can be 7', () => {
        let y = 6;
        let x = 5;
        let n = 7;

        var result = sudoku1.checkPosition(y, x, n);
        expect(result).toBe(true);
    });
});