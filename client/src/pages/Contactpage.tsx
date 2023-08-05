/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios'
import { useQuery } from 'react-query'
import Navbar from '../components/Navbar'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
// import { useNavigate } from 'react-router-dom';

const Contactpage = ({id}:any) => {
    console.log(id)

    const {isLoading, isError , data , error}:any = useQuery(
        "Contact",
        async()=>{
            const res = await axios.get('http://localhost:4000/contact/get')
            return res.data
        }
    )
    if(isLoading){
        return <h1>Loading...</h1>
    }

    if(isError){
        return <h1>{error}</h1>
    }
    console.log(data)

  return (
    <>
    <div className='flex justify-between w-[100vw] h-screen'>
        <div className='w-[20%]'>
            <Navbar/>
        </div>
        <div className='w-[80%] flex justify-center items-center'>
        <div className='flex flex-wrap gap-5 border border-black p-5 w-[700px]'>
        {data.map((item:any)=>{
            return (
                <>
                <div key={item._id} className=''>
                    <Card sx={{ maxWidth: 300 }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {item.firstname} {item.lastname}
                        </Typography>
                        <Typography className='flex gap-1' variant="body2" color="text.secondary">
                        <h2 className='font-semibold'>Status:</h2>{item.state}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <a href={`/updateform/${item._id}`}><Button size="small"><EditIcon/></Button></a>
                        <a href={`/deletecontact/${item._id}`}><Button size="small"><DeleteIcon/></Button></a>
                    </CardActions>
                    </Card>
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

export default Contactpage
