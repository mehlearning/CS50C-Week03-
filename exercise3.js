let size = 8;
let nextChar = ' ';
let nextRow = '';

for (let n = 1; n <= (size * size); n++) {
	nextRow += nextChar;


	if (n % size == 0) {
		nextRow += '\n';
      
      	if (size % 2 == 1) {
      		nextCHar = (nextChar == ' ')? '#': ' ';
        }
	}
	else {
		nextChar = (nextChar == ' ')? '#': ' ';
	}
}

console.log(nextRow);