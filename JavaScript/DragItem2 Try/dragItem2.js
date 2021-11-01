function drag(e) {
	e.dataTransfer.setData('pairid', e.target.id);
	e.dataTransfer.setData('dragid', e.target.parentElement.id);
}

function overContainer(e) {
	e.preventDefault();
}

function allowDrop(e) {
	var parent = e.dataTransfer.getData('pairid');
	var child = e.dataTransfer.getData('dragid');
	
	if(e.target.draggable) {
		e.target.parentElement.appendChild(document.getElementById(parent));
		document.getElementById(child).appendChild(e.target);
	}
}

