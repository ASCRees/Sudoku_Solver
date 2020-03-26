//const Sudokovar = require('../../../Scripts/sudoku_solver_lib.js');
describe('Test CheckPosition', () => {

    var gridDemo;
    var sudoku1;

    beforeAll(() => {
        gridDemo = [
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
        sudoku1 = new Sudoko.SolveSudoko(gridDemo);
    });


    it('Check Position x=1, y=0 is 5', () => {
        let y = 8;
        let x = 0;
        let n = 5;

        var result = gridDemo[y][x] == 5;
        expect(result).toBe(true);
    });

    it('Check Position x=5,y=1 can be 7', () => {
        let y = 1;
        let x = 5;
        let n = 7;

        var result = sudoku1.checkPosition(y, x, n);
        expect(result).toBe(true);
    });

    it('Check Position x=0 and y=2 cant be 6', () => {
        let y = 2;
        let x = 0;
        let n = 6;

        var result = sudoku1.checkPosition(y, x, n);
        expect(result).toBe(false);
    });
    it('Check Position x=6 and y=7 cant be 5. Check Y axis.', () => {
        let y = 7;
        let x = 6;
        let n = 5;

        var result = sudoku1.checkPosition(y, x, n);
        expect(result).toBe(false);
    });

    it('Check Position x=6 and y=7 can be 3. Check Y axis.', () => {
        let y = 7;
        let x = 6;
        let n = 3;

        var result = sudoku1.checkPosition(y, x, n);
        expect(result).toBe(true);
    });
    it('Check Position x=6 and y=7 cant be 4. Check X axis.', () => {
        let y = 7;
        let x = 6;
        let n = 4;

        var result = sudoku1.checkPosition(y, x, n);
        expect(result).toBe(false);
    });

    it('Check Position x=7 and y=6 can be 3. Check X axis.', () => {
        let y = 6;
        let x = 7;
        let n = 3;

        var result = sudoku1.checkPosition(y, x, n);
        expect(result).toBe(true);
    });

    it('Check Position x=6 and y=7 cant be 9. Check square.', () => {
        let y = 7;
        let x = 6;
        let n = 9;

        var result = sudoku1.checkPosition(y, x, n);
        expect(result).toBe(false);
    });

    it('Check Position x=8 and y=6 can be 4. Check square.', () => {
        let y = 6;
        let x = 8;
        let n = 4;

        var result = sudoku1.checkPosition(y, x, n);
        expect(result).toBe(true);
    });
});

describe('Test CheckPosition', () => {

    var gridDemo;

    beforeAll(() => {
        gridDemo = [
            [2, 8, 6, 1, 5, 9, 7, 4, 3],
            [3, 5, 4, 7, 6, 8, 9, 1, 2],
            [7, 1, 9, 2, 4, 3, 5, 6, 8],
            [8, 2, 3, 6, 1, 5, 4, 9, 7],
            [6, 9, 7, 8, 2, 4, 1, 3, 5],
            [1, 4, 5, 3, 9, 7, 8, 2, 6],
            [5, 6, 8, 9, 3, 1, 2, 7, 4],
            [4, 3, 1, 5, 7, 2, 6, 8, 9],
            [9, 7, 2, 4, 8, 6, 3, 5, 1]
        ];
    });


    it('Check Position grid is complete', () => {
        let sudoku1 = new Sudoko.SolveSudoko(gridDemo);
        let result = sudoku1.checkIsComplete();
        expect(result).toBe(true);
    });

    it('Check Position grid is not complete', () => {

        let tempGrid = [
            [0, 8, 6, 1, 5, 9, 7, 4, 3],
            [3, 5, 4, 7, 6, 8, 9, 1, 2],
            [7, 1, 9, 2, 4, 3, 5, 6, 8],
            [8, 2, 3, 6, 1, 5, 4, 9, 7],
            [6, 9, 7, 8, 2, 4, 1, 3, 5],
            [1, 4, 5, 3, 9, 7, 8, 2, 6],
            [5, 6, 8, 9, 3, 1, 2, 7, 4],
            [4, 3, 1, 5, 7, 2, 6, 8, 9],
            [9, 7, 2, 4, 8, 6, 3, 5, 1]
        ];;
        let sudoku1 = new Sudoko.SolveSudoko(tempGrid);
        let result = sudoku1.checkIsComplete();
        expect(result).toBe(false);
    });
});

describe('Test AddToListOfSolvedGrids', () => {

    var gridDemo;
    var sudoku1;

    beforeAll(() => {
        gridDemo = [
            [2, 8, 6, 1, 5, 9, 7, 4, 3],
            [3, 5, 4, 7, 6, 8, 9, 1, 2],
            [7, 1, 9, 2, 4, 3, 5, 6, 8],
            [8, 2, 3, 6, 1, 5, 4, 9, 7],
            [6, 9, 7, 8, 2, 4, 1, 3, 5],
            [1, 4, 5, 3, 9, 7, 8, 2, 6],
            [5, 6, 8, 9, 3, 1, 2, 7, 4],
            [4, 3, 1, 5, 7, 2, 6, 8, 9],
            [9, 7, 2, 4, 8, 6, 3, 5, 1]
        ];
    });


    it('Check Grid is added to completed grid list', () => {
        sudoku1 = new Sudoko.SolveSudoko(gridDemo);
        sudoku1.addToListOfSolvedGrids();
        expect((sudoku1.listofcompletedgrids.length > 0)).toBe(true);
    });


});