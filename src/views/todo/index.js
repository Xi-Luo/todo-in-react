"use client"
import TodoList from '@/components/todoList'
import TodoInput from '@/components/todoInput'
import { useState, useEffect, useReducer } from 'react'
import { getTodoList, addTodo, updateTodo,removeTodo } from '@/api/todo'

export default function Todo() {
	const mounted = true
	const [todoData, setTodoData] = useState([])
	const [todoEditInfo, setTodoEditInfo] = useState({ content: '' })

	async function get_todo_list() {
		const res = await getTodoList()
		setTodoData(res.data)
	}
	// 获取列表
	useEffect(() => {
		get_todo_list()
		return () => { }
	}, [mounted])

	async function changeDone(index) {
		const todo = {
			...todoData[index],
			isDone: !todoData[index].isDone
		}
		const res = await updateTodo(todo)
		setTodoData(res.data)
	}
	async function createTodo(todoInfo) {
		const res = await addTodo({
			content: todoInfo.content,
		})
		setTodoData(res.data)
		setTodoEditInfo({ content: '' })
	}
	async function update_todo(todoInfo) {
		await updateTodo(todoInfo)
		setTodoEditInfo({ content: '' })
		get_todo_list()
	}
	async function remove_todo(index) {
		const res = await removeTodo(todoData[index].id)
		get_todo_list()
	}
	function edit_todo(todoInfo) {
		setTodoEditInfo(todoInfo)
	} 
	return (
		<>
			<TodoInput todoEditInfo={todoEditInfo} createTodo={createTodo} updateTodo={update_todo} changeContent={(content) => setTodoEditInfo({ ...todoEditInfo, content })}></TodoInput>
			<TodoList todoData={todoData} changeDone={changeDone} editTodo={edit_todo} removeTodo={remove_todo}></TodoList>
		</>
	)
}
