import React from "react";
import Btn from './button.jsx'
function Card(){
    return(
        <div >

        <div className="text-white">
       <h1 className="text-6xl text-start">Start a Call</h1>
       <p className="text-2xl">A new way to connect with your family and friends</p>
        </div>

       <div>
        <Btn />
       </div>

        </div>
    )
}
export default Card;