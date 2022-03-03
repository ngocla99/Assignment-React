let activateInput = false;
const SelectedOrder = (props) => {
  const changeOrderHandler = (event) => {
    activateInput = true;

    props.onOrder(event.target.value);
  };

  const filterHandler = (event) => {
    props.onFilter(event.target.value);
  };

  return (
    <>
      <h1 className='d-inline'>OrderBy</h1>
      <select
        className='form-select w-25 d-inline'
        aria-label='Default select example'
        onChange={changeOrderHandler}
      >
        <option defaultValue>Select field to sort</option>
        <option value='id'>Id</option>
        <option value='firstName'>First Name</option>
        <option value='lastName'>Last Name</option>
        <option value='email'>Email</option>
        <option value='birthday'>Birthday</option>
        <option value='salary'>Salary</option>
      </select>
      <input
        type='text'
        className='form-control w-25 d-inline'
        disabled={!activateInput}
        onChange={filterHandler}
      />
    </>
  );
};

export default SelectedOrder;
