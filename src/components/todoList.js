"use client"
import { formatTime } from "@/utils/commonFunc"


function TodoListItem({ todoItem, changeDone }) {
    return (
        <div className="todo-list-item" >
            <div className="todo-list-item-content" >{todoItem.content}</div>
            <div className="todo-list-item__foot flex justify-between items-center" >
                <div className="todo-list-item-time" >{formatTime(todoItem.createTime)}</div>
                <div className="todo-list-item-done " onClick={changeDone}>{todoItem.isDone ? '✔' : 'Done'}</div>
            </div>
        </div>
    )
}

export default function TodoList({ todoData, changeDone }) {
    const todoList = todoData.map((todo, index) => <TodoListItem key={todo.id} todoItem={todo} changeDone={() => changeDone(index)}></TodoListItem>)
    return (
        <div className="todo-list">
            <div className="todo-list-title">TodoList</div>
            <div className="todo-list-body">
                {todoList}
            </div>

        </div>
    )
}