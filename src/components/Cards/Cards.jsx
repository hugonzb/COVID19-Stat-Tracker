import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core'; 
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faSkull, faVirus } from "@fortawesome/free-solid-svg-icons";
import cx from 'classnames';

const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate} }) => {
    if(!confirmed) {
        return <div className = {styles.loading}>
                Loading Statistics... Please input a correct country name.
            </div>
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center"> 
                <Grid item component ={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <div className={styles.text}>
                            <div className={styles.icon}><FontAwesomeIcon icon={faVirus} size="3x"/></div>
                            <Typography color="textSecondary" gutterBottom>Infected</Typography>
                            <Typography variant="h5"><CountUp start={0} end={confirmed.value} duration={3} separator=","/></Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                            <br></br>
                            <Typography variant="body2"><b>Number of Total Infections</b></Typography>
                        </div>
                    </CardContent>
                </Grid>
                <Grid item component ={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <div className={styles.text}>
                            <div className={styles.icon}><FontAwesomeIcon icon={faHeart} size="3x"/></div>
                            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                            <div className={styles.count}><Typography variant="h5"><CountUp start={0} end={recovered.value} duration={3} separator=","/></Typography></div>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                            <br></br>
                            <Typography variant="body2"><b>Number of Recoveries</b></Typography>
                        </div>
                    </CardContent>
                </Grid>
                <Grid item component ={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <div className={styles.text}>
                            <div className={styles.icon}><FontAwesomeIcon icon={faSkull} size="3x"/></div>
                            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                            <Typography variant="h5"><CountUp start={0} end={deaths.value} duration={3} separator=","/></Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                            <br></br>
                            <Typography variant="body2"><b>Number of Deaths</b></Typography>
                        </div>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;