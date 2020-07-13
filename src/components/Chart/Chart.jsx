import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({ data: {confirmed, recovered, deaths}, country }) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const initialDailyData = await fetchDailyData();
            setDailyData(initialDailyData)
        }
        fetchAPI();
    }, []);

    const lineChart = (
        dailyData.length ? (<Line data={{
            labels: dailyData.map(({date}) => date),
            datasets: [{
                data: dailyData.map(({confirmed}) => confirmed),
                label: 'Infected',
                borderColor: 'blue',
                fill: true,
            }, {
                data: dailyData.map(({deaths}) => deaths),
                label: 'Infected',
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.5',
                fill: true,
            }],
        }} 
        />) : null
    );

    const barChart = (
        confirmed ? (
            <Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'], 
                    datasets: [{
                        labels: 'People', 
                        backgroundColor:['blue', 'green', 'red',
                    ],
                    data: [confirmed.value, recovered.value, deaths.value]
                    }]}}
                // eslint-disable-next-line
                options={{legend:{display: false, title:{display:true, text:'Displaying chart for ${country}'}}}}
            
            />
        ) : null

    )

    return (
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    );
};
export default Chart;