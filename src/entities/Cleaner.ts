import { Direction } from "./Direction";

export class Cleaner {
    /**
     * The X coordinate of the cleaner in the grid
     */
    private x: number;
    /**
     * The Y coordinate of the cleaner in the grid
     */
    private y: number;
    /**
     * The direction the cleaner is facing
     */
    private direction: Direction;

    /**
     * Create a new cleaner
     * @param x the X coordinate of the cleaner
     * @param y the Y coordinate of the cleaner
     * @param direction the direction the cleaner is facing
     */
    constructor(x: number, y: number, direction: string) {
        if (x < 0) {
            throw new Error("x must be non-negative");
        }
        if (y < 0) {
            throw new Error("y must be non-negative");
        }
        if (["N", "E", "S", "W"].indexOf(direction) === -1) {
            throw new Error("direction must be N, E, S, or W");
        }
        this.direction = ["N", "E", "S", "W"].indexOf(direction);
        this.x = x;
        this.y = y;
    }
    /**
     * String representation of the cleaner
     * @returns a string representation of the cleaner
     */
    public toString(): string {
        return `x = ${this.x}, y = ${this.y}, orientation = ${["N", "E", "S", "W"][this.direction]}`;
    }
    /**
     * Get the X coordinate of the cleaner
     * @returns the X coordinate of the cleaner
     */
    public getX(): number {
        return this.x;
    }
    /**
     * Get the Y coordinate of the cleaner
     * @returns the Y coordinate of the cleaner
     */
    public getY(): number {
        return this.y;
    }
    /**
     * Get the direction the cleaner is facing
     * @returns the direction of the cleaner
     */
    public getDirection(): string {
        return ["N", "E", "S", "W"][this.direction];
    }
    /**
     * Turn the cleaner right (e.g. change direction from north to east)
     */
    public turnRight(): void {
        this.direction = (this.direction + 1) % 4;
    }
    /**
     * Turn the cleaner left (e.g. change direction from north to west)
     */
    public turnLeft(): void {
        this.direction = (this.direction + 3) % 4;
    }

    /**
     * Move the cleaner forward one unit in the direction it is facing and update the X and Y coordinates
     */
    public moveForward(): void {
        switch (this.direction) {
            case Direction.North:
                this.y++;
                break;
            case Direction.East:
                this.x++;
                break;
            case Direction.South:
                this.y--;
                break;
            case Direction.West:
                this.x--;
                break;
        }
    }
}