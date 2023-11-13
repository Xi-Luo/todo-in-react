"use client"
import { formatTime } from "@/utils/commonFunc"


function TodoListItem({ todoItem, changeDone, editTodo,removeTodo }) {
    return (
        <div className="todo-list-item" >
            {
                todoItem.isDone ?
                    <del className="todo-list-item-content-del">{todoItem.content}</del> :
                    <div className="todo-list-item-content" >{todoItem.content}</div>
            }

            <div className="todo-list-item__foot flex justify-between items-center" >
                <div className="todo-list-item-time" >{formatTime(todoItem.createTime)}</div>
                <div>
                    {!todoItem.isDone && <span className="todo-list-item-edit " onClick={editTodo}>edit</span>}
                    {!todoItem.isDone && <span className="todo-list-item-edit " onClick={removeTodo}>del</span>}
                    <span className="todo-list-item-done " onClick={changeDone}>{todoItem.isDone ? '✔' : ' '}</span>

                </div>
            </div>
        </div>
    )
}

export default function TodoList({ todoData, changeDone, editTodo,removeTodo }) {

    const todoList = todoData.map((todo, index) => <TodoListItem key={todo.id} todoItem={todo} changeDone={() => changeDone(index)} editTodo={() => editTodo(todo)} removeTodo={() => removeTodo(index)}></TodoListItem>)
    return (
        <div className="todo-list">
            <div className="todo-list-title">TodoList</div>
            <div className="todo-list-body">
                {todoList}
            </div>

        </div>
    )
}