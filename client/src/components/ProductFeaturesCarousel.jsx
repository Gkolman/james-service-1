import React from 'react';
import style from '../app.scss';
import axios from 'axios';

class ProductFeaturesCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      position: 0
    };
    this.changeImage = this.changeImage.bind(this);
  }

  changeImage(event) {
    const nextResult = (/next/g).test(event.target.className);
    const wholeNumber = setInterval(() => {
      this.setState(prevState => {
        prevState.position = nextResult ? ((Number(prevState.position) + .1).toFixed(1)) : ((Number(prevState.position) - .1).toFixed(1));
        return {
          prevState
        }
      }, () => {
        if (Number(this.state.position) % 1 === 0) {
          clearInterval(wholeNumber);
        }
      })
    }, 35)
  }

  async componentDidMount() {
    const productId = window.location.href.split('/').filter((item) => { return Number(item) }).join('') || 1;
    const config = {
      url: `http://localhost:8002/images/${productId}`,
      method: `GET`,
    }
    const results = await axios(config)
    this.setState({
      images: results.data
    }, () => {
      // console.log(this.state)
    })
  }
  render() {
    const { featuresSlider, sliderRoot, slider, sliderViewport, innerSlider, figureRoot, figureFeatures, pictureRoot, arrowButton, prevNextButton, prev, next, arrowButtonIcon, arrow } = style;
    const { images } = this.state;
    const { changeImage } = this;
    return (
      <div className={featuresSlider}>
        <div className={sliderRoot}>
          <div className={slider}>
            <div className={sliderViewport}>
              <div className={innerSlider} style={{ left: '0px', transform: `translateX(${this.state.position * -100}%)` }}>
                {
                  images !== undefined ?
                    images.map((image, index) => {
                      return (
                        <figure className={`${figureRoot}, ${figureFeatures}`} style={{ position: 'absolute', left: `${index * 100}%` }} key={index}>
                          <picture className={pictureRoot}>
                            <img crossOrigin = 'true' src={Object.values(image)}></img>
                          </picture>
                        </figure>
                      )
                    }) : null
                }
              </div>


              <button className={`${arrowButton} ${prevNextButton} ${prev}`} disabled={Number(this.state.position) - 1 < 0 ? true : false} onClick={changeImage}>
                <svg className={arrowButtonIcon} viewBox='0 0 100 100'>
                  <path className={arrow} d="M33.8352105,100 C31.4906934,99.997936 29.2429547,99.0649124 27.5861629,97.4060557 C24.1379457,93.9535448 24.1379457,88.3604714 27.5861629,84.9079605 L62.6044109,49.8897124 L27.5861629,14.8714644 C24.3395013,11.3872106 24.4353002,5.95761395 27.8028539,2.59006023 C31.1704076,-0.777493487 36.6000043,-0.873292384 40.0842581,2.37336919 L87.6006014,49.8897124 L40.0842581,97.4060557 C38.4274663,99.0649124 36.1797276,99.997936 33.8352105,100 L33.8352105,100 Z" >
                  </path>
                </svg>
              </button>
              <button className={`${arrowButton} ${prevNextButton} ${next}`} disabled={Number(this.state.position) + 1 > this.state.images.length - 1 ? true : false} onClick={changeImage}>
                <svg className={arrowButtonIcon} viewBox='0 0 100 100'>
                  <path className={arrow} d="M33.8352105,100 C31.4906934,99.997936 29.2429547,99.0649124 27.5861629,97.4060557 C24.1379457,93.9535448 24.1379457,88.3604714 27.5861629,84.9079605 L62.6044109,49.8897124 L27.5861629,14.8714644 C24.3395013,11.3872106 24.4353002,5.95761395 27.8028539,2.59006023 C31.1704076,-0.777493487 36.6000043,-0.873292384 40.0842581,2.37336919 L87.6006014,49.8897124 L40.0842581,97.4060557 C38.4274663,99.0649124 36.1797276,99.997936 33.8352105,100 L33.8352105,100 Z" transform='translate(100, 100) rotate(180)' >
                  </path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductFeaturesCarousel;