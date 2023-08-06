/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios'
import {useQuery} from 'react-query'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { MapContainer ,Marker,TileLayer ,Popup} from 'react-leaflet';
import './Maps.css'
import "leaflet/dist/leaflet.css"
import { Icon } from 'leaflet';
// import { popup } from 'leaflet';

const Maps = () => {
    const countryid = useParams()

    const {isLoading, isError , data , error}:any = useQuery(
        "CountryMaps",
        async()=>{
            const res = await axios.get(`https://disease.sh/v3/covid-19/countries/${countryid.id}`)
            return res.data
        }
    )
    if(isLoading){
        return <h1>Loading...</h1>
    }
    if(isError){
        return <h1>{error}</h1>
    }
    console.log(data.country)

    const latitude = data.countryInfo.lat
    const longitude = data.countryInfo.long

    const customIcon = new Icon({
        iconUrl:'https://img.pikbest.com/png-images/20190814/cartoon-simple-line-positioning-navigation-decoration-design_2597902.png!w700wp',
        iconSize: [48,48]
    })

  return (
    <>
     <MapContainer center={[latitude,longitude]} zoom={13}>
        <TileLayer 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
        <Marker position={[latitude,longitude]} icon={customIcon}>
            <Popup>
                Country name: {`${data.country}`} <br />Active cases: {`${data.active}`} <br />Recovered: {`${data.recovered}`} <br />Number of Deaths: {data.deaths}
            </Popup>
        </Marker>
    </MapContainer>
    </>
  )
}

export default Maps
