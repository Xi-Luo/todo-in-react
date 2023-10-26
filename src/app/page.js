"use client"
import TodoList from '@/components/todoList'
import TodoInput from '@/components/todoInput'
import {useState} from 'react'

export default function Home() {
  const [todoData,setTodoData] = useState([
        { id:0,content: 'this is a todo task', createTime: '2020-02-02 12:22',isDone:true },
        { id:1,content: 'todo2', createTime: '2023-01-01 11:11', isDone: false },
        { id:2,content: 'todo2', createTime: '2023-01-01 11:11', isDone: false },
    ])
    function changeDone(index) {
        todoData[index].isDone = !todoData[index].isDone
        const list = [...todoData]
        setTodoData(list)
    }
  function createTodo(content) { 
    const list = [...todoData, {
      id: todoData.length,
      content,
      createTime: new Date(),
      isDone:false
    }]
    setTodoData(list)
  }
  return (
    <main className="flex min-h-screen justify-between p-24">
      <TodoInput createTodo={createTodo} ></TodoInput>
      <TodoList todoData={todoData}  changeDone={changeDone}></TodoList>
    </main>
  )
}
