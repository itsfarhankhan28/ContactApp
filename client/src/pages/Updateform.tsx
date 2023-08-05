/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

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
    const res = await fetch(`http://localhost:4000/contact/update/${id.id}`,{
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
        <div className='w-[20%] border border-black h-[100vh]'>
            <Navbar/>
        </div>
        <div className='w-[80%] border border-black h-[100vh] flex justify-center items-center '>
          <div className='border border-black px-5 py-10 rounded-2xl flex justify-center items-center flex-col gap-5'>
            <div>
              <h1 className='text-2xl font-semibold'>Update Contact</h1>
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
            <button onClick={onUpdateContact}>Submit</button>
            <h1>The radio button value is: {state}</h1>
            <h1>{firstname}</h1>
            <h1>{lastname}</h1>
          </div>
        </div>
    </div>
  )
}

export default Updateform
