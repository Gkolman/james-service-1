import React from 'react';
import axios from 'axios';
import ProductDetails from './ProductDetails.jsx';
import ProductFeatures from './ProductFeatures.jsx';
import ProductDescription from './ProductDescription.jsx';
import Extra from './Extra.jsx';
import CurrentProduct from './CurrentProduct.jsx';
import FooterJSX from './Footer.jsx';
// import fakeData from '../../dist/fakeData.js';
import style from '../app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const [input] = event.target.children;
    const config = {
      method: `GET`,
      url: `http://localhost:9000/fake_data/${input.value}`
    }
    if (input.value > 0 && input.value <= 100) {
      return axios(config)
        .then((results) => {
          this.setState({
            ...results.data
          });
        });
    }
  }

  componentDidMount() {
    const config = {
      method: 'GET',
      url: 'http://localhost:9000/fake_data/10',
    }

    return axios(config)
      .then((results) => {
        // console.log(results.data)
        this.setState({
          ...results.data
        })
      })
  }

  render() {
    const { productFeatures, product_description, material_specification, technical_details, careInstructions } = this.state;
    const components = Object.entries(this.state);
    let descriptor;
    if (product_description) {
      descriptor = Object.values(product_description[0]).join('');
    }
    return (
      <div id={style.productFeatures}>
        <CurrentProduct handleSubmit={this.handleSubmit}/>
        {components.map((component, index) => {
          if (component[0] === 'extra') {
            return <Extra key={index} currentComponentDetails={component[1]} style={style} />
          } else if (index === 0) {
            return <ProductDetails key={index} currentComponentDetails={component[1]} style={style} />
          } else if (index === 1) {
            return <ProductFeatures key={index} currentComponentDetails={component[1]} style={style} />
          } else {
            return <ProductDescription key={index} currentComponentDetails={component[1]} style={style} selector={component[0].toString().split('_').join(' ')} descriptor={descriptor} />
          }
        })}
        <FooterJSX style={style} />
      </div>
    )

  }
}

export default App;