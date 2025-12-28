function Card({ task, deleteTask }) {
  const handleDragStart = (e) => {
    e.dataTransfer.setData('taskId', task.id)
  }

  return (
    <div
      className="card"
      draggable
      onDragStart={handleDragStart}
    >
      <span>{task.title}</span>
      <button onClick={() => deleteTask(task.id)}>✕</button>
    </div>
  )
}

export default Card
