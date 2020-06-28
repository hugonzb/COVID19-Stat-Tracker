import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

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
        console.log(fetchedData);
        
    }

    render() {
        const { data } = this.state;
        return (
            <div className ={styles.container}>
                <Cards data={this.state.data}/>
                <Chart data={this.state.data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
            </div>    
        )
    }
}

export default App;