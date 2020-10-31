import React, {useState, useEffect} from 'react'
import M from 'materialize-css';
import stars from '../img/stars.jpg'
import '../Parallax.css'

const Parallax1 = () => {
    useEffect(() => {
        let elements = document.querySelectorAll(".parallax");
        M.Parallax.init(elements);
    }, []);
    return (
        <div className="parallax-container">   
            <div className="parallax">
                <img src={stars} alt="parallax_1"/>
            </div>
        </div>
    )
 }
 export default Parallax1