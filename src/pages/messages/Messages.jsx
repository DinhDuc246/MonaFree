import React from 'react'
import "./Messages.scss"
import { Link } from 'react-router-dom'
const Messages = () => {
    const currentUser = {
        id: 1,
        username: "TramTram",
        isSeller: true,

    }
    const message = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur corrupti unde fuga et debitis maxime, est atque cupiditate doloremque voluptas itaque natus obcaecati aliquid deserunt optio quos nesciunt illum. Deleniti?'
    return (
        <div className='massages'>
            <div className="container">
                <div className="tittle">
                    <h1>Messenger</h1>
                </div>
                <table>
                    <tr>
                        <th>Buyer</th>
                        <th>Last Messenger</th>
                        <th>Date</th>
                        <th>Action</th>

                    </tr>
                    <tr className='active'>
                        <td>
                            TramTram
                        </td>
                        <td><Link to='/message/123' className='link'>{message.substring(0, 100)}...</Link></td>
                        <td>4 hours a days</td>

                        <td><button>
                            Mark as Read</button></td>
                    </tr>
                    <tr className='active'>
                        <td>
                            TramTram
                        </td>
                        <td><Link to='/message/123' className='link'>{message.substring(0, 100)}...</Link></td>
                        <td>3 hours a days</td>

                        <td><button>
                            Mark as Read</button></td>
                    </tr>
                    <tr>
                        <td>
                            TramTram
                        </td>
                        <td><Link to='message/123' className='link'>{message.substring(0, 100)}...</Link></td>
                        <td> 2 hours a days</td>

                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            TramTram
                        </td>
                        <td><Link to='message/123' className='link'>{message.substring(0, 100)}...</Link></td>
                        <td>1 hours a days</td>

                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            TramTram
                        </td>
                        <td><Link to='message/123' className='link'>{message.substring(0, 100)}...</Link></td>
                        <td>2 hours a days</td>

                        <td></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Messages