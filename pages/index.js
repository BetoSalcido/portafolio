import React, { Fragment } from 'react';
import NavigationBar from '../components/navigation/navigation'
import Home from '../components/home/home';
import styles from '../styles/index.module.css'

const IndexPage = () => {
  return (
    <Fragment>
    <div className={styles.content}>
      <NavigationBar />
      <Home />
    </div>
    </Fragment>
  );

};

export default IndexPage;

