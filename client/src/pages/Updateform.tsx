/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import updateimg from '../IMG/updateimg.png'

const Updateform = () => {

  const [firstname , isFirstname] = useState()
  const [lastname , isLastname] = useState()
  const [state, isState] = useState("active")

  const id = useParams()
  console.log(id.id)

  const navigatetocontact = useNavigate()

  const onClickRadio = (e:any)=>{
    isState(e.target.value)
  }

  const onChangeFirstname = (e:any)=>{
    isFirstname(e.target.value)
  }

  const onChangeLastname = (e:any)=>{
    isLastname(e.target.value)
  }

  const onUpdateContact = async(e:any)=>{
    e.preventDefault()

    const contact = {firstname , lastname , state}
    const res = await fetch(`https://contactappbackend-7fsw.onrender.com/contact/update/${id.id}`,{
      method:"PUT",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(contact)
    })
    
    
    console.log(res);

    if (res.status === 200) {
      window.alert("Update successful");
      console.log("Update successful");

      navigatetocontact('/contactpage')
    } else {
      window.alert("Update unsuccessful");
      console.log("Update unsuccessful");
    }
  }

  return (
    <div className='flex justify-between w-[100vw] items-center h-screen'>
        <div className='w-[20%] h-[100vh]'>
            <Navbar/>
        </div>
        <div className='w-[80%] h-[100vh] flex justify-center items-center '>
          <div className='border border-black px-5 py-10 rounded-2xl flex justify-center items-center flex-col gap-5'>
            <div className='flex justify-center items-center gap-2'>
              <h1 className='text-3xl font-semibold'>Update Contact</h1>
              <img className='w-[160px] h-[150px]' src={updateimg} alt="" />
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
                      <label htmlFor="active">active</label>
                      <input 
                      type="radio" 
                      name="state"
                      value="active"
                      checked={state === "active"}
                      onChange={onClickRadio} 
                      />
                    </div>
                    <div className='flex justify-center items-center gap-1'>
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
                </div>
              </div>
            </form>
            <button className='border border-black py-2 px-10 rounded-lg font-semibold mt-3' onClick={onUpdateContact}>Submit</button>
          </div>
        </div>
    </div>
  )
}

export default Updateform
