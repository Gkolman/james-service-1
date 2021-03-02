import React from 'react';
import axios from 'axios';
import ProductDetails from './ProductDetails.jsx';
import ProductFeatures from './ProductFeatures.jsx';
import ProductDescription from './ProductDescription.jsx';
// import fakeData from '../../dist/fakeData.js';
import style from '../app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    const config = {
      method: 'GET',
      url: 'http://localhost:9000/fake_data',
    }

    return axios(config)
      .then((results) => {
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

    return components.map((component, index) => {
      if (index === 0) {

        return <ProductDetails key={index} currentComponentDetails={component[1]} style={style} />
      } else if (index === 1) {
        return <ProductFeatures key={index} currentComponentDetails={component[1]} style={style} />
      } else {
        return <ProductDescription key={index} currentComponentDetails={component[1]} style={style} selector={component[0].toString().split('_').join(' ')} descriptor={descriptor} />
      }
    })
  }
}

export default App;