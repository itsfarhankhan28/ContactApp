import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const Homepage = () => {

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
    } else {
      window.alert("Error in creating contact");
      console.log("Error in creating contact");
    }
  }

  return (
    <div className='flex justify-between w-[100vw] items-center h-screen'>
        <div className='w-[20%] border border-black h-[100vh]'>
            <Navbar/>
        </div>
        <div className='w-[80%] border border-black h-[100vh] flex justify-center items-center '>
          <div className='border border-black px-5 py-10 rounded-2xl flex justify-center items-center flex-col gap-5'>
            <div>
              <h1 className='text-2xl font-semibold'>Contact Form</h1>
            </div>
            <form action="">
              <div>
                <label htmlFor="firstname">Firstname</label>
                <input 
                type="text" 
                name="firstname"
                value={firstname} 
                onChange={onChangeFirstname}
                />
              </div>
              <div>
                <label htmlFor="lastname">Lastname</label>
                <input 
                type="text" 
                name="lastname"
                value={lastname}
                onChange={onChangeLastname} 
                />
              </div>
              <div>
                <label htmlFor="state">Status</label>
                <div>
                  <label htmlFor="active">active</label>
                  <input 
                  type="radio" 
                  name="state"
                  value="active"
                  checked={state === "active"}
                  onChange={onClickRadio} 
                  />
                </div>
                <div>
                  <label htmlFor="inactive">inactive</label>
                  <input 
                  type="radio" 
                  name='state' 
                  value="inactive"
                  checked={state === "inactive"}
                  onChange={onClickRadio}
                  />
                </div>
              </div>
            </form>
            <button onClick={onSubmitContact}>Submit</button>
            <h1>The radio button value is: {state}</h1>
            <h1>{firstname}</h1>
            <h1>{lastname}</h1>
          </div>
        </div>
    </div>
  )
}

export default Homepage
