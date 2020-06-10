import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import styles from './home.module.css';
import Link from 'next/link'

const Home = (props) => {

  const icons = ["/static/linkedin_ic.png", "/static/git_ic.png", "/static/mail_ic.png"];

  const listItem = icons.map((element, index) => (
    <Link href="/" key={index}>
      <img src={element} width="20px" className={styles.listItem}/>
    </Link>
  ));

  return (
    <Fragment>
      <div className={styles.wrapper}>
        <Grid container spacing={3}>
          <Grid item xs={4} align="center">
            <p>Hi I´m Beto Salcido</p>
            <h1 className={styles.h1}>Web and iOS developer</h1>
            <br />
            <ul className={styles.list}>
              {listItem}
            </ul>

          </Grid>
          <Grid item xs={8} align="center">
            <img src="/static/design.png" width="550px" />
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} align="center">
            <hr className={styles.hr}/>
          </Grid>
        </Grid>
      </div>
    </Fragment>

  );
}

export default Home;