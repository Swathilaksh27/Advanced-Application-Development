import React from 'react'
import "./Home.css"
import Navbar from './Navbar'
function Home() {
  return (
    <div>
    <div><Navbar/></div>
    <div className="banner-container">
                       <div className="text-center">
                            <h1 className=" clear">Welcome to Birthday Bash</h1>
                           <h4 className="quote">Make every birthday unforgettable with our expert event management services!</h4>
                       </div>
                       </div></div>
  )
}

export default Home