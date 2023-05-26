import React from 'react'
import "./Message.scss"
import { Link } from 'react-router-dom'


const Message = () => {
    return (
        <div className='message'>
            <div className="container">
                <span className="breadcrumbs">
                    <Link to='/messages'>MESSAGE</Link> / TRAMTRAM
                </span>
                <div className="messages">
                    <div className="item">
                        <img src="/img/tram.jpg" alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat consectetur iste neque iusto,
                            optio quo eaque qui harum fugiat labore alias similique commodi minus veritatis exercitationem
                            dolorem reiciendis illum rem!</p>
                    </div>
                    <div className="item owner">
                        <img src="/img/tram.jpg" alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat consectetur iste neque iusto,
                            optio quo eaque qui harum fugiat labore alias similique commodi minus veritatis exercitationem
                            dolorem reiciendis illum rem!</p>
                    </div>
                    <div className="item">
                        <img src="/img/tram.jpg" alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat consectetur iste neque iusto,
                            optio quo eaque qui harum fugiat labore alias similique commodi minus veritatis exercitationem
                            dolorem reiciendis illum rem!</p>
                    </div>
                    <div className="item">
                        <img src="/img/tram.jpg" alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat consectetur iste neque iusto,
                            optio quo eaque qui harum fugiat labore alias similique commodi minus veritatis exercitationem
                            dolorem reiciendis illum rem!</p>
                    </div>
                    <div className="item">
                        <img src="/img/tram.jpg" alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat consectetur iste neque iusto,
                            optio quo eaque qui harum fugiat labore alias similique commodi minus veritatis exercitationem
                            dolorem reiciendis illum rem!</p>
                    </div>
                    <div className="item">
                        <img src="/img/tram.jpg" alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat consectetur iste neque iusto,
                            optio quo eaque qui harum fugiat labore alias similique commodi minus veritatis exercitationem
                            dolorem reiciendis illum rem!</p>
                    </div>
                    <div className="item">
                        <img src="/img/tram.jpg" alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat consectetur iste neque iusto,
                            optio quo eaque qui harum fugiat labore alias similique commodi minus veritatis exercitationem
                            dolorem reiciendis illum rem!</p>
                    </div>
                </div>
                <div className="write">
                    <textarea name="" placeholder='write a message' id="" cols="30" rows="10"></textarea>
                    <button>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Message