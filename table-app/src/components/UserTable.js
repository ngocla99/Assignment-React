import User from './User';

const UserTable = (props) => {
  const users = props.users;

  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope='col'>Id</th>
          <th scope='col'>First Name</th>
          <th scope='col'>Last Name</th>
          <th scope='col'>Email</th>
          <th scope='col'>Gender</th>
          <th scope='col'>Birthday</th>
          <th scope='col'>Salary</th>
          <th scope='col'>Phone</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <User user={user} key={user.id} />
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
