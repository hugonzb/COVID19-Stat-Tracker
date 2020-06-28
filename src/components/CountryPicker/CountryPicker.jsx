import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import SearchBar from 'search-bar-react';
import styles from './CountryPicker.module.css';

import { fetchCountries } from '../../api';

const CountryPicker = ( {handleCountryChange} ) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);
    useEffect(() => {
        const fetchApi = async() => {
            setFetchedCountries(await fetchCountries());
        }

        fetchApi();
    }, [setFetchedCountries]);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue ="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                <option value="New Zealand">New Zealand</option>
                <option value="US">United States</option>
                <option value="Brazil">Brazil</option>
                <option value="Russia">Russia</option>
                <option value="China">China</option>
                <option value="India">India</option>
                <option value="Spain">Spain</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Chile">Chile</option>
                <option value="Canada">Canada</option>
                <option value="Italy">Italy</option>
            </NativeSelect>
            <SearchBar
                onChange={(text) => handleCountryChange(text)}
                onFocus={() => console.log('focused')}
                size='large'
                width='100%'
                placeholder='Search...'
                value='U'
            />
        </FormControl>
    )
} 

export default CountryPicker;