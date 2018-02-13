import React, { Component } from 'react';
import './carousel.css';


class Carousel extends Component {
  render() {
    return (
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img  className="carousel-img" src="./carouselimg/freestocks.jpg" alt="First slide"/>
            <div className="carousel-content">
            mmmmmmm
            </div>
          
          </div>
          <div className="carousel-item">
            <img className="d-block w-50"  src="./carouselimg/andre.jpg" alt="Second slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-50"  src="./carouselimg/paul.jpg" alt="Third slide"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Carousel;
