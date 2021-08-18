import React from 'react'
import { connect } from 'react-redux'
import { addTodo, deleteAllTodos } from '../actions'

const AddTodo = ({ dispatch }) => {
  let input

  let handleDeleteTodos = () => {
    dispatch(deleteAllTodos());
  }

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
        <button onClick={handleDeleteTodos}>
          Delete All
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
