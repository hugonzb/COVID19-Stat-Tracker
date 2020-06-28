import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import linkedin from './images/linkedin.png';
import github from './images/github.png';
import email from './images/email.png';

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({data: fetchedData});
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country });
    }

    render() {
        const { data, country } = this.state;
        return (
            <div className ={styles.container}>
                <div className = {styles.title}>
                    COVID-19 Statistic Tracker
                </div>
                <div className = {styles.subtitle}>
                    Developed by Hugo Baird
                </div>
                <div className = {styles.subtitle}>
                    Shoutout to Adrian Hajdin @JavaScript Mastery
                </div>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Cards data={data}/>
                <Chart data={data} country={country}/>
                <div className ={styles.footer}>
                        <a href="https://github.com/hugonzb"><img className ={styles.github} src={github} alt="github"></img></a>
                        <a href="https://www.linkedin.com/in/hugo-baird/"><img className ={styles.img} src={linkedin} alt="linkedin"></img></a>
                        <img className ={styles.img} src={email} alt="email" ></img><div className ={styles.email}>hugonzb@gmail.com</div>
                </div>
            </div>    
        )
    }
}



export default App;