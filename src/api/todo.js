import request from "@/utils/axios"
function getTodoList() {
	return request({ url: '/todo/list', method: 'get' })
}
function removeTodo(id) {
	return request({ url: '/todo/remove', method: 'post', params: { id } })
}
function addTodo(data) {
	return request({ url: '/todo/add', method: 'post', data: data })
}
function updateTodo(data) {
	return request({ url: '/todo/update', method: 'post', data: data })
}

export {
	getTodoList,
	addTodo,
	removeTodo,
	updateTodo
}