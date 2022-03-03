const User = (props) => {
  const { id, firstName, lastName, email, gender, birthday, salary, phone } =
    props.user;

  const birthdayFormatted = new Date(birthday).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  const phoneFormatted = '(+84)' + phone.split('-').join('');

  return (
    <tr>
      <th scope='row'>{id}</th>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>{gender}</td>
      <td>{birthdayFormatted}</td>
      <td>{salary}</td>
      <td>{phoneFormatted}</td>
    </tr>
  );
};

export default User;
