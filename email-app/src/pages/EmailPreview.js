import classes from './EmailPreview.module.css';

import { Outlet } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';

const EmailPreview = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const folder = params.subject;
  const messageId = params.id;

  const messagesFolder = props.messages.filter(
    (message) => message.folder === folder
  );

  const dateFormat = (date) => {
    const year = new Date(date).getFullYear();
    const month = String(new Date(date).getMonth()).padStart(2, '0');
    const day = String(new Date(date).getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  };

  const truncateFormat = (str, number = 20) => {
    if (str.length > number) {
      return str.slice(0, number) + '...';
    } else {
      return str;
    }
  };

  const showMessageHandler = (id) => {
    navigate(id);
  };

  return (
    <>
      <div className={classes['email-preview']}>
        <table className='table table-sm table-borderless'>
          <thead>
            <tr>
              <th scope='col' style={{ width: '25%' }}>
                Sender
              </th>
              <th scope='col' style={{ width: '60%' }}>
                Subject
              </th>
              <th scope='col' style={{ width: '15%' }}>
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {messagesFolder.map((message) => {
              return (
                <tr
                  key={message['_id']}
                  onClick={() => showMessageHandler(message['_id'])}
                  className={messageId === message['_id'] ? classes.active : ''}
                >
                  <td>{truncateFormat(message.from)}</td>
                  <td>{message.subject}</td>
                  <td>{dateFormat(message.date)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className={classes['email-detail']}>
        <Outlet />
      </div>
    </>
  );
};

export default EmailPreview;
