import { useRef } from 'react';

import classes from './Input.module.css';

const Input = (props) => {
  const taskInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const task = taskInputRef.current.value;
    props.onGetTask(task);

    taskInputRef.current.value = '';
  };

  return (
    <form className={`${classes['todo-input']} mt-4`} onSubmit={submitHandler}>
      <input
        className={classes.input}
        ref={taskInputRef}
        id='task'
        type='text'
        placeholder='Input to do'
      />
      <button type='submit' className={classes['button-add']}>
        <i className='fas fa-plus-circle'></i>
      </button>
    </form>
  );
};

export default Input;
