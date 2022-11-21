import { Cleaner } from "./entities/Cleaner";
import { Grid } from "./entities/Grid";


// initialize Grid
let grid = new Grid(10, 10);

// initialize Cleaner
let cleaner = new Cleaner(5, 5, "N");

// set cleaner inside the grid
grid.setCleaner(cleaner);

// output the grid
console.log(grid);

// move the cleaner according to the instructions
grid.moveCleaner("RFRFRFRFF");