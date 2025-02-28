import { IoVideocamOutline } from "react-icons/io5";
import { FaRegKeyboard } from "react-icons/fa6";
function Btn(){
    return (
        <div>
           <div className="flex pt-6">
            <button 
            className="flex items-center gap-2 px-5 py-2 bg-white mt-4
            text-black font-semibold rounded-full shadow-lg transition-all 
            duration-300  hover:scale-105 active:scale-95">
            <IoVideocamOutline className="text-xl "/>
            New Call
            </button>

            <div className="flex flex-row-reverse justify-center items-center gap-2 px-2 bg-white 
             h-12 rounded-xl mt-4 ml-4 border-2 border-transparent focus-within:border-blue-500 transition-all duration-300 ">

            <input type="text" 
            className="bg-transparent border-none outline-none w-full"
            placeholder="Enter a code or link"/>
             <FaRegKeyboard className="text-xl " />
       
            </div>
            
            <button className="text-blue-500 ml-6 text-xl text-center bg-white  px-6 mt-4 rounded-3xl 
            shadow-lg transition-all 
            duration-300  hover:scale-105 active:scale-95
            ">Join</button>
          </div>
        </div>
    )
}
export default Btn;