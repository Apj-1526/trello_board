import { useEffect, useState } from 'react'
import Column from './Column'
import './style.css'
import { addTasks, deleteTasks, getTask, updateTask, updateTaskContent } from '../api'

function Board() {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        loadTasks();
    }, [])

    const loadTasks = async () => {
        const res = await getTask();
        setTasks(res.data);
    }

    const handleAdd = async (title) => {
        await addTasks({ title, status: 'todo' });
        loadTasks(); 
    };

    const handleUpdate = async (id, title) => {
    await updateTaskContent(id, title);
    loadTasks();
};



    const handleMove = async (id, status) => {
        await updateTask(id, status);
        loadTasks();
    }

    const handleDelete = async (id) => {
        await deleteTasks(id);
        loadTasks();
    }

    const addTask = (title) => {
        setTasks([
            ...tasks,
            { id: Date.now(), title, status: 'todo' }
        ])
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const moveTask = (id, newStatus) => {
        setTasks(
            tasks.map(task =>
                task.id === id ? { ...task, status: newStatus } : task
            )
        )
    }

    return (
        <div className="board">
            <Column
                title="Todo"
                status="todo"
                tasks={tasks}
                addTask={handleAdd}
                deleteTask={handleDelete}
                moveTask={handleMove}
                 updateTask={handleUpdate}
            />

            <Column
                title="Progress"
                status="progress"
                tasks={tasks}
                deleteTask={handleDelete}
                moveTask={handleMove}
                updateTask={handleUpdate}
            />

            <Column
                title="Done"
                status="done"
                tasks={tasks}
                deleteTask={handleDelete}
                moveTask={handleMove}
                updateTask={handleUpdate}
            />

        </div>
    )
}

export default Board