import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core'; 
import CountUp from 'react-countup';

import styles from './Cards.module.css';
import CountryPicker from '../CountryPicker/CountryPicker';
const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate} }) => {
    if(!confirmed) {
        return 'Loading Statistics...';
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center"> 
                <Grid item component ={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5"><CountUp start={0} end={confirmed.value} duration={3} separate=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component ={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5"><CountUp start={0} end={recovered.value} duration={3} separate=","/></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recoveries</Typography>
                    </CardContent>
                </Grid>
                <Grid item component ={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5"><CountUp start={0} end={deaths.value} duration={3} separate=","/></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of deaths</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;