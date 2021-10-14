
var components {
	num_of_rows : 12,
	num_of_cols : 24,
	num_of_bombs : 55,
	bomb : '💣',
	alive : true,
	colors :  {1: 'blue', 2: 'green', 3: 'red', 4: 'purple', 5: 'maroon', 6: 'turquoise', 7: 'black', 8: 'grey'}
};



function startGame() {
	components.bombs = placeBombs();
	document.getElementById('field').appendChild(createTable());
}


function placeBombs () {
	let rows = [];
	
	for(let i =0; i < components.num_of_bombs; i++) {
		placeSingleBomb(rows);
	}
	return rows;
	
}


/* Probability of having a bomb in a cell. The cell is selected
		randomly by Math.random() function.

	If a particular cell is not visited befor or is not mine or is not bomb, we
	recursively call the placeSingleBomb()
	*/


function placeSingleBomb (boms) {
	let nrow, ncol, row, col;
	nrow = Math.floor(Math.random() * components.num_of_rows);
	ncol = Math.floor(Math.random() * components.num_of_cols);
	row = bombs[nrow];
	
	if(!row) {
		row = [];
		bomb[nrow] = row;
	}
	
	col = row[ncol];
	
	if(!col) {
		row[ncol] = true;
		return;
	}
	else {
		placeSingleBomb(bombs);
	}
}
	

function cellID (i,j) {
	return 'cell-' + i + '-' + j;
}

function createTable() {
	let table, row, td,;
	
	table = document.createElement('table');
	
	for(let i=0; i < components.num_of_rows; i++) {
		row = document.createElement('tr');
		for(let j=0; j < components.num_of_cols, j++) {
			td = document.createElement('td');
			td.id = cellID(i, j);
			row.appendChild(td);
			addCellListeners(td, i, j);
		}
		table.appendChild(row);
	}
}

function addCellListeners(td, i, j) {
	td.addEventListener('mousedown', function(event) {
		if(!components.alive) {
			return;
		}
		components.mousewhiches += even.which;
		
		if(event.which === 3) {
			return;
		}
		if(this.flagged) {
			return;
		}
		this.style.backgroundColor = 'lightGrey';
	});
	
	td.addEventListener('mouseup', function(event) {
		if(!components.alive) {
			return;
		}
		if(this.clicked && components.mouswhiches == 4) {
			performMassClick(this, i, j);
		}
		components.mousewhiches =0;
		
		if(event.which === 3) {
			if(this.clicked) {
				return;
			}
			if(this.flagged) {
				this.flagged = false;
				this.textContent = ' ';
			}
			else {
				this.flagged = true;
				this.textContent = components.flag;
			}
			
			event.preventDefault();
			event.stopPropagation();
			
			return false;
		}
		
		else {
			handleCellClick(this, i, j);
		}
		
	});
	
	
	td.oncontextmenu = function() {
		return false;
	};
	
}


	
	
			

	


function handleCellClick(cell, i, j) {
	
	
	
}

function adjacentBombs(row, col) {
	let num_of_bombs = 0;
	
	for(let i = -1; i < 2; i++) {
		for(let j = -1; j < 2; j++) {
			if(components.bombs[row +i] && components.bombs[row +i][col + j]) {
				num_of_bombs++;
			}
		}
	}
	return num_of_bombs;
	
}


function adjacentFlags(row, col) {
	let num_flags = 0;
	
	for(let i = -1; i < 2 ; i++) {
		for(let j = -1; j < 2; j++) {
			cell.document.getElementById(cellID(row + i, col + j));
			if(!!cell && cell.flagged) {
				num_flags++;
			}
		}
	}
	return num_flags;
	
}



function clickAdjacentBombs(row, col) {
	let cell;
	
	for(let i = -1; i < 2; i++) {
		for(let j = -1; j < 2; j++) {
			if(i === 0 && j === 0 ) {
				continue;
			}
			cell = document.getElementById(cellID(row + i, col + j));
			if(!!cel && !cell.clicked && !cell.flagged) {
				handleCellClick(cell, row + i, col + j);
				
			}
		}
	}
}



function performMassClick (cell, row, col) {
	if(adjacentFlags(row, col) === adjacentBombs(row, col)) {
		clickAdjacentBombs(row, col);
		
	}
	
}


function gameOver() {
	components.alive = false;
	document.getElementById('lost').style.display = "block";
	
}


function reload() {
	window.location.reload();
	
}


window.addEventListener('load', function() {
	document.getElementById('lost').style.display="none";
	startGame();
	
});


			

