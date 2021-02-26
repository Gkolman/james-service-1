import React from 'react';
import Header from './Header.jsx';
import axios from 'axios';



class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const config = {
      method: 'GET',
      url: 'http://localhost:9000/test',

    }

    return axios(config)
      .then((results) => {
        console.log(results.data);
      })
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
}

export default App;