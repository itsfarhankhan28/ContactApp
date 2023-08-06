/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios'
import {useQuery} from 'react-query'
import { useParams } from 'react-router-dom'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Navbar from '../components/Navbar';
// import { MapContainer ,TileLayer } from 'react-leaflet';
// import {useState} from 'react'

const Countrydetails = () => {
    // const [center , setCenter] = useState({lat:0,long:0})

    const countryid = useParams()
    console.log(countryid.id)

    const {isLoading, isError , data , error}:any = useQuery(
        "CountryDetails",
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
    console.log(data.countryInfo.cases)

    // const latitude = data.countryInfo.lat
    // const longitude = data.countryInfo.long
    // setCenter({ lat: latitude, long: longitude })
    // console.log(latitude,longitude)

    ChartJS.register(ArcElement, Tooltip, Legend);

    const options = {
        responsive:true
    }

    const piechartdata = {
        labels: ['cases', 'deaths', 'recovered', 'active','tests'],
        datasets: [
          {
            label: '# of Votes',
            data: [`${data.cases}`,`${data.deaths}`,`${data.recovered}`,`${data.active}`,`${data.tests}`],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };

  return (
    <div className='flex w-[100vw] justify-between h-screen'>
      <div className='w-[20%]'>
        <Navbar/>
      </div>
      <div className='w-[80%] flex justify-center items-center flex-col gap-10'>
        <div className='w-[500px] flex justify-center items-center p-5 rounded-3xl shadow-2xl'>
            <Doughnut data={piechartdata} options={options} />
        </div>
        <div>
            {/* <MapContainer center={[center.lat,center.long]} zoom={13}>
                <TileLayer 
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
            </MapContainer> */}
        </div>
      </div>
    </div>
  )
}

export default Countrydetails
