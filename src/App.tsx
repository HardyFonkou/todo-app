import React from 'react'
import { useState } from 'react';
import './App.css';
import AddTaskInput from './components/AddTaskInput';
import Task from './components/Task';
import { Todo } from './models/TodoModel';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo){
      setTodos([...todos, { id: Date.now(), todo: todo, isDelete: false }]);
      setTodo("");
    }
    
  }

  return (
    <div className="App">
      <AddTaskInput todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <div className="task_list">
        {todos.map(todo => todo.isDelete !== true ?
            <Task key={todo.id}  task={todo} tasks={todos} setTodos={setTodos} /> : ''
          )
        }
      </div>
    </div>
  );
}

export default App;
