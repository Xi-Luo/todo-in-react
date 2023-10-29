"use client"
import { useState } from 'react'

export default function TodoInput({ createTodo}){ 
  const [content, setContent] = useState('')
  function handleOnChange(e) {
    console.log('handleOnChange',e)
    setContent(e.target.value)

  }
  function handleKeyPress(e) {
     console.log('handleKeyPress',e)
    if (e.key === "Enter") {
      e.preventDefault()
      console.log('handleKeyPress', e.key)
      createTodo(content)
      setContent('')
    }
  }
  return (
    <div >
      <textarea
        className="todo-input"
        placeholder="please input todo..."
        type="text" value={content}
        onChange={handleOnChange}
        onKeyPress={handleKeyPress}></textarea>
    </div>
  )
}