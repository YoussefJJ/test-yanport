import { Cleaner } from "../src/entities/Cleaner";
import { Grid } from "../src/entities/Grid";

describe("testing move", () => {
    let rows = 10;
    let columns = 10;
    let grid: Grid;
    let cleaner: Cleaner;
    beforeEach(() => {
        grid = new Grid(rows, columns);
    });
    describe("testing normal movement", () => {
        beforeEach(() => {
            cleaner = new Cleaner(0, 0, "N");
            grid.setCleaner(cleaner);
        });
        it("should move the cleaner forward", () => {
            // Arrange
            let instructions = "F";
            // Act
            grid.moveCleaner(instructions);
            // Assert
            expect(grid.getCleanerPosition()).toEqual("x = 0, y = 1, orientation = N");
        });
        it("should move the cleaner forward twice", () => {
            // Arrange
            let instructions = "FF";
            grid.setCleaner(cleaner);
            // Act
            grid.moveCleaner(instructions);
            // Assert
            expect(grid.getCleanerPosition()).toEqual("x = 0, y = 2, orientation = N");
        });
        it("should change orientation to east when turning right", () => {
            // Arrange
            let instructions = "R";
            grid.setCleaner(cleaner);
            // Act
            grid.moveCleaner(instructions);
            // Assert
            expect(grid.getCleanerPosition()).toEqual("x = 0, y = 0, orientation = E");
        });
        it("should change orientation to west when turning left", () => {
            // Arrange
            let instructions = "L";
            // Act
            grid.moveCleaner(instructions);
            // Assert
            expect(grid.getCleanerPosition()).toEqual("x = 0, y = 0, orientation = W");
        });
        it("should change orientation to south when turning right twice", () => {
            // Arrange
            let instructions = "RR";
            // Act
            grid.moveCleaner(instructions);
            // Assert
            expect(grid.getCleanerPosition()).toEqual("x = 0, y = 0, orientation = S");
        });
        it("should change orientation to south when turning left twice", () => {
            // Arrange
            let instructions = "LL";
            // Act
            grid.moveCleaner(instructions);
            // Assert
            expect(grid.getCleanerPosition()).toEqual("x = 0, y = 0, orientation = S");
        });
        it("should be facing original position when turning left 4 times in a row", () => {
            // Arrange
            let instructions = "LLLL";
            // Act
            grid.moveCleaner(instructions);
            // Assert
            expect(grid.getCleanerPosition()).toEqual("x = 0, y = 0, orientation = N");
        });
        it("should be facing original position when turning right 4 times in a row", () => {
            // Arrange
            let instructions = "RRRR";
            // Act
            grid.moveCleaner(instructions);
            // Assert
            expect(grid.getCleanerPosition()).toEqual("x = 0, y = 0, orientation = N");
        });
    });
    
    it("should throw an error when the cleaner is out of bounds", () => {
        // Arrange
        let instructions = "F";
        let posX = 0;
        let posY = 0;
        let direction = "S";
        let cleaner = new Cleaner(posX, posY, direction);
        grid.setCleaner(cleaner);
        // Act
        expect(() => {grid.moveCleaner(instructions);}).toThrowError("Cleaner cannot move forward");
    });
});