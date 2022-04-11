import React, { Component } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import foto1 from '../assets/foto1.jpeg'
import fundo from '../assets/fundo.jpeg'
import massagem from '../assets/massagem.jpg'

class Carrousel extends Component {
  render() {
    return (
      <Carousel
        autoPlay={true}
        transitionTime="4500"
        showArrows={true}
        interval="5400"
        stopOnHover={false}
        showThumbs={false}
        infiniteLoop={true}
        dynamicHeight={true}
      >
        <div>
          <img src={foto1} height="400" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={fundo} height="400" />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img src={massagem} height="400" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    )
  }
}

export default Carrousel
