import React from 'react'
import "./orders.scss"
import { Link } from 'react-router-dom'
const Orders = () => {
    const currentUser = {
        id: 1,
        username: "TramTram",
        isSeller: true,

    }
    return (
        <div className='myGigs'>
            <div className="container">
                <div className="tittle">
                    <h1>Orders</h1>
                </div>
                <table>
                    <tr>
                        <th>Image</th>
                        <th>Tittle</th>
                        <th>Price</th>
                        <th>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
                        <th>Contact</th>
                    </tr>
                    <tr>
                        <td>
                            <img className='img' src="https://fiverr-res.cloudinary.com/image/upload/c_limit,f_auto,q_auto,t_smartwm,w_500/v1/attachments/delivery/asset/bf56e460eda93c51e51bf79a8d204eb3-1678909345/Finished%203.png" alt="" />
                        </td>
                        <td>Laydigaga</td>
                        <td>24</td>
                        <td>TramTram</td>
                        <td><img className='delete' src="img/mail.png" alt="" /></td>
                    </tr>
                    <tr>
                        <td>
                            <img className='img' src="https://fiverr-res.cloudinary.com/image/upload/c_limit,f_auto,q_auto,t_smartwm,w_500/v1/attachments/delivery/asset/bf56e460eda93c51e51bf79a8d204eb3-1678909345/Finished%203.png" alt="" />
                        </td>
                        <td>Laydigaga</td>
                        <td>24</td>
                        <td>TramTram</td>
                        <td><img className='delete' src="img/mail.png" alt="" /></td>
                    </tr>
                    <tr>
                        <td>
                            <img className='img' src="https://fiverr-res.cloudinary.com/image/upload/c_limit,f_auto,q_auto,t_smartwm,w_500/v1/attachments/delivery/asset/bf56e460eda93c51e51bf79a8d204eb3-1678909345/Finished%203.png" alt="" />
                        </td>
                        <td>Laydigaga</td>
                        <td>24</td>
                        <td>TramTram</td>
                        <td><img className='delete' src="img/mail.png" alt="" /></td>
                    </tr>
                    <tr>
                        <td>
                            <img className='img' src="https://fiverr-res.cloudinary.com/image/upload/c_limit,f_auto,q_auto,t_smartwm,w_500/v1/attachments/delivery/asset/bf56e460eda93c51e51bf79a8d204eb3-1678909345/Finished%203.png" alt="" />
                        </td>
                        <td>Laydigaga</td>
                        <td>24</td>
                        <td>TramTram</td>
                        <td><img className='delete' src="img/mail.png" alt="" /></td>
                    </tr>
                    <tr>
                        <td>
                            <img className='img' src="https://fiverr-res.cloudinary.com/image/upload/c_limit,f_auto,q_auto,t_smartwm,w_500/v1/attachments/delivery/asset/bf56e460eda93c51e51bf79a8d204eb3-1678909345/Finished%203.png" alt="" />
                        </td>
                        <td>Laydigaga</td>
                        <td>24</td>
                        <td>TramTram</td>
                        <td><img className='delete' src="img/mail.png" alt="" /></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Orders