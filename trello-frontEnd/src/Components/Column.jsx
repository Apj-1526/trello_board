import { useState } from 'react';

function Column({ title, status, tasks, addTask, deleteTask, moveTask, updateTask }) {
  const [input, setInput] = useState('');
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState('');

  const handleDrop = (e) => {
    const taskId = Number(e.dataTransfer.getData('taskId'));
    moveTask(taskId, status);
  };

  return (
    <div
      className="column"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <h2>{title}</h2>

      
      {status === 'todo' && (
        <div className="add-task">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="New task..."
          />
          <button
            onClick={() => {
              if (!input.trim()) return;
              addTask(input);
              setInput('');
            }}
          >
            Add
          </button>
        </div>
      )}

    
      {tasks
        .filter(task => task.status === status)
        .map(task => (
          <div
            key={task.id}
            className="task"
            draggable
            onDragStart={(e) =>
              e.dataTransfer.setData('taskId', task.id)
            }
          >
            
            {editId === task.id ? (
              <input
                className="edit-input"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                onKeyUp={(e) => {
                  if (e.key === 'Enter') {
                    updateTask(task.id, editTitle);
                    setEditId(null);
                  }
                }}
              />
            ) : (
              <span>{task.title}</span>
            )}

            <div className="actions">
              <button
                title="Edit"
                onClick={() => {
                  setEditId(task.id);
                  setEditTitle(task.title);
                }}
              >
                ✏️
              </button>

              <button
                title="Delete"
                onClick={() => deleteTask(task.id)}
              >
                ❌
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Column;
