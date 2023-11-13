"use client"
import { useState } from 'react'

export default function TodoInput({ todoEditInfo, createTodo, updateTodo, changeContent }) {
  // const [content, setContent] = useState('')
  function handleOnChange(e) {
    // setContent(e.target.value)
    changeContent(e.target.value)
  }
  function handleKeyPress(e) {
    console.log('handleKeyPress', e)
    if (e.key === "Enter") {
      e.preventDefault()
      if (todoEditInfo.id) {
        // 编辑
        updateTodo(todoEditInfo)

      } else {
        // 新增
        createTodo(todoEditInfo)
        // setContent('')
      }

    }
  }
  return (
    <div >
      <textarea
        className="todo-input"
        placeholder="please input todo..."
        type="text" value={todoEditInfo.content}
        onChange={handleOnChange}
        onKeyPress={handleKeyPress}></textarea>
    </div>
  )
}