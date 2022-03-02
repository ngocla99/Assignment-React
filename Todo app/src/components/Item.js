import classes from './Item.module.css';

const Item = (props) => {
  let { content, completed } = props.task;
  const id = props.id;

  const toggleCompletedTask = () => {
    props.onToggle(id);
  };

  const deleteTask = () => {
    props.onDelete(id);
  };

  const task = `${content} ${completed ? 'completed' : ''}`;

  return (
    <li className={`${classes.task} ${completed ? classes.completed : ''}`}>
      <p onClick={toggleCompletedTask}>{task}</p>
      <span className={classes.close} onClick={deleteTask}>
        <i className='fas fa-times close'></i>
      </span>
    </li>
  );
};

export default Item;
