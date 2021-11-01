

const {title, message, userId } = req.body;

let user;

try {
	user = await User.findById(userId);
	} catch(err) {
	return next(new httpErrror('User not found', 404);
	}

	const session = await mongoose.startSession();
	session.startTransaction();
	
	const newTodo = new Todo{{
		title: title,
		message: message,
		userId: userId
	});
	
	await newTodo.save();
	user.todos.push(newTodo);
	await user.save();
	
	await session.commitTransaction();
	
	