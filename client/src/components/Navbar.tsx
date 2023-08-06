import {AiFillHome} from 'react-icons/ai'
import {BiSolidContact} from 'react-icons/bi'
import {AiFillPieChart} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className=" flex justify-center items-center h-[100%] fixed">
      <div className="rounded-2xl h-[80%] px-5 py-5 flex flex-col gap-10 text-center text-2xl shadow-2xl">
        <div className='flex justify-center items-center gap-2'>
          <AiFillHome/>
          <a href="/"><button className="font-semibold">Home</button></a>
        </div>
        <div className='flex justify-center items-center gap-2'>
          <BiSolidContact/>
          <a href="/contactpage"><button className="font-semibold">Contact</button></a>
        </div>
        <div className='flex justify-center items-center gap-2'>
          <AiFillPieChart/>
          <a href="/charts"><button className="font-semibold">Charts and Maps</button></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
