import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import styles from './navigation.module.css';
import Link from 'next/link'

const navigationBar = (props) => {
  const menu = ["home", "about", "works", "contact"];

  const listItem = menu.map((element, index) => (
    <Link href="/" key={index}>
      <a className={styles.listItem}>
        {element}
      </a>
    </Link>
  ));

  return (
    <Fragment>
      <div className={styles.content}>
        <Grid container spacing={3} className={styles.logoContainter}>
          <Grid item xs={3}>
          </Grid>

          <Grid item xs={9}>
            <ul className={styles.list}>
              {listItem}
            </ul>
          </Grid>
        </Grid>
      </div>
    </Fragment>

  );
}

export default navigationBar;