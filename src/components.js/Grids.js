import React, {useState, useEffect} from 'react'
import sunset from '../img/Sunset.jpeg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import '../Grids.css'

const Grids = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);
    return(
        <div className="teamh">
            <div className="row">
                <div className="col s12 m6 l3">
                    <div className="card large" data-aos="flip-left">
                        <div className="card-image">
                            <img src={sunset} />
                        </div>
                        <div className="card-content small">
                            <h2>Name</h2>
                            <h3>Post</h3>
                        </div>
                    </div>
                </div>
                <div className="col s12 m6 l3">
                    <div className="card large" data-aos="flip-left">
                        <div className="card-image">
                            <img src={sunset} />
                        </div>
                        <div className="card-content small">
                            <h2>Name</h2>
                            <h3>Post</h3>
                        </div>
                    </div>
                </div>
                <div className="col s12 m6 l3">
                    <div className="card large" data-aos="flip-left">
                        <div className="card-image">
                            <img src={sunset} />
                        </div>
                        <div className="card-content small">
                            <h2>Name</h2>
                            <h3>Post</h3>
                        </div>
                    </div>
                </div>
                <div className="col s12 m6 l3">
                    <div className="card large" data-aos="flip-left">
                        <div className="card-image">
                            <img src={sunset} />
                        </div>
                        <div className="card-content small">
                            <h2>Name</h2>
                            <h3>Post</h3>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
      
            
    )
}
export default Grids