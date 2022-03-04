import classes from './Email.module.css';
import EmailBox from '../components/email/EmailBox';
import { useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

const FOLDERS = [
  'inbox',
  'finance',
  'travel',
  'personal',
  'spam',
  'drafts',
  'sent',
];

const Email = (props) => {
  const params = useParams();
  const userId = params.userId;

  props.onChangeUserId(userId);

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
