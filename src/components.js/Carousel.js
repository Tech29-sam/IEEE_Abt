import React,{useState,useEffect} from 'react'
import M from 'materialize-css';

const Carousel = () =>{
    useEffect(() => {
        let elements = document.querySelectorAll(".carousel");
        M.Carousel.init(elements);
    }, []);
        return(
            <div className="container">
                <div className="carousel">
                    <a className="carousel-item" href="#one!"><img src="https://lorempixel.com/250/250/nature/1" /></a>
                    <a className="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2" /></a>
                    <a className="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3" /></a>
                    <a className="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4" /></a>
                    <a className="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5" /></a>
                </div>
            </div>
            
        )
}
export default Carousel