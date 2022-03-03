import classes from './EmailBox.module.css';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EmailBox = (props) => {
  const params = useParams();
  const navigate = useNavigate();

  const initialFolder = params.subject || '';

  const [activeFolder, setActiveFolder] = useState(initialFolder);

  useEffect(() => {
    const folder = params.subject || '';
    setActiveFolder(folder);
  }, [params.subject]);

  const getFolder = (folder) => {
    navigate(`/messages/0/${folder}`);
  };

  return (
    <div className={classes['email-box']}>
      <ul className={classes['folders-list']}>
        {props.folders.map((folder, i) => {
          return (
            <li
              key={i}
              className={`${classes['folder-item']} ${
                activeFolder === folder ? classes.active : ''
              }`}
              onClick={() => getFolder(folder)}
            >
              <a>
                <i
                  className={`far ${
                    activeFolder === folder ? 'fa-folder-open' : 'fa-folder'
                  }`}
                ></i>
                {` ${folder}`}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default EmailBox;
