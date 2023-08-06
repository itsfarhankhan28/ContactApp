import axios from 'axios'
import {useQuery} from 'react-query'
import Navbar from '../components/Navbar'

const Chart = () => {

    const {isLoading, isError , data , error}:any = useQuery(
        "Charts",
        async()=>{
            const res = await axios.get('https://disease.sh/v3/covid-19/countries')
            return res.data
        }
    )
    if(isLoading){
        return <h1>Loading ...</h1>
    }
    if(isError){
        return <h1>{error}</h1>
    }
    console.log(data)

  return (
    <>
    <div className='h-screen w-[100vw] flex justify-between overflow-x-hidden'>
        <div className='w-[20%]'>
            <Navbar/>
        </div>
        <div className='w-[80%]'>
            <div className='flex mx-auto flex-wrap gap-10'>
            {data.map((item:any)=>{
                return (
                    <>
                        <div className='flex flex-col gap-2 justify-center items-center cursor-pointer p-5 rounded-xl shadow-xl'>
                            <img className='w-[50px] h-[50px]' src={`${item.countryInfo.flag}`} alt="" />
                            <h1>{item.country}</h1>
                            <a href={`/countrydetails/${item.countryInfo._id}`}><button>View Charts</button></a>
                            <a href={`/maps/${item.countryInfo._id}`}><button>View Map</button></a>
                        </div>
                    </>
                )
            })}
            </div>
        </div>
    </div>
    </>
  )
}

export default Chart
