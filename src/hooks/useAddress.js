import { useState, useEffect } from "react"
import axios from "axios";


const useAddress = (country, city) => {
    const KEY = "pk.087cb5399cb4850905d3f325877a490b"
    /* const API = `https://us1.locationiq.com/v1/search?key=${KEY}&q=cali%2C%20calle%2071b%20%234n-73&format=json` */
    const API = `https://us1.locationiq.com/v1/search?key=${KEY}&q=${encodeURIComponent(city)}%2C%20${encodeURIComponent(country)}&format=json`
    console.log(API)
    const [map, setMap] = useState([])
    useEffect(() => {
        const getAddress = async () => {
            const res = await axios(API)
            const data = await res.data
            const latDate = data[0].lat
            const lonDate = data[0].lon
            console.log(latDate, lonDate)
            const position =  [
                Number(latDate),
                Number(lonDate),
            ]
            setMap(position)
        }
        getAddress()
    }, [])
    return map
}

export default useAddress
