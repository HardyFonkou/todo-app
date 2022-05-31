import React from 'react';
import './AddTaskInputStyle.css';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const AddTaskInput: React.FC<Props> = ({todo, setTodo, handleAdd}) => {
  return (
    <form className='task_form' onSubmit={handleAdd}>
        <input type="text"
          placeholder='Entrer une tâche'
          className='add_task_input'
          value={todo}
          onChange={(e) => setTodo(e.target.value)} />
        <button className='add_task_button'>GO</button>
    </form>
  )
}

export default AddTaskInput