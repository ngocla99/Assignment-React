import classes from './Email.module.css';
import EmailBox from '../components/email/EmailBox';

import { Outlet } from 'react-router-dom';

const FOLDERS = [
  'inbox',
  'finance',
  'travel',
  'personal',
  'spam',
  'drafts',
  'sent',
];

const Email = () => {
  return (
    <div className={classes.email}>
      <div className={classes['email-box']}>
        <EmailBox folders={FOLDERS} />
      </div>
      <Outlet />
    </div>
  );
};

export default Email;
