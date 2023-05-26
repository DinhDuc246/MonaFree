import React from 'react'
import { Link } from 'react-router-dom'
import "./myGigs.scss"


const MyGigs = () => {
    return (
        <div className='myGigs'>
            <div className="container">
                <div className="tittle">
                    <h1>Gigs</h1>
                    <Link to="/add">
                        <button>Add new gig</button>
                    </Link>
                </div>
                <table>
                    <tr>
                        <th>Image</th>
                        <th>Tittle</th>
                        <th>Price</th>
                        <th>Sales</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>
                            <img className='img' src="https://fiverr-res.cloudinary.com/image/upload/c_limit,f_auto,q_auto,t_smartwm,w_500/v1/attachments/delivery/asset/bf56e460eda93c51e51bf79a8d204eb3-1678909345/Finished%203.png" alt="" />
                        </td>
                        <td>Gig1</td>
                        <td>24</td>
                        <td>6</td>
                        <td><img className='delete' src="img/delete.png" alt="" /></td>
                    </tr>
                    <tr>
                        <td>
                            <img className='img' src="https://fiverr-res.cloudinary.com/image/upload/c_limit,f_auto,q_auto,t_smartwm,w_500/v1/attachments/delivery/asset/bf56e460eda93c51e51bf79a8d204eb3-1678909345/Finished%203.png" alt="" />
                        </td>
                        <td>Gig1</td>
                        <td>24</td>
                        <td>6</td>
                        <td><img className='delete' src="img/delete.png" alt="" /></td>
                    </tr>
                    <tr>
                        <td>
                            <img className='img' src="https://fiverr-res.cloudinary.com/image/upload/c_limit,f_auto,q_auto,t_smartwm,w_500/v1/attachments/delivery/asset/bf56e460eda93c51e51bf79a8d204eb3-1678909345/Finished%203.png" alt="" />
                        </td>
                        <td>Gig1</td>
                        <td>24</td>
                        <td>6</td>
                        <td><img className='delete' src="img/delete.png" alt="" /></td>
                    </tr>
                    <tr>
                        <td>
                            <img className='img' src="https://fiverr-res.cloudinary.com/image/upload/c_limit,f_auto,q_auto,t_smartwm,w_500/v1/attachments/delivery/asset/bf56e460eda93c51e51bf79a8d204eb3-1678909345/Finished%203.png" alt="" />
                        </td>
                        <td>Gig1</td>
                        <td>24</td>
                        <td>6</td>
                        <td><img className='delete' src="img/delete.png" alt="" /></td>
                    </tr>
                    <tr>
                        <td>
                            <img className='img' src="https://fiverr-res.cloudinary.com/image/upload/c_limit,f_auto,q_auto,t_smartwm,w_500/v1/attachments/delivery/asset/bf56e460eda93c51e51bf79a8d204eb3-1678909345/Finished%203.png" alt="" />
                        </td>
                        <td>Gig1</td>
                        <td>24</td>
                        <td>6</td>
                        <td><img className='delete' src="img/delete.png" alt="" /></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default MyGigs