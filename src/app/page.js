"use client"
// import TodoList from '@/components/todoList'
// import TodoInput from '@/components/todoInput'
// import { useState, useEffect } from 'react'
// import { getTodoList, addTodo, updateTodo } from '@/api/todo'
import Todo from "@/views/todo"

export default function Home() {
  // const mounted = true
  // const [todoData, setTodoData] = useState([])
  // async function get_todo_list() {
  //   const res = await getTodoList()
  //   setTodoData(res.data)
  // }
  // // 获取列表
  // useEffect(() => {
  //   get_todo_list()
  //   return () => { }
  // }, [mounted])

  // async function changeDone(index) {
  //   const todo = {
  //     ...todoData[index],
  //     isDone: !todoData[index].isDone
  //   }
  //   const res = await updateTodo(todo)
  //   setTodoData(res.data)
  // }
  // async function createTodo(content) {
  //   const res = await addTodo({
  //     content,
  //   })
  //   setTodoData(res.data)
  // }
  return (
    <main className="flex min-h-screen justify-between px-24 py-12">
      {/* <TodoInput createTodo={createTodo} ></TodoInput>
      <TodoList todoData={todoData} changeDone={changeDone}></TodoList> */}
      <Todo></Todo>
    </main>
  )
}
