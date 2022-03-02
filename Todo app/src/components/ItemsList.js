import Item from './Item';

const ItemsList = (props) => {
  return (
    <ul className='m-0 p-0'>
      {props.tasks.map((task, i) => (
        <Item
          task={task}
          key={i}
          id={i}
          onToggle={props.onToggleItem}
          onDelete={props.onDeleteItem}
        />
      ))}
    </ul>
  );
};

export default ItemsList;
