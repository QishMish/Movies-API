import React from 'react'
import error from "../Images/error.svg";
import {Link} from "react-router-dom";

export default function Error() {
    return (
        <div className='error-container'>
            <div className='error'>
                <img src={error} alt='error'/>
                <Link to='/'>
                    <button className='error-button'>Back To Home</button>
                </Link>
                
            </div>
            
        </div>
    )
}
