import React from 'react'
import "./background.scss"
import { Link } from 'react-router-dom'


function background() {
    return (
        <div className='background'>

            <div className='row'>
                <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1400,dpr_1.0/v1/attachments/generic_asset/asset/50218c41d277f7d85feeaf3efb4549bd-1599072608122/bg-signup-1400-x1.png" alt="" />
                <span>Suddenly it's all so doable.
                </span>
                <button>
                    <Link className="link" to="/">Join Mona</Link>
                </button></div>
        </div>



    )
}

export default background