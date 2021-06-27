import React from 'react';
import Button from '../Button/Button';

import Typography from '../Typography';

import styles from './GetStarted.module.css';

const GetStarted = () => {
  return (
    <div className={styles['container']}>
      <Typography variant="h2">Get started with Undone</Typography>
      <div className={styles['description']}>
        <Typography>A better experience for your team, fewer headaches in your quest to get things done. Set yourself up for success in minutes.</Typography>
      </div>
      <Button width={440} rounded>Start free trial</Button>
    </div>
  )
};

export default GetStarted;

