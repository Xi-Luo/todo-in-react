"use client"

import {useState} from 'react'
function TodoListItem({ todoItem, changeDone }) {
    return (
        <div className="todo-list-item" >
            <div className="todo-list-item-content" >{ todoItem.content}</div>
            <div className="todo-list-item__foot" >
                <div className="todo-list-item-time" >{ todoItem.createTime}</div>
                <div className="todo-list-item-done" onClick={changeDone}>{todoItem.isDone?'✔':'Done'}</div>
            </div>
        </div>
    )
}

export default function TodoList() {
    const [todoData,setTodoData] = useState([
        { id:1,content: 'this is a todo task', createTime: '2020-02-02 12:22',isDone:true },
        { id:2,content: 'todo2', createTime: '2023-01-01 11:11', isDone: false },
        { id:3,content: 'todo2', createTime: '2023-01-01 11:11', isDone: false },
    ])
    function changeDone(index) {
        todoData[index].isDone = !todoData[index].isDone
        const list = [...todoData]
        setTodoData(list)
    }
    const todoList = todoData.map((todo,index) => <TodoListItem key={todo.id} todoItem={ todo} changeDone={()=>changeDone(index)}></TodoListItem>)
    return (
        <div>
            <div className="todo-list-title">TodoList</div>
            {todoList}
        </div>
    )
}