// Your code here.
var hash = "#";
var space = " ";
var board = "";
var size = 8;
for (var num = 0; num < size; num++) {
    for (var char = 0; char < size; char++) {
        if ((char + num) % 2 === 0) {
            board += space; 
        }
        else {
            board += hash; 
        }
    }
  board += "\n";
}

console.log(board);