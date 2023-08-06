import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import contactimg from '../IMG/contactimg.png'
import {useNavigate} from 'react-router-dom'

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
    const res = await fetch('http://localhost:4000/contact/create',{
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
    <div className='flex justify-between w-[100vw] items-center h-screen'>
        <div className='w-[20%] h-[100vh] py-5'>
            <Navbar/>
        </div>
        <div className='w-[80%] h-[100vh] flex justify-center items-center '>
          <div className='px-5 py-10 rounded-2xl flex justify-center items-center flex-col gap-5 border border-black'>
            <div className='flex justify-center items-center gap-2'>
              <h1 className='text-3xl font-semibold'>Contact Form</h1>
              <img className='w-[160px] h-[150px]' src={contactimg} alt="" />
            </div>
            <form action="">
              <div className='flex flex-col gap-5'>
                <div className='flex gap-2 items-baseline'>
                  <label htmlFor="firstname">Firstname</label>
                  <input 
                  className='border-b-2 border-black'
                  type="text" 
                  name="firstname"
                  value={firstname} 
                  onChange={onChangeFirstname}
                  />
                </div>
                <div className='flex gap-2 items-baseline'>
                  <label htmlFor="lastname">Lastname</label>
                  <input 
                  className='border-b-2 border-black'
                  type="text" 
                  name="lastname"
                  value={lastname}
                  onChange={onChangeLastname} 
                  />
                </div>
                <div className='flex gap-3'>
                  <label htmlFor="state">Status</label>
                  <div className='flex flex-col gap-3'>
                    <div className='flex justify-center items-center gap-1'>
                      <label htmlFor="active">Active</label>
                      <input 
                      type="radio" 
                      name="state"
                      value="active"
                      checked={state === "active"}
                      onChange={onClickRadio} 
                      />
                    </div>
                    <div className='flex justify-center items-center gap-1'>
                      <label htmlFor="inactive">Inactive</label>
                      <input 
                      type="radio" 
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
            <button className='border border-black py-2 px-10 rounded-lg font-semibold mt-3' onClick={onSubmitContact}>Submit</button>
          </div>
        </div>
    </div>
  )
}

export default Homepage
