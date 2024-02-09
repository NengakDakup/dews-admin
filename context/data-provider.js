'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const SensorDataContext = createContext();

export function useSensorDataContext(){
   return useContext(SensorDataContext);
}

export default function SensorDataProvider({ children }) {
    const [data, setData] = useState({
        precipitation: [],
        soil_moisture: [],
        temperature: [],
        humidity: [],
        dates: []
    })

    const [normData, setNormData] = useState([])

    useEffect(() => {
        setTimeout(fetchData(), 10000);
    }, [])

    const fetchData = async () => {
        const response = await fetch('https://dewsapp.onrender.com/api/v1/sensor-data/');
        const data = await response.json();
        setNormData(data)
        let _data = {
            precipitation: [],
            soil_moisture: [],
            temperature: [],
            humidity: [],
            dates: []
        }
        data.forEach((item, i) => {
            if(i>10) return;
            _data.precipitation.push(item.precipitation)
            _data.soil_moisture.push(item.soil_moisture)
            _data.temperature.push(item.temperature)
            _data.humidity.push(item.humidity)
            _data.dates.push(item.created)
        });
        setData(_data)
        console.log("data: ", _data);
    } 


    return (
    <SensorDataContext.Provider value={{data, normData}}>
        {children}
    </SensorDataContext.Provider>
    );
}