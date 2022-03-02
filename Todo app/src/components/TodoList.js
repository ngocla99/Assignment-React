import classes from './TodoList.module.css';

import { useState } from 'react';

import Input from './Input';
import ItemsList from './ItemsList';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const getTaskHandler = (task) => {
    setTasks((prevTasks) => {
      return [{ content: task, completed: false }, ...prevTasks];
    });
  };

  const toggleCompletedTaskHandler = (id) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      const { content, completed } = updatedTasks[id];
      updatedTasks[id] = { content: content, completed: !completed };

      return updatedTasks;
    });
  };

  const deleteTaskHandler = (id) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((_, i) => i !== id);
      return updatedTasks;
    });
  };

  return (
    <div className={`${classes.todo} mx-auto`}>
      <Input onGetTask={getTaskHandler} />
      <ItemsList
        tasks={tasks}
        onToggleItem={toggleCompletedTaskHandler}
        onDeleteItem={deleteTaskHandler}
      />
    </div>
  );
};

export default TodoList;
