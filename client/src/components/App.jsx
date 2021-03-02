import React from 'react';
import axios from 'axios';
import ProductDetails from './ProductDetails.jsx';
import ProductFeatures from './ProductFeatures.jsx';
import ProductDescription from './ProductDescription.jsx';
import fakeData from '../../dist/fakeData.js';
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
        console.log(fakeData);
        console.log(results.data);
        this.setState({
          ...results.data
        })
      })
  }

  render() {
    const { productFeatures, productInfo, materialSpecification, technicalDetails, careInstructions } = this.state;
    let descriptor;
    if (productInfo) {
      descriptor = Object.values(productInfo[0]).join('');
    }
    return (
      <div>
        <ProductDetails style={style} />
        <ProductFeatures productFeatures={productFeatures} style={style} />
        <ProductDescription currentProductDetails={productInfo} style={style} selector={`Product Description`} descriptor={descriptor} />
        <ProductDescription currentProductDetails={materialSpecification} style={style} selector={`Material Specification`} />
        <ProductDescription currentProductDetails={technicalDetails} style={style} selector={`Technical Details`} />
        <ProductDescription currentProductDetails={careInstructions} style={style} selector={`Care Instructions`} />
      </div>
    )
  }
}

export default App;