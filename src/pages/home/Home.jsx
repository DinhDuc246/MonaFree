import React from 'react'
import Featured from '../../components/featured/Featured'
import Slide from '../../components/Slide/Slide'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import "./Home.scss"
import { cards, projects } from '../../data'
import Catcard from '../../components/catCard/catCard'
import ProjectCard from '../../components/projectCard/projectCard'
import Background from '../../components/Background/background'
import Footer from '../../components/footer/Footer'

const Home = () => {
    return (
        <div className='home'>
            <Featured />
            <TrustedBy />
            <Slide slidesToShow={5} arrowsCroll={5}>
                {cards.map(card => (
                    <Catcard key={card.id} item={card} />
                ))}
            </Slide>
            <div className="features">
                <div className="container">
                    <div className="item">
                        <h1>The best part? Everything.
                        </h1>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Stick to your budget
                        </div>
                        <p>Find the right service for every price point. No hourly rates, just project-based pricing.</p>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Get quality work done quickly
                        </div>
                        <p>Hand your project over to a talented freelancer in minutes, get long-lasting results.</p>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Pay when you're happy
                        </div>
                        <p>Upfront quotes mean no surprises. Payments only get released when you approve.</p>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Count on 24/7 support
                        </div>
                        <p>Our round-the-clock support team is available to help anytime, anywhere.</p>
                    </div>
                    <div className="item">
                        <video src="./img/video.mp4" controls></video>
                    </div>
                </div>
            </div>
            <div className="features dark">
                <div className="container">
                    <div className="item">
                        <h1>Mona Bussiness
                        </h1>
                        <h1>A solution built for business
                        </h1>
                        <p>Upgrade to a curated experience to access vetted talent and exclusive tools</p>
                        <div className="title">
                            <img src="./img/check1.png" alt="" />
                            Talent matching
                        </div>

                        <div className="title">
                            <img src="./img/check1.png" alt="" />
                            Dedicated account management
                        </div>

                        <div className="title">
                            <img src="./img/check1.png" alt="" />
                            Team collaboration tools
                        </div>

                        <div className="title">
                            <img src="./img/check1.png" alt="" />
                            Business payment solutions
                        </div>
                        <button>Explore Mona Business</button>
                    </div>

                    <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png"
                        alt="" />


                </div>
            </div>
            <Slide slidesToShow={4} arrowsCroll={4}>
                {projects.map(card => (
                    <ProjectCard key={card.id} item={card} />
                ))}
            </Slide>
            <Background />


        </div >
    );
};

export default Home