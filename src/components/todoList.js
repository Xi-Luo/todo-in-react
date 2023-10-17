function TodoListItem({todoItem}) {
    return (
        <div className="todo-list-item" >
            <div className="todo-list-item-content" >{ todoItem.content}</div>
            <div className="todo-list-item__foot" >
                <div className="todo-list-item-time" >{ todoItem.createTime}</div>
                <div className="todo-list-item-done" >Done</div>
            </div>
        </div>
    )
}

export default function TodoList() {
    const todoList = [{content:'this is a todo task',createTime:'2020-02-02 12:22'}]
    return (
        <div>
            <div className="todo-list-title">TodoList</div>
            <TodoListItem todoItem={ todoList[0]}></TodoListItem>
        </div>
    )
}