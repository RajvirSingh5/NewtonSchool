

var components = { 
	num_of_rows : 9,
	num_of_cols: 9,
	num_of_bombs: 10,
	bomb: '💣',
	alive: true,
	colors : {1 : 'blue', 2: 'green', 3: 'red', 4: 'purple', 
				5: 'maroon', 6: 'turquoise', 7: 'black', 8: 'grey' }
				
}



/* startGame() will call two functions placeBombs() and createTable()  */

function startGame() {
	components.bombs = placeBombs();
	document.getElementById('field').appendChild(createTable());
	
}


// placeBombs()

function placeBombs() {
	let i, rows = [];
	for(i = 0; i < components.num_of_bombs; i++) {
		placeSingleBomb(rows);
	}
	return rows;
}


/* In placeSingleBomb(), probablity of having a bomin in cell is selected by Math.random() .
If the particular cell is not clicked befor, or is not mine/bomb, we recursively call the placeSingleBomb().
 */

function placeSingleBomb(bombs) {
	let nrow, ncol, row, col;
	nrow = Math.floor(Math.random() * components.num_of_rows);
	ncol = Math.floor(Math.random() * components.num_of_cols);
	row = bombs[nrow];

	if(!row) {
		row = [];
		bombs[nrow] = row;
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


// create Table() function

function cellID(i, j) {
	return 'cell-' + i + '-' + j;;
}

function createTable() {
	let table, row, td, i, j;
	table = document.createElement('table');

	for(i = 0; i < components.num_of_rows; i++) {
		row = document.createElement('tr');
		for(j = 0; j < components.num_of_cols; j++) {
			td = document.createElement('td');
			td.id = cellID(i, j);
			row.appendChild(td);
			addCellListeners(td, i, j);
		}
		table.appendChild(row);
	}
	return table;
}



//addcellListeners()

function addCellListeners(td, i, j) {
	td.addEventListener('mousedown', function(event) {
		if(!components.alive) {
			return;
		}
		components.mousewhiches += event.which;
		if(event.which === 3) {
			return;
		}

		if(this.flagged) {
			return;
		}
		this.style.backgroundColor = 'lightGrey';
	});

	td.addEventListener('mouseup', function(event){
		if(!components.alive) {
			return;
		}

		if(this.clicked && components.mousewhiches == 4) {
			performMassClick(this, i, j);
		}
		components.mousewhiches = 0;

		if(event.which === 3) {
			if(this.clicked) {
				return;
			}
			if(this.flagged) {
				this.flagged = false;
				this.textContent = '';
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


/* Function to handle to click events in the unclicked cells  */

function handleCellClick(cell, i, j) {
	if(!components.alive) {
		return;
	}

	if(cell.flagged) {
		return;
	}

	cell.clicked = true;

	if(components.bombs[i][j]) {
		cell.style.color = 'red';
		cell.textContent = components.bomb;
		gameOver();
	}
	else {
		cell.style.backgroundColor = 'lightGrey';
		num_of_bombs = adjacentBombs(i, j);
		if(num_of_bombs) {
			cell.style.color = components.colors[num_of_bombs];
			cell.textContent = num_of_bombs;
		}
		else {
			clickAdjacentBombs(i, j);
		}
	}
}



/*adjacentBombs() and adjacentFlags() returns the states of ajacnet cells */ 

function adjacentBombs(row, col) {
	let i, j, num_of_bombs;
	num_of_bombs = 0;

	for(i = -1; i < 2; i++) {
		for(j = -1; j < 2; j++) {
			if(components.bombs[row + 1] && components.bombs[row + i][col + j]) {
				num_of_bombs++;
			}
		}
	}
	return num_of_bombs;

}


function adjacentFlags(row, col) {
	let i, j, num_flags;
	num_flags = 0;

	for(i = -1; i < 2; i++) {
		for(j = -1; j < 2; j++) {
			cell = document.getElementById(cellID(row + i, col + j));
			if(!!cell && cell.flagged) {
				num_flags++;
			}
		}
	}
	return num_flags;
}





function clickAdjacentBombs(row, col) {
	let i, j, cell;

	for(i  = -1; i < 2; i++) {
		for(j = -1; j < 2; j++) {
			if(i === 0 && j === 0) {
				continue;
			}
			cell = document.getElementById(cellID(row + i, col + j));
			if(!!cell && !cell.clicked && !cell.flagged) {
				handleCellClick(cell, row + i, col + j);
			}
		}
	}
}



function performMassClick(cell, row, col) {
	if(adjacentFlags(row, col) === adjacentBombs(row, col)) {
		clickAdjacentBombs(row, col);
	}
}


/* Losing and restarting the game */

function gameOver() {
	components.alive = false;
	document.getElementById('lost').style.display="block";
}


function reload() {
	window.location.reload();
}



/* startGame() will be invoked when page loads. This is done by the addEventListener() method on the window DOM with 'load' parameter.*/ 


window.addEventListener('load', function() {
	document.getElementById('lost').style.display = "none";
	startGame();
});
