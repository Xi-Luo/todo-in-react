function TodoListItem() {
    return (
        <div class="todoListItem">
            <div class="todoListItemContent"></div>
            <div class="todoListItemFoot">
                <div class="todoListItemTime"></div>
                <div class="todoListItemDone">Done</div>
            </div>
        </div>
    )
}

export default function TodoList() {
    return (
        <div>
            <div class="todoListTitle">TodoList</div>
            <TodoListItem></TodoListItem>
        </div>
    )
}