import { useParams } from 'react-router-dom';

import classes from './EmailDetail.module.css';
import messages from '../messages.json';
import { Fragment } from 'react';

const EmailDetail = () => {
  const params = useParams();
  const messageId = params.id;

  const [message] = messages.filter((message) => message['_id'] === messageId);

  const dateTimeFormat = (date) => {
    const year = new Date(date).getFullYear();
    const month = new Date(date).toLocaleDateString('en-US', {
      month: 'long',
    });
    const day = String(new Date(date).getDate()).padStart(2, '0');
    const hours = String(new Date(date).getHours()).padStart(2, '0');
    const minutes = String(new Date(date).getMinutes()).padStart(2, '0');
    const seconds = String(new Date(date).getSeconds()).padStart(2, '0');

    return `${month} ${day},${year} ${hours}:${minutes}:${seconds} ${
      hours >= 12 ? 'PM' : 'AM'
    }`;
  };

  const breakLineFormat = (str) => {
    return str.replace(/(\r\n|\r|\n)/g, '<div class="mb-2"></div>');
  };

  return (
    <Fragment>
      <div className={classes['email-header']}>
        <div>
          <h4>{message.subject}</h4>
          <p>
            {message.from}
            <i className='fa fa-long-arrow-alt-right'></i> {message.to}
          </p>
        </div>
        <div>
          <div>
            <p>{dateTimeFormat(message.date)}</p>
          </div>
          <div>
            <button type='button' className='btn btn-primary me-1'>
              <i className='fa fa-reply me-2'></i>Reply
            </button>
            <button type='button' className='btn btn-primary me-1'>
              <i className='fa fa-forward me-2'></i>Forward
            </button>
            <button type='button' className='btn btn-primary me-1'>
              <i className='fas fa-times me-2'></i>Delete
            </button>
          </div>
        </div>
      </div>

      <div className={classes['email-body']}>
        <p
          dangerouslySetInnerHTML={{ __html: breakLineFormat(message.body) }}
        ></p>
      </div>
    </Fragment>
  );
};

export default EmailDetail;
