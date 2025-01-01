import React from 'react';
import classes from './notFound.module.css';

export default function NotFound({ message = 'Nothing Found!', linkRoute = '/', linkText = 'Go to home page' }) {
  return (
    <div className={classes.container}>
      <p>{message}</p>
      <a href={linkRoute}>{linkText}</a>
    </div>
  );
}
