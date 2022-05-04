import React from 'react';
import classes from './Conditions.module.css'

const Conditions = ({responseObj}) => {
    const {data : [fetchedData]} = responseObj;
    const {weather} = fetchedData;
    return (
        <div className={classes.Wrapper}>
                <div>
                    <ul>
                        <li>City Name : {fetchedData.city_name}</li>
                        <li>Country Code : {fetchedData.country_code}</li>
                        <li>Timezone : {fetchedData.timezone}</li>
                        <li>Temperature : {fetchedData.temp}</li>
                        <li>Weather : {weather.description}</li>
                        <img src={"icons/"+weather.icon+".png"} alt="Weather Icon" />
                    </ul>

                </div>
        </div>
    )
}

export default Conditions;