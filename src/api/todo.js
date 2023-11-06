import axios from "axios";

const getTodoList = () => axios.get('/todo/list')
const removeTodo = () => axios.post('/todo/remove')
const addTodo = () => axios.post('/todo/add')
const updateTodo = () => axios.post('/todo/update')

export {
	getTodoList,
	addTodo,
	removeTodo,
	updateTodo
}