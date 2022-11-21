import { Cleaner } from "../src/entities/Cleaner";
import { Grid } from "../src/entities/Grid";


describe("testing initialize", () => {
    it ("should throw an error if grid has negative row bound", () => {
        // Arrange
        let rows = -1;
        let columns = 10;
        // Assert
        expect(() => new Grid(rows, columns)).toThrowError("rows must be positive");
    });
    it ("should throw an error if grid has negative column bound", () => {
        // Arrange
        let rows = 10;
        let columns = -1;
        // Assert
        expect(() => new Grid(rows, columns)).toThrowError("columns must be positive");
    });
    it("should throw an error if cleaner has negative x position", () => {
        // Arrange
        let posX = -1;
        let posY = 5;
        let direction = "N";
        // Assert
        expect(() => new Cleaner(posX, posY, direction)).toThrowError("x must be non-negative");
    });
    it("should throw an error if cleaner has negative y position", () => {
        // Arrange
        let posX = 5;
        let posY = -1;
        let direction = "N";
        // Assert
        expect(() => new Cleaner(posX, posY, direction)).toThrowError("y must be non-negative");
    });
    it("should throw an error if cleaner has x position greater than grid columns", () => {
        // Arrange
        let rows = 10;
        let columns = 10;
        let posX = 11;
        let posY = 5;
        let direction = "N";
        let cleaner = new Cleaner(posX, posY, direction);
        // Assert
        expect(() => new Grid(rows, columns, cleaner)).toThrowError("Cleaner is out of bounds");
    });
    it("should throw an error if cleaner has y position greater than grid rows", () => {
        // Arrange
        let rows = 10;
        let columns = 10;
        let posX = 5;
        let posY = 11;
        let direction = "N";
        let cleaner = new Cleaner(posX, posY, direction);
        // Assert
        expect(() => new Grid(rows, columns, cleaner)).toThrowError("Cleaner is out of bounds");
    });
})