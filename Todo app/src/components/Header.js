import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>To-Do List ✏️</h1>
      <p>Enter text into the input field to add items to your list.</p>
      <p>Click the "X" to remove the items from your list.</p>
      <p>Click the item to mark it as complete.</p>
    </header>
  );
};

export default Header;
