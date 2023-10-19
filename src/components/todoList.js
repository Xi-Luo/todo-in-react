function TodoListItem({todoItem}) {
    return (
        <div className="todo-list-item" >
            <div className="todo-list-item-content" >{ todoItem.content}</div>
            <div className="todo-list-item__foot" >
                <div className="todo-list-item-time" >{ todoItem.createTime}</div>
                <div className="todo-list-item-done" >{todoItem.isDone?'✔':'Done'}</div>
            </div>
        </div>
    )
}

export default function TodoList() {
    const todoData = [
        { id:1,content: 'this is a todo task', createTime: '2020-02-02 12:22',isDone:true },
        { id:2,content: 'todo2', createTime: '2023-01-01 11:11', isDone: false },
        { id:3,content: 'todo2', createTime: '2023-01-01 11:11', isDone: false },
    ]
    const todoList = todoData.map(todo => <TodoListItem key={todo.id} todoItem={ todo}></TodoListItem>)
    return (
        <div>
            <div className="todo-list-title">TodoList</div>
            {todoList}
        </div>
    )
}