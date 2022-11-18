import { Cleaner } from "./Cleaner";

export class Grid {
    /**
     * Creates an instance of Grid.
     * @param rows the number of rows in the grid
     * @param columns the number of columns in the grid
     * @param cleaner the cleaner to set in the grid
     */
    constructor(private rows: number, private columns: number, private cleaner?: Cleaner) {
        if (rows < 1) {
            throw new Error("rows must be positive");
        }
        if (columns < 1) {
            throw new Error("columns must be positive");
        }

        if (cleaner && (cleaner.getX() > columns || cleaner.getY() > rows)) {
            throw new Error("Cleaner is out of bounds");
        }
    }
    /**
     * Set cleaner in the grid
     * @param cleaner the cleaner to set in the grid
     */
    public setCleaner(cleaner: Cleaner): void {
        if (cleaner.getX() > this.columns || cleaner.getY() > this.rows) {
            throw new Error("Cleaner is out of bounds");
        }
        this.cleaner = cleaner;
    }
    /**
     * Get the number of rows in the grid
     * @returns the number of rows in the grid
     */
    public getRows(): number {
        return this.rows;
    }
    /**
     * Get the number of columns in the grid
     * @returns the number of columns in the grid
     */
    public getColumns(): number {
        return this.columns;
    }
    /**
     * Move cleaner following the intructions
     * @param instructions the instructions to execute
     */
    public moveCleaner(instructions: string): void {
        if (this.cleaner) {
            for (let i = 0; i < instructions.length; i++) {
                switch (instructions[i].toUpperCase()) {
                    case "L":
                        this.cleaner.turnLeft();
                        break;
                    case "R":
                        this.cleaner.turnRight();
                        break;
                    case "F":
                        if (this.isForwardPossible()) {
                            this.cleaner.moveForward();
                        } else {
                            throw new Error("Cleaner cannot move forward");
                        }
                        break;
                }
            }
            console.log("Final cleaner position in the grid:", this.getCleanerPosition());
        }
    }
    /**
     * Check if the cleaner can move forward
     * @returns true if the cleaner can move forward, false otherwise
     */
    public isForwardPossible(): boolean {
        if (this.cleaner) {
            switch (this.cleaner.getDirection()) {
                case "N":
                    return this.cleaner.getY() < this.rows;
                case "E":
                    return this.cleaner.getX() < this.columns;
                case "S":
                    return this.cleaner.getY() > 0;
                case "W":
                    return this.cleaner.getX() > 0;
            }
        }
        return false;
    }
    /**
     * A string representation of the position of the cleaner in the grid
     * @returns a string representation of the cleaner position in the grid
     */
    public getCleanerPosition(): string {
        if (this.cleaner) {
            return this.cleaner.toString();
        }
        return "";
    }
}