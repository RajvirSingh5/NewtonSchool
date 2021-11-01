const mongoClient1 = require('mongodb').MongoClient;

const url = 'mongodb://dummyUser<password>@cluster0.mongodb.net/myFirstDatabase?rtyWrites';

const createTodo = async (req, res, next) => {
	
const {title, messasge } = req.body;
	
	const obj = {
		title: title;
		messasge: messasge
	}
	
	const client = new MongoClient(url);
	
	try{
		await client.connect();
		const client.db();
		const result = await db.collection('Todos').insertOne(obj);
	} catch (error) {
		next(new HttpError('Cannot connect to DB', 500));
	}
	
	client.close();
	res.status(201).json(obj);
}

const getTodoList = (req, res, next) => {
	const client = new MongoClient(url);
	tyr{
		await client.connect();
		const db = client.db();
		const todos = db.collection('todos').find().toArray()
	} catch(error) {
		next(new HttpError('Cannot connect to DB', 500));

}

module.exports = {
	createTodo: createTodo;
}

client.close();
res.status(200).json(results);


}





