import React, { useState } from 'react'
import Navbar from '../components/Navbar'
// import contactimg from '../IMG/contactimg.png'
import {useNavigate} from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';

const Homepage = () => {

  const navigatetocontact = useNavigate()

  const [firstname , isFirstname] = useState()
  const [lastname , isLastname] = useState()
  const [state, isState] = useState("active")

  const onClickRadio = (e:any)=>{
    isState(e.target.value)
  }

  const onChangeFirstname = (e:any)=>{
    isFirstname(e.target.value)
  }

  const onChangeLastname = (e:any)=>{
    isLastname(e.target.value)
  }

  const onSubmitContact = async(e:any)=>{
    e.preventDefault()

    const contact = {firstname , lastname , state}
    const res = await fetch('https://contactappbackend-7fsw.onrender.com/contact/create',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(contact)
    })
    
    
    console.log(res);

    if (res.status === 200) {
      window.alert("Contact Created Successfully");
      console.log("Contact Created Successfully");

      navigatetocontact('/contactpage')
    } else {
      window.alert("Error in creating contact");
      console.log("Error in creating contact");
    }
  }

  return (
    <>
    <Navbar/>
    <div className='flex justify-center items-center w-[100vw] h-screen'>
        <div className='h-[100vh] flex justify-center items-center '>

          <div className='border-[5px] border-black flex justify-between w-[700px] h-[500px] rounded-3xl p-3'>
            <div className='w-[40%]'>
              image
            </div>
            <div className='px-5 py-5 rounded-2xl flex flex-col gap-5 w-[60%] bg-[#BAFF66]'>
            <div>
              <h1 className='text-3xl font-semibold'>Contact Form</h1>
            </div>
            <form action="">
              <div className='flex flex-col gap-5'>
                <div className='flex gap-2 items-baseline'>
                  {/* <label htmlFor="firstname">Firstname</label> */}
                  <TextField 
                  className='w-full'
                  type="text"
                  variant='standard'
                  label='Firstname' 
                  name="firstname"
                  value={firstname} 
                  onChange={onChangeFirstname}
                  />
                </div>
                <div className='flex gap-2 items-baseline'>
                  {/* <label htmlFor="lastname">Lastname</label> */}
                  <TextField
                  className='w-full' 
                  type="text" 
                  variant='standard'
                  label='Lastname'
                  name="lastname"
                  value={lastname}
                  onChange={onChangeLastname} 
                  />
                </div>
                <div className='flex gap-3'>
                  <label htmlFor="state">Status</label>
                  <div className='flex gap-3 justify-center items-center'>
                    <div className=''>
                      <label htmlFor="active">Active</label>
                      <Checkbox
                      color='default'  
                      name="state"
                      value="active"
                      checked={state === "active"}
                      onChange={onClickRadio} 
                      />
                    </div>
                    <div className=''>
                      <label htmlFor="inactive">Inactive</label>
                      <Checkbox
                      color='default'
                      name='state' 
                      value="inactive"
                      checked={state === "inactive"}
                      onChange={onClickRadio}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <button className='bg-black text-white py-2 px-10 rounded-lg font-semibold mt-3' onClick={onSubmitContact}>Submit</button>
          </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Homepage
