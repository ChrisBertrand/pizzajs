// var fs = require('fs');
 
// var contents = fs.readFileSync('small.in', 'utf8');
// console.log(contents);

// var rows, columns, min, max;
// var firstLine = contents.split(' ');

// console.log(firstLine);

class Pizza{
    constructor(){
        this.rows, this.columns, this.min, this.max;
        this.cells = [];
        this.all = [];
        this.slices = [];
    }
}

class Cell {
    constructor(x, y, t) {
      this.x = x;
      this.y = y;
      this.t = t;
      this.busy = false;
    }
}

var pizza = new Pizza();

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('small.in')
  });
   
  var lineCount = 1;

  lineReader.on('line', function (line) {
      console.log(lineCount);
    if (lineCount === 1) {
        var firstLine = line.split(' ');
        pizza.rows = firstLine[0];
        pizza.columns = firstLine[1];
        pizza.min = firstLine[2];
        pizza.max = firstLine[3];
    }
    else{
        var pieces = line.split('');

        pizza.cells.push(pieces.map((piece, x) => {
            const cell = new Cell(x, pizza.cells.length, piece);
            pizza.all.push(cell);
            return cell;
        }));
    }
    //console.log('index', lineCount);
    //console.log('Line from file:', line);
    lineCount++;
  });

  lineReader.on('close', function () {
    // All lines are read, file is closed now.
    runSolution();
    });

function runSolution(){
    console.log('vars', pizza.rows, pizza.columns, pizza.min, pizza.max);
    //console.log('pizza', pizza.all);

    printPizza();
}

function printPizza(){

    console.log('pz1', pizza.all);
}