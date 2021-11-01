

router.patch('/:id', (req, res, next) => {
	const id = req.params.id;
	const { message } = req.body;
const element = {...TODOS.find(elem => elem.id === id)};
	const element = TODOS.findIndex( res => res.id === id);
	TODOS[idx].message = message;
	res.status(200).json(element);
	
})

module.exports = router;

