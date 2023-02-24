// Write your code here
import './index.css'

const TodoItem = props => {
  const {todosLists, deleteTodo} = props
  const {title, id} = todosLists
  const onDeleteButton = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-list">
      <div className="title-container">
        <p>{title}</p>
      </div>

      <div className="button-container">
        <button className="button" type="button" onClick={onDeleteButton}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
