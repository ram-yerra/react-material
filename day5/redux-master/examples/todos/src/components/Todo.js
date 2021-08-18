import React from 'react'
import PropTypes from 'prop-types'

// import { connect } from 'react-redux'
// import { deleteTodo } from '../actions'

// const Todo = ({ onClick, completed, text, id, dispatch }) => (
const Todo = ({ onClick, completed, text, id, onDeleteClick }) => (
  <li style={{'display': 'flex','marginBottom': '10px'}}>
    <div onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
      'cursor': 'pointer', 
      'marginRight': '10px'
    }}>{text}</div>
    {/* <button onClick={()=>{deleteTodo(id)}}> Delete </button> */}
    <button onClick={onDeleteClick}> Delete </button>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

// export default connect()(Todo)
export default Todo
