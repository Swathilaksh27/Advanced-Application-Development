import React from 'react';
import "./Home.css";
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import video from './video.mp4'; // Import the video file

function Home() {
    return (
        <div>
            <Navbar />
            <div className='home-container'>
                <div className='video-overlay'></div>
                <video autoPlay loop muted className='video-background'>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <h1 className='home'>WELCOME TO BIRTHDAY BASH</h1><br />
                <div className='text'>
                    <p>Get ready for an event that will leave you breathless! Our upcoming event promises to be an extraordinary</p>
                    <p>experience, filled with captivating moments, exhilarating performances, and unforgettable memories.</p>
                </div>
                <br /><br />
                <h5><Link to='/book'><button type="submit" className='but-book'>BOOK NOW</button></Link></h5>

                {/* About Us content */}
                <div className='about-us-container'>
                    <div className='about-us-text'>
                        <h2>About Us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et leo ut ante aliquam sagittis. Curabitur vel ligula id libero pharetra rhoncus.</p>
                    </div>
                    <div className='about-us-image'>
                        <img src='https://images.pexels.com/photos/696271/pexels-photo-696271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='About Us' />
                    </div>
                    
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
