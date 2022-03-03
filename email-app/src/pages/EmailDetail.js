import { useParams } from 'react-router-dom';

import classes from './EmailDetail';

const EmailDetail = (props) => {
  const params = useParams();
  const messageId = params.id;

  console.log(props.messages);

  const [message] = props.messages.filter(
    (message) => message['_id'] === messageId
  );

  //   console.log(message);

  return (
    <>
      <div className={classes['email-header']}>
        <div>
          <h4>{message.folder}</h4>
          <p>
            {message.from}
            <i className='fa fa-long-arrow-alt-right'></i> {message.to}
          </p>
        </div>
        <div>
          <div>
            <p>{message.date}| date: "MMMM d, y, h:mm:ss a"</p>
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
        <p></p>
      </div>
    </>
  );
};

export default EmailDetail;
