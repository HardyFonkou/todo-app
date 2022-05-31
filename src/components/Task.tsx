import React, { useState } from 'react';
import { Todo } from '../models/TodoModel';
import './TaskStyle.css';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

interface Props{
    task: Todo;
    tasks: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const Task: React.FC<Props> = ({task, tasks, setTodos}) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTask, setTask] = useState(task.todo);

    const handleDelete = (id: number) => {
        setTodos(tasks.map((task) => task.id === id ? { ...task, isDelete: !task.isDelete } : task));
    }

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(tasks.map((task) => task.id === id ? { ...task, todo:editTask} : task));
        setEdit(false);
    }

  return (
    <form className='task' onSubmit={(e) => handleEdit(e, task.id)}>
        {
            edit ?
                <input className='edit_task_input' type='text' value={editTask} onChange={(e) => setTask(e.target.value)} />
                :
                <p>{task.todo}</p>
        }
        <div className='task_buttons'>
            <span className='icon'><AiFillEdit onClick={() => {
                if(!edit){
                    setEdit(!edit);
                }
            }}/></span>
            <span className='icon'><AiFillDelete onClick={() => handleDelete(task.id)} /></span>
        </div>
    </form>
  )
}

export default Task