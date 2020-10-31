import React, {useState, useEffect} from 'react'
import M from 'materialize-css';
import Grids from './Grids'
import Parallax1 from './Parallax1'
import Parallax2 from './Parallax2'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './About.css'


const About = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);
    return(
        <div className="">
            <div className="gap1 container">
                <p data-aos="zoom-in">IEEE is the world’s largest technical professional organization dedicated to advancing technology for the benefit of humanity.</p>
                <p data-aos="zoom-in">IEEE and its members inspire a global community to innovate for a better tomorrow through highly cited publications, conferences, technology standards, and professional and educational activities. IEEE is the trusted “voice” for engineering, computing, and technology information around the globe.</p>
            </div>
            
            <Parallax1 />
            
            <div className=" section white"><Grids /></div>
            <div className="gap2">
                <p className="center" data-aos="zoom-in"><h2>MISSION AND VISION</h2></p>
                <p className="container center" data-aos="zoom-in">IEEE's core purpose is to foster technological innovation and excellence for the benefit of humanity. IEEE will be essential to the global technical community and to technical professionals everywhere, and be universally recognized for the contributions of technology and of technical professionals in improving global conditions.</p>
            </div>
            <Parallax2 />

            <div className="section white"><Grids /></div>
        </div>
    )    
}
export default About
