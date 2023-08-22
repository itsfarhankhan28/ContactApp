import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Deletecontact = () => {

    const id = useParams()
    console.log(id.id)

    const navigatetocontact = useNavigate()

    const onDeletecontact = async()=>{
        const deleteval = await fetch(`https://contact-sphere-backend.vercel.app/contact/delete/${id.id}`,{
            method:"DELETE"
        })
        console.log(deleteval)
        navigatetocontact('/contactpage')
    }

  return (
    <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col gap-5">
            <div>Do you want to <span className="text-red-500 font-semibold">delete</span> the contact</div>
            <div className="flex gap-5 justify-center items-center">
                <button onClick={onDeletecontact} className="border border-black py-2 px-5 rounded-md bg-red-500 text-white">Yes</button>
                <button className="border border-black py-2 px-5 rounded-md">No</button>
            </div>
        </div>
    </div>
  )
}

export default Deletecontact
