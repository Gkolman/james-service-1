import React from 'react';
import Header from './Header.jsx';
import axios from 'axios';
import ProductDetails from './ProductDetails.jsx';
import ProductFeatures from './ProductFeatures.jsx';
import ProductDescription from './ProductDescription.jsx';
import ProductMaterial from './ProductMaterial.jsx';

import style from '../app.scss';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const config = {
      method: 'GET',
      url: 'http://localhost:9000/proxy',

    }

    return axios(config)
      .then((results) => {
        console.log(results.data);
      })
  }

  render() {
    return (
      <div>
        <Header style={style} />
        <ProductDetails style={style} />
        <ProductFeatures style={style} />
        <ProductDescription style={style} />
        <ProductMaterial style={style} />
      </div>
    )
  }
}

export default App;